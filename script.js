let currentLang="ar";
const fmt=n=>n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
function v(id){const x=parseFloat(document.getElementById(id).value);return isNaN(x)?0:x;}

const i18n={
  ar:{
    'header-title':'حاسبة الراتب',
    'header-subtitle':'مفصّلة وقابلة للتعديل',
    'net-salary':'صافي الراتب الشهري',
    'gross-salary':'الراتب الإجمالي',
    'basic-salary':'💼 الراتب الأساسي',
    'total-allowances':'➕ إجمالي البدلات',
    'gosi-deduction':'➖ حسم التأمينات',
    'allowance-summary':'ملخص البدلات المحتسبة',
    'rates-section':'معدّلات الأجر',
    'settings-title':'إعدادات العمل والتأمينات',
    'basic-inputs':'المدخلات الأساسية',
    'basic-salary-label':'الراتب الأساسي (ريال)',
    'gosi-rate':'نسبة التأمينات %',
    'daily-hours':'ساعات العمل اليومية',
    'work-days':'أيام العمل في الأسبوع',
    'ot-multiplier':'معامل أجر الإضافي',
    'eid-multiplier':'معامل أجر العيد',
    'calc-note':'💡 <b>أساس الحساب على الأيام الفعلية:</b> أيام العمل الشهرية = أيام الأسبوع × 4.33 أسبوع. أجر اليوم = الإجمالي ÷ 30. أجر الساعة = أجر اليوم ÷ ساعات العمل اليومية.',
    'allowances-title':'البدلات',
    'allowances-subtitle':'أضف، عدّل، أو احذف البدلات',
    'allowances-desc':'كل بدل إما <b>نسبة من الأساسي</b> أو <b>مبلغ ثابت</b>. اضغط «＋ أضف بدلاً» لإنشاء بند جديد.',
    'allowance-name':'اسم البدل',
    'allowance-type':'النوع',
    'percent-basic':'نسبة % من الأساسي',
    'fixed-amount':'مبلغ ثابت',
    'add-allowance':'＋ أضف بدلاً',
    'allowance-summary-title':'ملخص البدلات المحتسبة',
    'total-allowances-summary':'إجمالي البدلات',
    'allowance-pct-note':'نسبة البدلات %s% من الأساسي',
    'gosi-calc-note':'🔎 <b>طريقة الحساب:</b> التأمينات (%s%) تُحسب على %s، أي %s ريال. الصافي = الإجمالي (%s) − التأمينات (%s) = <b>%s ريال</b>.<br>💡 لتحديد أي بدل يدخل في وعاء التأمينات، سمِّه «بدل سكن» (النظام يتعرّف عليه تلقائياً).',
    'projections-title':'سجل الزيادات السنوية المتوقّعة',
    'projections-subtitle':'تطوّر راتبك مع العلاوة السنوية',
    'projections-desc':'يُحسب بافتراض إضافة العلاوة للراتب الأساسي كل سنة، وإعادة احتساب البدلات والتأمينات بناءً عليه.',
    'annual-raise':'قيمة العلاوة السنوية',
    'raise-type':'نوع العلاوة',
    'fixed':'مبلغ ثابت',
    'percent':'نسبة %',
    'projection-period':'مدة التوقّع',
    '5-years':'5 سنوات',
    '7-years':'7 سنوات',
    '10-years':'10 سنوات',
    'now':'الآن',
    'year':'سنة',
    'table-year':'السنة',
    'table-basic':'الأساسي',
    'table-allowances':'البدلات',
    'table-gross':'الإجمالي',
    'table-gosi':'التأمينات',
    'table-net':'الصافي',
    'table-delta':'الزيادة التراكمية',
    'no-basic-input':'أدخل الراتب الأساسي لعرض توقّعات الزيادة.',
    'projection-note':'📈 بعد <b>%s سنوات</b>: يرتفع صافي راتبك من %s إلى <b>%s ريال</b> (زيادة شهرية %s ريال). إجمالي ما ستكسبه إضافياً عبر الفترة كاملة ≈ <b>%s ريال</b>.',
    'no-raise-note':'💡 أدخل قيمة العلاوة السنوية أعلاه لرؤية تطوّر راتبك عبر السنوات.',
    'daily-wage':'📅 أجر اليوم',
    'hourly-wage':'⏱️ أجر الساعة',
    'overtime-wage':'➕ أجر الإضافي/ساعة',
    'holiday-wage':'🎉 أجر العيد/ساعة',
    'monthly-workdays':'🗓️ أيام العمل/شهر',
    'monthly-hours':'⏳ ساعات العمل/شهر',
    'rate-div':'الإجمالي ÷ 30',
    'rate-hour':'اليوم ÷ %s ساعة',
    'rate-ot':'الساعة ×%s',
    'rate-days':'%s يوم × 4.33 أسبوع',
    'rate-hours':'%s يوم × %s ساعة',
    'footer-text':'حاسبة راتب · أداة عامة قابلة للتعديل<br>التأمينات تُحسب على (الأساسي + بدل السكن إن وُجد) · البدلات والمعدّلات قابلة للتخصيص بالكامل',
    'no-allowances':'لا بدلات. اضغط «أضف بدلاً».',
    'sakan-basic':'الأساسي + بدل السكن = %s ريال',
    'no-sakan':'الأساسي فقط = %s ريال (لا يوجد بدل سكن محدّد)'
  },
  en:{
    'header-title':'Salary Calculator',
    'header-subtitle':'Detailed & Customizable',
    'net-salary':'Monthly Net Salary',
    'gross-salary':'Gross Salary',
    'basic-salary':'💼 Basic Salary',
    'total-allowances':'➕ Total Allowances',
    'gosi-deduction':'➖ Insurance Deduction',
    'allowance-summary':'Summary of Calculated Allowances',
    'rates-section':'Wage Rates',
    'settings-title':'Work Settings & Insurance',
    'basic-inputs':'Basic Inputs',
    'basic-salary-label':'Basic Salary (SAR)',
    'gosi-rate':'Insurance Rate %',
    'daily-hours':'Daily Working Hours',
    'work-days':'Work Days Per Week',
    'ot-multiplier':'Overtime Rate Multiplier',
    'eid-multiplier':'Holiday Rate Multiplier',
    'calc-note':'💡 <b>Calculation Basis on Actual Days:</b> Monthly work days = work days per week × 4.33 weeks. Daily wage = total ÷ 30. Hourly wage = daily wage ÷ daily work hours.',
    'allowances-title':'Allowances',
    'allowances-subtitle':'Add, Edit, or Delete Allowances',
    'allowances-desc':'Each allowance is either a <b>percentage of basic salary</b> or a <b>fixed amount</b>. Click «＋ Add Allowance» to create a new entry.',
    'allowance-name':'Allowance Name',
    'allowance-type':'Type',
    'percent-basic':'% of Basic Salary',
    'fixed-amount':'Fixed Amount',
    'add-allowance':'＋ Add Allowance',
    'allowance-summary-title':'Summary of Calculated Allowances',
    'total-allowances-summary':'Total Allowances',
    'allowance-pct-note':'Allowances %s% of basic salary',
    'gosi-calc-note':'🔎 <b>Calculation Method:</b> Insurance (%s%) is calculated on %s, which is %s SAR. Net = Total (%s) − Insurance (%s) = <b>%s SAR</b>.<br>💡 To specify which allowance is included in the insurance base, name it "Housing Allowance" (the system recognizes it automatically).',
    'projections-title':'Annual Salary Projections',
    'projections-subtitle':'Your Salary Growth with Annual Raises',
    'projections-desc':'Calculated by adding the annual raise to the basic salary each year, and recalculating allowances and insurance accordingly.',
    'annual-raise':'Annual Raise Amount',
    'raise-type':'Raise Type',
    'fixed':'Fixed Amount',
    'percent':'Percentage %',
    'projection-period':'Projection Period',
    '5-years':'5 Years',
    '7-years':'7 Years',
    '10-years':'10 Years',
    'now':'Now',
    'year':'Year',
    'table-year':'Year',
    'table-basic':'Basic',
    'table-allowances':'Allowances',
    'table-gross':'Gross',
    'table-gosi':'Insurance',
    'table-net':'Net',
    'table-delta':'Cumulative Increase',
    'no-basic-input':'Enter the basic salary to view raise projections.',
    'projection-note':'📈 After <b>%s years</b>: your net salary grows from %s to <b>%s SAR</b> (monthly increase of %s SAR). Total additional earnings over the full period ≈ <b>%s SAR</b>.',
    'no-raise-note':'💡 Enter an annual raise amount above to see your salary growth over the years.',
    'daily-wage':'📅 Daily Wage',
    'hourly-wage':'⏱️ Hourly Wage',
    'overtime-wage':'➕ Overtime/Hour',
    'holiday-wage':'🎉 Holiday/Hour',
    'monthly-workdays':'🗓️ Work Days/Month',
    'monthly-hours':'⏳ Work Hours/Month',
    'rate-div':'Total ÷ 30',
    'rate-hour':'Day ÷ %s hours',
    'rate-ot':'Hour ×%s',
    'rate-days':'%s days × 4.33 weeks',
    'rate-hours':'%s days × %s hours',
    'footer-text':'Salary Calculator · General Customizable Tool<br>Insurance is calculated on (Basic + Housing Allowance if applicable) · Allowances and rates are fully customizable',
    'no-allowances':'No allowances. Click «Add Allowance».',
    'sakan-basic':'Basic + Housing Allowance = %s SAR',
    'no-sakan':'Basic only = %s SAR (no housing allowance specified)'
  }
};

function t(key){
  return i18n[currentLang][key]||key;
}

function getCurrency(){
  return currentLang==='ar'?'ريال':'SAR';
}

function updateDynamicContent(){
  // تحديث كل المحتوى الديناميكي عند تغيير اللغة
  const basic=v("i_basic");
  const pGosi=v("i_gosi")/100;
  const hours=v("i_hours")||7;
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
  const cur=getCurrency();

  // تحديث البطاقات الرئيسية مع العملات
  document.getElementById("net").innerHTML=fmt(net)+'<span class="cur" id="netCur">'+cur+'</span>';
  document.getElementById("gross").innerHTML=fmt(gross)+'<span class="cur" id="grossCur">'+cur+'</span>';
  document.getElementById("basicOut").innerHTML=fmt(basic)+'<span class="cur" id="basicCur">'+cur+'</span>';
  document.getElementById("allowOut").innerHTML=fmt(allow)+'<span class="cur" id="allowCur">'+cur+'</span>';
  document.getElementById("gosiOut").innerHTML="−"+fmt(gosi)+'<span class="cur" id="gosiCur">'+cur+'</span>';

  // تحديث البدلات
  document.getElementById("allowList").innerHTML=computed.map(r=>`
    <div class="row">
      <div class="ic">${r.icon||'➕'}</div>
      <div class="nm">${r.name}<small>${r.type==='percent'?r.value+'% '+t('percent-basic'):t('fixed-amount')}</small></div>
      <div class="pct">${r.type==='percent'?r.value+'%':t('fixed-amount').substring(0,3)}</div>
      <div class="amt">${fmt(r.amt)}</div>
    </div>`).join("")+`
    <div class="row" style="border-top:2px solid var(--teal)">
      <div class="ic" style="background:var(--teal);color:#fff">Σ</div>
      <div class="nm">${t('total-allowances-summary')}<small>${t('allowance-pct-note').replace('%s',allowPct.toFixed(2))}</small></div>
      <div class="pct" style="color:var(--teal);background:var(--teal-soft)">${allowPct.toFixed(1)}%</div>
      <div class="amt" style="color:var(--teal)">${fmt(allow)}</div>
    </div>`;

  // تحديث المعدلات
  document.getElementById("rates").innerHTML=`
    <div class="rate"><div class="rl">${t('daily-wage')}</div><div class="rv">${fmt(day)}</div><div class="rc">${t('rate-div')}</div></div>
    <div class="rate"><div class="rl">${t('hourly-wage')}</div><div class="rv">${fmt(hour)}</div><div class="rc">${t('rate-hour').replace('%s',hours)}</div></div>
    <div class="rate"><div class="rl">${t('overtime-wage')}</div><div class="rv">${fmt(hour*otMult)}</div><div class="rc">${t('rate-ot').replace('%s',otMult)}</div></div>
    <div class="rate"><div class="rl">${t('holiday-wage')}</div><div class="rv">${fmt(hour*eidMult)}</div><div class="rc">${t('rate-ot').replace('%s',eidMult)}</div></div>
    <div class="rate"><div class="rl">${t('monthly-workdays')}</div><div class="rv">${monthlyWorkDays.toFixed(1)}</div><div class="rc">${t('rate-days').replace('%s',daysWk)}</div></div>
    <div class="rate"><div class="rl">${t('monthly-hours')}</div><div class="rv">${(monthlyWorkDays*hours).toFixed(0)}</div><div class="rc">${t('rate-hours').replace('%s',monthlyWorkDays.toFixed(1)).replace('%s',hours)}</div></div>`;

  // تحديث ملاحظة التأمينات
  const sakanNote = sakanAmount>0 ? t('sakan-basic').replace('%s',fmt(basic+sakanAmount)) : t('no-sakan').replace('%s',fmt(basic));
  const gosi_pct = v("i_gosi");
  document.getElementById("gosiNote").innerHTML=t('gosi-calc-note')
    .replace('%s',gosi_pct)
    .replace('%s',sakanNote)
    .replace('%s',fmt(gosi))
    .replace('%s',fmt(gross))
    .replace('%s',fmt(gosi))
    .replace('%s',fmt(net));

  // تحديث الإسقاطات
  const raiseVal=v("i_raise");
  const raiseType=document.getElementById("i_raiseType").value;
  const years=parseInt(document.getElementById("i_years").value)||10;

  if(!basic){
    document.getElementById("projTable").innerHTML="";
    document.getElementById("projNote").innerHTML=t('no-basic-input');
  }else{
    let curBasic=basic;
    const rows=[];
    const base=computeFor(basic,pGosi);
    for(let y=0;y<=years;y++){
      const r=computeFor(curBasic,pGosi);
      rows.push({y, ...r, netDelta:r.net-base.net});
      curBasic += raiseType==='percent' ? curBasic*(raiseVal/100) : raiseVal;
    }

    const head=`<thead><tr>
      <th>${t('table-year')}</th><th>${t('table-basic')}</th><th>${t('table-allowances')}</th><th>${t('table-gross')}</th>
      <th>${t('table-gosi')}</th><th>${t('table-net')}</th><th>${t('table-delta')}</th></tr></thead>`;
    const body=`<tbody>`+rows.map(r=>`<tr>
      <td>${r.y===0?t('now'):t('year')+' '+r.y}</td>
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
      document.getElementById("projNote").innerHTML=t('projection-note')
        .replace('%s',years)
        .replace('%s',fmt(base.net))
        .replace('%s',fmt(last.net))
        .replace('%s',fmt(totalGain))
        .replace('%s',fmt(totalEarnedExtra));
    }else{
      document.getElementById("projNote").innerHTML=t('no-raise-note');
    }
  }

  // التأكد من تحديث جميع العملات
  if(document.getElementById('netCur'))document.getElementById('netCur').textContent=cur;
  if(document.getElementById('grossCur'))document.getElementById('grossCur').textContent=cur;
  if(document.getElementById('basicCur'))document.getElementById('basicCur').textContent=cur;
  if(document.getElementById('allowCur'))document.getElementById('allowCur').textContent=cur;
  if(document.getElementById('gosiCur'))document.getElementById('gosiCur').textContent=cur;
}

function updateAllContent(){
  updatePageLanguage();
  renderAllowEditor();
  const basic=v("i_basic");
  if(basic){
    updateDynamicContent();
  }else{
    // إذا لم يكن هناك راتب أساسي، حدّث المحتوى الثابت فقط
    document.getElementById("allowList").innerHTML='';
    document.getElementById("rates").innerHTML='';
    document.getElementById("projTable").innerHTML='';
    document.getElementById("projNote").innerHTML=t('no-basic-input');
  }
}

function toggleLanguage(){
  currentLang=currentLang==='ar'?'en':'ar';
  const html=document.documentElement;
  html.lang=currentLang;
  html.dir=currentLang==='ar'?'rtl':'ltr';
  if(currentLang==='en')html.classList.add('en');
  else html.classList.remove('en');
  document.getElementById('langToggle').textContent=currentLang==='ar'?'EN':'العربية';
  localStorage.setItem('lang',currentLang);
  updateAllContent();
}

function toggleTheme(){
  document.body.classList.toggle('dark-mode');
  const isDark=document.body.classList.contains('dark-mode');
  document.getElementById('themeToggle').querySelector('.theme-icon').textContent=isDark?'☀️':'🌙';
  localStorage.setItem('theme',isDark?'dark':'light');
}

function updatePageLanguage(){
  document.querySelector('h1').textContent=t('header-title');
  document.querySelector('header p').textContent=t('header-subtitle');

  // تحديث جميع العناصر التي تحتوي على data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(el)el.textContent=t(key);
  });

  // تحديث بطاقات الملخص
  const currencyLabel=getCurrency();
  ['netLabel','grossLabel','basicLabel','allowLabel','gosiLabel'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    if(id==='basicLabel')el.textContent=t('basic-salary');
    else if(id==='allowLabel')el.textContent=t('total-allowances');
    else if(id==='gosiLabel')el.textContent=t('gosi-deduction');
    else if(id==='netLabel')el.textContent=t('net-salary');
    else if(id==='grossLabel')el.textContent=t('gross-salary');
  });

  // تحديث عملات البطاقات
  if(document.getElementById('netCur'))document.getElementById('netCur').textContent=currencyLabel;
  if(document.getElementById('grossCur'))document.getElementById('grossCur').textContent=currencyLabel;
  if(document.getElementById('basicCur'))document.getElementById('basicCur').textContent=currencyLabel;
  if(document.getElementById('allowCur'))document.getElementById('allowCur').textContent=currencyLabel;
  if(document.getElementById('gosiCur'))document.getElementById('gosiCur').textContent=currencyLabel;

  // تحديث النصوص الثابتة الأخرى
  [
    {id:'calcNote',key:'calc-note',innerHTML:true},
    {id:'allowancesDesc',key:'allowances-desc',innerHTML:true},
    {id:'projDesc',key:'projections-desc',innerHTML:true},
    {id:'addAllowBtn',key:'add-allowance'},
    {id:'btn-fixed',key:'fixed'},
    {id:'btn-percent',key:'percent'},
    {id:'btn-5y',key:'5-years'},
    {id:'btn-7y',key:'7-years'},
    {id:'btn-10y',key:'10-years'},
    {id:'footer',key:'footer-text',innerHTML:true}
  ].forEach(({id,key,innerHTML})=>{
    const el=document.getElementById(id);
    if(el){
      if(innerHTML)el.innerHTML=t(key);
      else el.textContent=t(key);
    }
  });
}

function initTheme(){
  const savedTheme=localStorage.getItem('theme')||'light';
  if(savedTheme==='dark')toggleTheme();
  const savedLang=localStorage.getItem('lang')||'ar';
  if(savedLang!=='ar'){
    currentLang='en';
    document.documentElement.lang='en';
    document.documentElement.dir='ltr';
    document.documentElement.classList.add('en');
    document.getElementById('langToggle').textContent='العربية';
    updatePageLanguage();
  }
}

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
  {name:"بدل إعاشة",     type:"fixed",   value:1000,  icon:"🍽️"},
];

function renderAllowEditor(){
  const html=ALLOWANCES.map((a,i)=>`
    <div class="alw-row">
      <div class="fld"><label>${t('allowance-name')}</label>
        <input value="${a.name.replace(/"/g,'&quot;')}" oninput="updateAllow(${i},'name',this.value)"></div>
      <div class="fld"><label>${t('allowance-type')}</label>
        <select onchange="updateAllow(${i},'type',this.value)">
          <option value="percent" ${a.type==='percent'?'selected':''}>${t('percent-basic')}</option>
          <option value="fixed" ${a.type==='fixed'?'selected':''}>${t('fixed-amount')}</option>
        </select></div>
      <div class="fld"><label>${a.type==='percent'?t('allowance-type')+'%':t('fixed-amount')}</label>
        <input type="number" step="0.01" min="0" value="${a.value}" oninput="updateAllow(${i},'value',this.value)" title="${a.type==='percent'?'استخدم الأسهم لتعديل دقيق (0.01) أو اكتب القيمة مباشرة':''}"></div>
      <button class="alw-del" onclick="removeAllow(${i})" title="${t('allowance-name')}">🗑️</button>
    </div>`).join("");
  document.getElementById("allowEditor").innerHTML=html||`<p style="font-size:13px;color:var(--muted)">${t('no-allowances')}</p>`;
}
function updateAllow(i,field,val){
  if(field==='value'){
    // قبول الكسور العشرية للنسب المئوية (مثل 4.33%)
    val = parseFloat(val)||0;
    // تحديد عدد الكسور العشرية الأقصى (4 كسور عشرية)
    if(ALLOWANCES[i].type==='percent'){
      val = Math.round(val*10000)/10000;
    }
  }
  ALLOWANCES[i][field]=val;
  if(field==='type'&&val==='percent'){
    // عند التحويل إلى نسبة مئوية، قبول الكسور العشرية
    ALLOWANCES[i].value = ALLOWANCES[i].value;
  }
  if(field==='type'&&val==='fixed'){
    // عند التحويل إلى مبلغ ثابت
    ALLOWANCES[i].value = ALLOWANCES[i].value;
  }
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
  const hours=v("i_hours")||7;
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

  const cur=getCurrency();
  document.getElementById("net").innerHTML=fmt(net)+'<span class="cur" id="netCur">'+cur+'</span>';
  document.getElementById("gross").innerHTML=fmt(gross)+'<span class="cur" id="grossCur">'+cur+'</span>';
  document.getElementById("basicOut").innerHTML=fmt(basic)+'<span class="cur" id="basicCur">'+cur+'</span>';
  document.getElementById("allowOut").innerHTML=fmt(allow)+'<span class="cur" id="allowCur">'+cur+'</span>';
  document.getElementById("gosiOut").innerHTML="−"+fmt(gosi)+'<span class="cur" id="gosiCur">'+cur+'</span>';

  document.getElementById("allowList").innerHTML=computed.map(r=>`
    <div class="row">
      <div class="ic">${r.icon||'➕'}</div>
      <div class="nm">${r.name}<small>${r.type==='percent'?r.value+'% '+t('percent-basic'):t('fixed-amount')}</small></div>
      <div class="pct">${r.type==='percent'?r.value+'%':t('fixed-amount').substring(0,3)}</div>
      <div class="amt">${fmt(r.amt)}</div>
    </div>`).join("")+`
    <div class="row" style="border-top:2px solid var(--teal)">
      <div class="ic" style="background:var(--teal);color:#fff">Σ</div>
      <div class="nm">${t('total-allowances-summary')}<small>${t('allowance-pct-note').replace('%s',allowPct.toFixed(2))}</small></div>
      <div class="pct" style="color:var(--teal);background:var(--teal-soft)">${allowPct.toFixed(1)}%</div>
      <div class="amt" style="color:var(--teal)">${fmt(allow)}</div>
    </div>`;

  document.getElementById("rates").innerHTML=`
    <div class="rate"><div class="rl">${t('daily-wage')}</div><div class="rv">${fmt(day)}</div><div class="rc">${t('rate-div')}</div></div>
    <div class="rate"><div class="rl">${t('hourly-wage')}</div><div class="rv">${fmt(hour)}</div><div class="rc">${t('rate-hour').replace('%s',hours)}</div></div>
    <div class="rate"><div class="rl">${t('overtime-wage')}</div><div class="rv">${fmt(hour*otMult)}</div><div class="rc">${t('rate-ot').replace('%s',otMult)}</div></div>
    <div class="rate"><div class="rl">${t('holiday-wage')}</div><div class="rv">${fmt(hour*eidMult)}</div><div class="rc">${t('rate-ot').replace('%s',eidMult)}</div></div>
    <div class="rate"><div class="rl">${t('monthly-workdays')}</div><div class="rv">${monthlyWorkDays.toFixed(1)}</div><div class="rc">${t('rate-days').replace('%s',daysWk)}</div></div>
    <div class="rate"><div class="rl">${t('monthly-hours')}</div><div class="rv">${(monthlyWorkDays*hours).toFixed(0)}</div><div class="rc">${t('rate-hours').replace('%s',monthlyWorkDays.toFixed(1)).replace('%s',hours)}</div></div>`;

  const sakanNote = sakanAmount>0 ? t('sakan-basic').replace('%s',fmt(basic+sakanAmount)) : t('no-sakan').replace('%s',fmt(basic));
  const gosi_pct = v("i_gosi");
  document.getElementById("gosiNote").innerHTML=t('gosi-calc-note')
    .replace('%s',gosi_pct)
    .replace('%s',sakanNote)
    .replace('%s',fmt(gosi))
    .replace('%s',fmt(gross))
    .replace('%s',fmt(gosi))
    .replace('%s',fmt(net));

  renderProjection(basic, pGosi);
}

function renderProjection(basic, pGosi){
  const raiseVal=v("i_raise");
  const raiseType=document.getElementById("i_raiseType").value;
  const years=parseInt(document.getElementById("i_years").value)||10;

  if(!basic){
    document.getElementById("projTable").innerHTML="";
    document.getElementById("projNote").innerHTML=t('no-basic-input');
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
    <th>${t('table-year')}</th><th>${t('table-basic')}</th><th>${t('table-allowances')}</th><th>${t('table-gross')}</th>
    <th>${t('table-gosi')}</th><th>${t('table-net')}</th><th>${t('table-delta')}</th></tr></thead>`;
  const body=`<tbody>`+rows.map(r=>`<tr>
    <td>${r.y===0?t('now'):t('year')+' '+r.y}</td>
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
    document.getElementById("projNote").innerHTML=t('projection-note')
      .replace('%s',years)
      .replace('%s',fmt(base.net))
      .replace('%s',fmt(last.net))
      .replace('%s',fmt(totalGain))
      .replace('%s',fmt(totalEarnedExtra));
  }else{
    document.getElementById("projNote").innerHTML=t('no-raise-note');
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

initTheme();
loadState();
renderAllowEditor();
calc();
