# 🔧 دليل التطوير — Development Guide

## المتطلبات

- متصفح حديث
- محرر نصوص (VS Code مُوصى به)
- Node.js (اختياري — للاختبار الآلي)

لا حاجة لـ npm install أو أدوات بناء.

---

## التشغيل

```bash
# مباشر
open index.html

# خادم محلي (مُوصى به ليعمل localStorage بشكل أمثل)
python3 -m http.server 8000 
```

---

## بنية الملف

```html
<head>
  <style> /* CSS: متغيرات + بطاقات + محرر البدلات + أزرار مقسّمة + جدول التوقّع */ </style>
</head>
<body>
  <header> الترويسة </header>
  بطاقات الملخص (الصافي، الإجمالي، الأساسي، البدلات، التأمينات)
  01 ملخص البدلات المحتسبة
  02 معدّلات الأجر
  03 إعدادات العمل والتأمينات
  04 البدلات (المحرر الديناميكي)
  05 سجل الزيادات السنوية (+ شريط العلاوة)
  <script>
    /* الثوابت + ALLOWANCES
       renderAllowEditor / updateAllow / addAllowance / removeAllow
       computeFor (المحرك)
       calc (الحساب + العرض)
       renderProjection (التوقّعات)
       setRaiseType / setYears (الأزرار المقسّمة)
       saveState / loadState (الحفظ المحلي)
       التهيئة */
  </script>
</body>
```

---

## الاختبار بدون متصفح (Node DOM Simulation)

### فحص البناء

```bash
node -e "
const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const m=html.match(/<script>([\s\S]*?)<\/script>/g);
let js='';m.forEach(b=>{if(!b.includes('src='))js+=b.replace(/<\/?script>/g,'')+'\n';});
try{ new Function(js); console.log('✅ JS سليم'); }
catch(e){ console.log('❌', e.message); }
"
```

### اختبار الحساب والحفظ

```bash
node -e "
const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const m=html.match(/<script>([\s\S]*?)<\/script>/g);
let js='';m.forEach(b=>{if(!b.includes('src='))js+=b.replace(/<\/?script>/g,'')+'\n';});

function mk(v){const el={innerHTML:'',_v:v||'',style:{},classList:{toggle:()=>{},add:()=>{},remove:()=>{}},dataset:{},addEventListener:()=>{}};Object.defineProperty(el,'value',{get(){return el._v;},set(x){el._v=x;}});return el;}
const E={};
const defaults={i_basic:'10000',i_gosi:'9.75',i_hours:'8',i_days:'5',i_otMult:'1.5',i_eidMult:'2',i_raise:'0',i_raiseType:'fixed',i_years:'10'};
const store={};
global.localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=String(v);}};
global.document={getElementById:id=>{if(!E[id])E[id]=mk(defaults[id]);return E[id];},querySelectorAll:()=>[]};

js+='\nglobalThis._t={computeFor,calc,saveState,loadState,get A(){return ALLOWANCES;}};';
eval(js);
const t=globalThis._t;
t.calc();
const r=t.computeFor(10000,0.0975);
console.log('صافي 10000:', r.net.toFixed(2), '(متوقع 14281.25)');
"
```

---

## إضافة ميزة (أمثلة)

### إضافة بدل افتراضي جديد
```javascript
let ALLOWANCES=[
  // ...
  {name:"بدل نقل",type:"fixed",value:300,icon:"🚌"},
];
```

### إضافة مدة توقّع (مثل 15 سنة)
```html
<button type="button" class="seg-btn" data-val="15" onclick="setYears(15)">15 سنة</button>
```

### حفظ حقل إدخال جديد
```javascript
const INPUT_IDS=[..., "i_newField"];
```

---

## معايير الكود

- **الواجهة بالعربية، RTL**، والأرقام لاتينية (123)
- **التعليقات بالعربية**
- **أسماء الدوال بالإنجليزية**: `renderX`, `computeX`, `calc`, `setX`
- استخدم `var(--teal)` لا ألواناً ثابتة
- بعد أي تغيير بيانات: استدعِ `calc()` (تحفظ تلقائياً)

---

## أخطاء شائعة

| المشكلة | الحل |
|--------|------|
| الأرقام تظهر عربية (٠١٢) | `font-variant-numeric:lining-nums` + `toLocaleString("en-US")` |
| المدخلات لا تُحفظ | `localStorage` لا يعمل في `file://` ببعض المتصفحات — استخدم خادماً محلياً |
| التأمينات خاطئة | تأكد أن بدل السكن اسمه يحتوي «سكن» ليُكشف تلقائياً |
| الزر المقسّم لا يتفعّل | تأكد من تطابق `data-val` مع القيمة |

---

## قائمة فحص قبل الإصدار

- [ ] فحص البناء سليم
- [ ] الحساب صحيح (قارن بمثال موثّق)
- [ ] الحفظ والاسترجاع يعملان
- [ ] التوقّعات تُحسب لكل المدد
- [ ] الأرقام لاتينية في كل مكان
- [ ] التجاوب (موبايل/ديسكتوب)
