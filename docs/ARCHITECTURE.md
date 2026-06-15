# 🏛️ المعمارية — Architecture

## الفلسفة

تطبيق **single-file**: كل HTML/CSS/JS في `index.html`. لا خادم، لا أدوات بناء، لا تبعيات خارجية. يعمل من `file://` مباشرة.

---

## الطبقات

```
┌──────────────────────────────────────┐
│           العرض (UI / HTML)            │
│  بطاقات الملخص + الأقسام + المحرر        │
└──────────────────────────────────────┘
                  ↕
┌──────────────────────────────────────┐
│         التقديم (Render)              │
│  renderAllowEditor / renderProjection  │
│  + تحديث الـ DOM داخل calc()            │
└──────────────────────────────────────┘
                  ↕
┌──────────────────────────────────────┐
│          المنطق (Logic)               │
│  computeFor(basic, pGosi)             │
│  calc()                               │
└──────────────────────────────────────┘
                  ↕
┌──────────────────────────────────────┐
│        الحالة + الحفظ                  │
│  ALLOWANCES[] + حقول الإدخال            │
│  saveState / loadState (localStorage)  │
└──────────────────────────────────────┘
```

---

## تدفّق البيانات

```
تحميل الصفحة
   │
   ├─> loadState()        # استرجاع المدخلات والبدلات من localStorage
   ├─> renderAllowEditor() # بناء محرر البدلات
   └─> calc()             # الحساب + العرض + الحفظ التلقائي
            │
المستخدم يعدّل حقلاً / بدلاً / زراً
   │
   ▼
calc()  ──> computeFor() لكل سنة ──> renderProjection()
   │
   └─> saveState()        # حفظ تلقائي بعد كل إعادة حساب
```

---

## الدالة المحورية: `computeFor(basic, pGosi)`

قلب الحاسبة — تحسب الراتب لأي قيمة أساسي. تُستخدم مرتين:
1. للراتب الحالي (في `calc()`)
2. لكل سنة في التوقّعات (في `renderProjection()`)

هذا يضمن **اتساقاً تاماً** بين الملخص والجدول.

```javascript
function computeFor(basic, pGosi){
  let allow=0, sakanAmount=0;
  ALLOWANCES.forEach(a=>{
    const amt = a.type==='percent' ? basic*(a.value/100) : a.value;
    allow += amt;
    if(a.sakan) sakanAmount += amt;   // بدل السكن يدخل وعاء التأمينات
  });
  const gross = basic + allow;
  const gosi  = (basic + sakanAmount) * pGosi;
  const net   = gross - gosi;
  return { basic, allow, gross, gosi, net };
}
```

---

## نظام البدلات الديناميكي

البدلات مصفوفة كائنات، كل بدل:

```javascript
{ name:"بدل سكن", type:"percent"|"fixed", value:25, icon:"🏠", sakan:true }
```

- `type:"percent"` → `value` نسبة من الأساسي
- `type:"fixed"` → `value` مبلغ ثابت
- `sakan:true` → يدخل في وعاء التأمينات (يُحدّد تلقائياً إن احتوى الاسم «سكن»)

| الدالة | الوظيفة |
|--------|---------|
| `renderAllowEditor()` | بناء صفوف المحرر من المصفوفة |
| `updateAllow(i,field,val)` | تعديل بدل + كشف السكن + إعادة الحساب |
| `addAllowance()` | إضافة بند جديد |
| `removeAllow(i)` | حذف بند |

---

## نظام الأزرار المقسّمة (Segmented Controls)

نوع العلاوة ومدة التوقّع يستخدمان أزراراً بدل القوائم المنسدلة. القيمة الفعلية تُخزّن في `<input type="hidden">`، والأزرار تحدّث الكلاس `.active`:

```javascript
function setRaiseType(val){
  document.getElementById("i_raiseType").value = val;
  // تحديث الزر النشط + calc()
}
```

---

## نقاط التوسعة

| تريد أن... | عدّل... |
|-----------|--------|
| تضيف بدلاً افتراضياً | مصفوفة `ALLOWANCES` الأولية |
| تغيّر معادلة التأمينات | `computeFor()` |
| تضيف معدّل أجر جديد | قسم المعدّلات في `calc()` |
| تضيف مدة توقّع | أزرار `#seg_years` + `setYears()` |
| تحفظ حقلاً جديداً | أضفه لمصفوفة `INPUT_IDS` |
