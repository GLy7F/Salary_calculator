const fmt=n=>n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
function v(id){const x=parseFloat(document.getElementById(id).value);return isNaN(x)?0:x;}

/* ====== البدلات الديناميكية ======
   كل بدل: { name, type:"percent"|"fixed", value, icon }
   - percent: value نسبة مئوية من الأساسي
   - fixed: value مبلغ ثابت
   isSakan: لتحديد البدل الذي يدخل في وعاء التأمينات
*/
let ALLOWANCES=[
  {name:"بدل سكن",       type:"percent", value:25, icon:"🏠", sakan:true},
  {name:"بدل مواصلات",   type:"percent", value:10, icon:"🚗"},
  {name:"بدل طبيعة عمل", type:"percent", value:15, icon:"⚙️"},
  {name:"بدل تأهيل",     type:"percent", value:5,  icon:"🎓"},
  {name:"بدل تميز",      type:"percent", value:0,  icon:"⭐"},
  {name:"بدل إعاشة",     type:"fixed",   value:0,  icon:"🍽️"},
];

function renderAllowEditor(){
  const html=ALLOWANCES.map((a,i)=>`
    <div class="alw-row">
      <div class="fld"><label>اسم البدل</label>
        <input value="${a.name.replace(/"/g,'&quot;')}" oninput="updateAllow(${i},'name',this.value)"></div>
      <div class="fld"><label>النوع</label>
        <select onchange="updateAllow(${i},'type',this.value)">
          <option value="percent" ${a.type==='percent'?'selected':''}>نسبة % من الأساسي</option>
          <option value="fixed" ${a.type==='fixed'?'selected':''}>مبلغ ثابت</option>
        </select></div>
      <div class="fld"><label>${a.type==='percent'?'النسبة %':'المبلغ'}</label>
        <input type="number" step="${a.type==='percent'?'1':'0.01'}" ${a.type==='percent'?'min="0"':''} value="${a.value}" oninput="updateAllow(${i},'value',this.value)"></div>
      <button class="alw-del" onclick="removeAllow(${i})" title="حذف">🗑️</button>
    </div>`).join("");
  document.getElementById("allowEditor").innerHTML=html||'<p style="font-size:13px;color:var(--muted)">لا بدلات. اضغط «أضف بدلاً».</p>';
}
function updateAllow(i,field,val){
  if(field==='value'){
    val = ALLOWANCES[i].type==='percent' ? Math.round(parseFloat(val)||0) : parseFloat(val)||0;
  }
  ALLOWANCES[i][field]=val;
  if(field==='type'&&val==='percent') ALLOWANCES[i].value=Math.round(ALLOWANCES[i].value);
  ALLOWANCES.forEach(a=>{ a.sakan = /سكن/.test(a.name); });
  if(field==='type'||field==='name')renderAllowEditor();
  calc();
}
function removeAllow(i){ALLOWANCES.splice(i,1);renderAllowEditor();calc();}
function addAllowance(){ALLOWANCES.push({name:"بدل جديد",type:"percent",value:0,icon:"➕"});renderAllowEditor();calc();}

/* حساب صافي الراتب لأساسي معيّن (يُعاد استخدامه في التوقّعات السنوية) */
function computeFor(basic, pGosi){
  let allow=0, sakanAmount=0;
  ALLOWANCES.forEach(a=>{
    const amt = a.type==='percent' ? basic*(a.value/100) : a.value;
    allow+=amt;
    if(a.sakan)sakanAmount+=amt;
  });
  const gross=basic+allow;
  const gosi=(basic+sakanAmount)*pGosi;
  const net=gross-gosi;
  return {basic, allow, gross, gosi, net};
}

function calc(){
  const basic=v("i_basic");
  const pGosi=v("i_gosi")/100;
  const hours=v("i_hours")||8;
  const daysWk=v("i_days")||5;
  const otMult=v("i_otMult")||1.5;
  const eidMult=v("i_eidMult")||2;

  let allow=0, sakanAmount=0;
  const computed=ALLOWANCES.map(a=>{
    const amt = a.type==='percent' ? basic*(a.value/100) : a.value;
    allow+=amt;
    if(a.sakan)sakanAmount+=amt;
    return {...a, amt};
  });

  const gross=basic+allow;
  const gosi=(basic+sakanAmount)*pGosi;
  const net=gross-gosi;
  const allowPct=basic?allow/basic*100:0;

  const day=gross/30;
  const hour=hours>0?day/hours:0;
  const monthlyWorkDays=daysWk*4.33;

  document.getElementById("net").innerHTML=fmt(net)+'<span class="cur">ريال</span>';
  document.getElementById("gross").innerHTML=fmt(gross)+'<span class="cur">ريال</span>';
  document.getElementById("basicOut").innerHTML=fmt(basic)+'<span class="cur">ريال</span>';
  document.getElementById("allowOut").innerHTML=fmt(allow)+'<span class="cur">ريال</span>';
  document.getElementById("gosiOut").innerHTML="−"+fmt(gosi)+'<span class="cur">ريال</span>';

  document.getElementById("allowList").innerHTML=computed.map(r=>`
    <div class="row">
      <div class="ic">${r.icon||'➕'}</div>
      <div class="nm">${r.name}<small>${r.type==='percent'?r.value+'% من الأساسي':'مبلغ ثابت'}</small></div>
      <div class="pct">${r.type==='percent'?r.value+'%':'ثابت'}</div>
      <div class="amt">${fmt(r.amt)}</div>
    </div>`).join("")+`
    <div class="row" style="border-top:2px solid var(--teal)">
      <div class="ic" style="background:var(--teal);color:#fff">Σ</div>
      <div class="nm">إجمالي البدلات<small>نسبة البدلات ${allowPct.toFixed(2)}% من الأساسي</small></div>
      <div class="pct" style="color:var(--teal);background:var(--teal-soft)">${allowPct.toFixed(1)}%</div>
      <div class="amt" style="color:var(--teal)">${fmt(allow)}</div>
    </div>`;

  document.getElementById("rates").innerHTML=`
    <div class="rate"><div class="rl">📅 أجر اليوم</div><div class="rv">${fmt(day)}</div><div class="rc">الإجمالي ÷ 30</div></div>
    <div class="rate"><div class="rl">⏱️ أجر الساعة</div><div class="rv">${fmt(hour)}</div><div class="rc">اليوم ÷ ${hours} ساعة</div></div>
    <div class="rate"><div class="rl">➕ أجر الإضافي/ساعة</div><div class="rv">${fmt(hour*otMult)}</div><div class="rc">الساعة ×${otMult}</div></div>
    <div class="rate"><div class="rl">🎉 أجر العيد/ساعة</div><div class="rv">${fmt(hour*eidMult)}</div><div class="rc">الساعة ×${eidMult}</div></div>
    <div class="rate"><div class="rl">🗓️ أيام العمل/شهر</div><div class="rv">${monthlyWorkDays.toFixed(1)}</div><div class="rc">${daysWk} يوم × 4.33 أسبوع</div></div>
    <div class="rate"><div class="rl">⏳ ساعات العمل/شهر</div><div class="rv">${(monthlyWorkDays*hours).toFixed(0)}</div><div class="rc">${monthlyWorkDays.toFixed(1)} يوم × ${hours} ساعة</div></div>`;

  const sakanNote = sakanAmount>0 ? `الأساسي + بدل السكن = ${fmt(basic+sakanAmount)} ريال` : `الأساسي فقط = ${fmt(basic)} ريال (لا يوجد بدل سكن محدّد)`;
  document.getElementById("gosiNote").innerHTML=
    `🔎 <b>طريقة الحساب:</b> التأمينات (${v("i_gosi")}%) تُحسب على ${sakanNote}، أي ${fmt(gosi)} ريال. `+
    `الصافي = الإجمالي (${fmt(gross)}) − التأمينات (${fmt(gosi)}) = <b>${fmt(net)} ريال</b>.`+
    `<br>💡 لتحديد أي بدل يدخل في وعاء التأمينات، سمِّه «بدل سكن» (النظام يتعرّف عليه تلقائياً).`;

  renderProjection(basic, pGosi);
}

function renderProjection(basic, pGosi){
  const raiseVal=v("i_raise");
  const raiseType=document.getElementById("i_raiseType").value;
  const years=parseInt(document.getElementById("i_years").value)||10;

  if(!basic){
    document.getElementById("projTable").innerHTML="";
    document.getElementById("projNote").innerHTML="أدخل الراتب الأساسي لعرض توقّعات الزيادة.";
    return;
  }

  let curBasic=basic;
  const rows=[];
  const base=computeFor(basic,pGosi);
  for(let y=0;y<=years;y++){
    const r=computeFor(curBasic,pGosi);
    rows.push({y, ...r, netDelta:r.net-base.net});
    curBasic += raiseType==='percent' ? curBasic*(raiseVal/100) : raiseVal;
  }

  const head=`<thead><tr>
    <th>السنة</th><th>الأساسي</th><th>البدلات</th><th>الإجمالي</th>
    <th>التأمينات</th><th>الصافي</th><th>الزيادة التراكمية</th></tr></thead>`;
  const body=`<tbody>`+rows.map(r=>`<tr>
    <td>${r.y===0?'الآن':'سنة '+r.y}</td>
    <td>${fmt(r.basic)}</td>
    <td>${fmt(r.allow)}</td>
    <td>${fmt(r.gross)}</td>
    <td style="color:var(--rose)">−${fmt(r.gosi)}</td>
    <td style="font-weight:800;color:var(--teal-d)">${fmt(r.net)}</td>
    <td>${r.netDelta>0?`<span class="delta">+${fmt(r.netDelta)}</span>`:'—'}</td>
  </tr>`).join("")+`</tbody>`;
  document.getElementById("projTable").innerHTML=head+body;

  const last=rows[rows.length-1];
  const totalGain=last.net-base.net;
  const totalEarnedExtra=rows.reduce((s,r)=>s+r.netDelta*12,0);
  if(raiseVal>0){
    document.getElementById("projNote").innerHTML=
      `📈 بعد <b>${years} سنوات</b>: يرتفع صافي راتبك من ${fmt(base.net)} إلى <b>${fmt(last.net)} ريال</b> `+
      `(زيادة شهرية ${fmt(totalGain)} ريال). `+
      `إجمالي ما ستكسبه إضافياً عبر الفترة كاملة ≈ <b>${fmt(totalEarnedExtra)} ريال</b>.`;
  }else{
    document.getElementById("projNote").innerHTML="💡 أدخل قيمة العلاوة السنوية أعلاه لرؤية تطوّر راتبك عبر السنوات.";
  }
}

function setRaiseType(val){
  document.getElementById("i_raiseType").value=val;
  document.querySelectorAll("#seg_raiseType .seg-btn").forEach(b=>b.classList.toggle("active",b.dataset.val===val));
  calc();
}
function setYears(val){
  document.getElementById("i_years").value=String(val);
  document.querySelectorAll("#seg_years .seg-btn").forEach(b=>b.classList.toggle("active",+b.dataset.val===val));
  calc();
}

const STORE_KEY="salaryCalc_v1";
const INPUT_IDS=["i_basic","i_gosi","i_hours","i_days","i_otMult","i_eidMult","i_raise","i_raiseType","i_years"];
function saveState(){
  const data={inputs:{},allowances:ALLOWANCES};
  INPUT_IDS.forEach(id=>{const el=document.getElementById(id);if(el)data.inputs[id]=el.value;});
  try{localStorage.setItem(STORE_KEY,JSON.stringify(data));}catch(e){}
}
function loadState(){
  let data=null;
  try{const s=localStorage.getItem(STORE_KEY);if(s)data=JSON.parse(s);}catch(e){}
  if(!data)return false;
  if(data.inputs){
    INPUT_IDS.forEach(id=>{const el=document.getElementById(id);if(el&&data.inputs[id]!==undefined)el.value=data.inputs[id];});
  }
  if(Array.isArray(data.allowances)&&data.allowances.length)ALLOWANCES=data.allowances;
  const rt=document.getElementById("i_raiseType").value;
  document.querySelectorAll("#seg_raiseType .seg-btn").forEach(b=>b.classList.toggle("active",b.dataset.val===rt));
  const yr=document.getElementById("i_years").value;
  document.querySelectorAll("#seg_years .seg-btn").forEach(b=>b.classList.toggle("active",b.dataset.val===yr));
  return true;
}

INPUT_IDS.forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener("input",saveState);});
const _calc=calc;
calc=function(){_calc();saveState();};

loadState();
renderAllowEditor();
calc();
