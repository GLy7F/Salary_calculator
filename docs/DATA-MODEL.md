# 🗄️ نموذج البيانات والحفظ — Data Model & Persistence

## الحالة في الذاكرة

```javascript
// مصفوفة البدلات (قابلة للتعديل ديناميكياً)
let ALLOWANCES = [
  { name:"بدل سكن",       type:"percent", value:25, icon:"🏠", sakan:true },
  { name:"بدل مواصلات",   type:"percent", value:10, icon:"🚗" },
  { name:"بدل طبيعة عمل", type:"percent", value:15, icon:"⚙️" },
  { name:"بدل تأهيل",     type:"percent", value:5,  icon:"🎓" },
  { name:"بدل تميز",      type:"percent", value:0,  icon:"⭐" },
  { name:"بدل إعاشة",     type:"fixed",   value:0,  icon:"🍽️" },
];
```

### حقول البدل

| الحقل | النوع | الوصف |
|------|------|-------|
| `name` | string | اسم البدل المعروض |
| `type` | `"percent"` \| `"fixed"` | نسبة من الأساسي أو مبلغ ثابت |
| `value` | number | النسبة (مثل 25) أو المبلغ |
| `icon` | string | أيقونة emoji |
| `sakan` | boolean | هل يدخل وعاء التأمينات (يُحدّد تلقائياً) |

---

## حقول الإدخال

```javascript
const INPUT_IDS = [
  "i_basic",      // الراتب الأساسي
  "i_gosi",       // نسبة التأمينات %
  "i_hours",      // ساعات العمل اليومية
  "i_days",       // أيام العمل في الأسبوع
  "i_otMult",     // معامل أجر الإضافي
  "i_eidMult",    // معامل أجر العيد
  "i_raise",      // قيمة العلاوة السنوية
  "i_raiseType",  // "fixed" | "percent"
  "i_years"       // مدة التوقّع (5/7/10)
];
```

---

## الحفظ المحلي (localStorage)

المفتاح: `salaryCalc_v1`

### صيغة البيانات المحفوظة

```json
{
  "inputs": {
    "i_basic": "10000",
    "i_gosi": "9.75",
    "i_hours": "8",
    "i_days": "5",
    "i_otMult": "1.5",
    "i_eidMult": "2",
    "i_raise": "500",
    "i_raiseType": "fixed",
    "i_years": "10"
  },
  "allowances": [
    { "name":"بدل سكن", "type":"percent", "value":25, "icon":"🏠", "sakan":true },
    ...
  ]
}
```

### آلية الحفظ

```javascript
function saveState(){
  const data = { inputs:{}, allowances:ALLOWANCES };
  INPUT_IDS.forEach(id => data.inputs[id] = document.getElementById(id).value);
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}
```

**متى يُحفظ؟**
- عند أي `input` على الحقول (مستمع أحداث)
- بعد كل `calc()` (مغلّفة لتحفظ تلقائياً) — يلتقط تغييرات البدلات والأزرار

### آلية الاسترجاع

```javascript
function loadState(){
  const data = JSON.parse(localStorage.getItem(STORE_KEY));
  if(!data) return false;
  // استرجاع الحقول
  INPUT_IDS.forEach(id => {
    if(data.inputs[id] !== undefined) document.getElementById(id).value = data.inputs[id];
  });
  // استرجاع البدلات
  if(Array.isArray(data.allowances) && data.allowances.length) ALLOWANCES = data.allowances;
  // مزامنة الأزرار المقسّمة مع القيم المحمّلة
  // ...
  return true;
}
```

تُستدعى `loadState()` **قبل** `renderAllowEditor()` و`calc()` عند تحميل الصفحة.

---

## ترقية الإصدار

عند تغيير صيغة البيانات مستقبلاً، غيّر `STORE_KEY` إلى `salaryCalc_v2` لتجنّب تعارض البيانات القديمة، أو أضف منطق ترقية في `loadState()`.

---

## الخصوصية

- كل البيانات في `localStorage` على جهاز المستخدم فقط
- لا إرسال لأي خادم
- مسح بيانات المتصفح يمسح المحفوظات
