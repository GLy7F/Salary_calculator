# نموذج البيانات - Data Model

## نظرة عامة

يحتفظ التطبيق بحالة البيانات في الذاكرة (JavaScript) ويتم حفظها في `localStorage` للمتصفح.

## هيكل البيانات الرئيسي

### 1. البدلات (ALLOWANCES Array)
```javascript
let ALLOWANCES = [
  {
    name: "بدل سكن",        // string: اسم البدل (يدعم العربية والإنجليزية)
    type: "percent",        // "percent" | "fixed": نوع البدل
    value: 25,              // number: القيمة (نسبة أو مبلغ)
    icon: "🏠",             // string: emoji للتمثيل البصري
    sakan: true             // boolean: هل يدخل في وعاء التأمينات
  },
  {
    name: "بدل مواصلات",
    type: "percent",
    value: 10,
    icon: "🚗",
    sakan: false
  },
  {
    name: "بدل إعاشة",
    type: "fixed",
    value: 1000,
    icon: "🍽️",
    sakan: false
  }
]
```

### 2. متغيرات الإدخال (Input Variables)
جميع هذه المتغيرات موجودة في عناصر HTML بـ IDs:

```javascript
{
  i_basic: number,        // الراتب الأساسي (ريال)
  i_gosi: number,         // نسبة التأمينات (%)
  i_hours: number,        // ساعات العمل اليومية
  i_days: number,         // أيام العمل في الأسبوع
  i_otMult: number,       // معامل أجر الإضافي
  i_eidMult: number,      // معامل أجر العيد
  i_raise: number,        // قيمة العلاوة السنوية
  i_raiseType: string,    // "fixed" | "percent": نوع العلاوة
  i_years: number         // مدة الإسقاط (السنوات)
}
```

### 3. متغيرات الحالة (State Variables)
```javascript
{
  currentLang: string,    // "ar" | "en": اللغة الحالية
  STORE_KEY: string,      // "salaryCalc_v1": مفتاح التخزين
  INPUT_IDS: array        // قائمة IDs الحقول المراد حفظها
}
```

## حالة التطبيق

### 3.1 اللغة (Language State)
```javascript
currentLang = "ar"  // أو "en"

// الملفات المرتبطة:
// - عنصر HTML: lang="ar"
// - الاتجاه: dir="rtl" (عربي) أو dir="ltr" (إنجليزي)
// - Class على <html>: en (عند الإنجليزية فقط)
```

### 3.2 المظهر (Theme State)
```javascript
// يُحفظ في localStorage:
localStorage.getItem('theme') // "light" | "dark"

// عند التفعيل:
document.body.classList.add('dark-mode')
```

### 3.3 البدلات (Allowances State)
```javascript
ALLOWANCES = [
  // مصفوفة الكائنات كما هو موضح أعلاه
]

// يُحفظ كاملاً في localStorage كـ JSON
```

## نموذج البيانات المحفوظ (LocalStorage)

### هيكل البيانات المحفوظة:
```json
{
  "salaryCalc_v1": {
    "inputs": {
      "i_basic": "5000",
      "i_gosi": "9.75",
      "i_hours": "8",
      "i_days": "5",
      "i_otMult": "1.5",
      "i_eidMult": "2",
      "i_raise": "0",
      "i_raiseType": "fixed",
      "i_years": "10"
    },
    "allowances": [
      {
        "name": "بدل سكن",
        "type": "percent",
        "value": 25,
        "icon": "🏠",
        "sakan": true
      }
    ]
  },
  "lang": "ar",
  "theme": "light"
}
```

## عناصر DOM المهمة

### 4.1 بطاقات الملخص (Summary Cards)
```html
<div id="net">...</div>           <!-- صافي الراتب -->
<div id="gross">...</div>         <!-- الراتب الإجمالي -->
<div id="basicOut">...</div>      <!-- الراتب الأساسي -->
<div id="allowOut">...</div>      <!-- إجمالي البدلات -->
<div id="gosiOut">...</div>       <!-- حسم التأمينات -->
```

### 4.2 قائمة البدلات (Allowances List)
```html
<div id="allowEditor">...</div>   <!-- محرر البدلات -->
<div id="allowList">...</div>     <!-- ملخص البدلات -->
```

### 4.3 المعدلات (Wage Rates)
```html
<div id="rates">...</div>         <!-- المعدلات المحسوبة -->
```

### 4.4 جدول الإسقاطات (Projections)
```html
<table id="projTable">...</table> <!-- جدول التوقعات -->
<div id="projNote">...</div>      <!-- ملاحظات الإسقاطات -->
```

### 4.5 التحكم (Controls)
```html
<button id="langToggle">...</button>    <!-- تبديل اللغة -->
<button id="themeToggle">...</button>   <!-- تبديل المظهر -->
<button id="addAllowBtn">...</button>   <!-- إضافة بدل -->
```

## العلاقات بين البيانات

```
المستخدم يدخل البيانات (input event)
    ↓
updateAllow() / calc() / setRaiseType() / setYears()
    ↓
تحديث ALLOWANCES أو متغيرات الإدخال
    ↓
استدعاء calc()
    ↓
حساب القيم المشتقة (صافي، بدلات، معدلات)
    ↓
تحديث DOM
    ↓
استدعاء saveState()
    ↓
حفظ في localStorage
```

## دورة حياة البيانات

### 1. التحميل الأولي (Page Load)
```
1. قراءة lang و theme من localStorage
2. استدعاء initTheme() و loadState()
3. تحميل البدلات المحفوظة أو الافتراضية
4. استدعاء calc() لحساب القيم الأولية
```

### 2. تعديل البيانات
```
1. المستخدم يعدل حقل (oninput)
2. دالة معالج (updateAllow, setRaiseType, إلخ)
3. تحديث ALLOWANCES أو متغيرات
4. استدعاء calc() أو renderAllowEditor()
5. تحديث DOM فوراً
6. حفظ في localStorage تلقائياً
```

### 3. تبديل اللغة
```
1. toggleLanguage()
2. تغيير currentLang و HTML attributes
3. استدعاء updateAllContent()
4. إعادة حساب وعرض جميع المحتوى
5. حفظ اللغة الجديدة
```

### 4. تبديل المظهر
```
1. toggleTheme()
2. إضافة/إزالة class "dark-mode"
3. تطبيق أنماط CSS الجديدة فوراً
4. حفظ تفضيل المظهر
```

## نقاط الاتصال مع localStorage

### كتابة البيانات:
```javascript
localStorage.setItem('salaryCalc_v1', JSON.stringify(data))
localStorage.setItem('lang', currentLang)
localStorage.setItem('theme', isDark ? 'dark' : 'light')
```

### قراءة البيانات:
```javascript
JSON.parse(localStorage.getItem('salaryCalc_v1'))
localStorage.getItem('lang')
localStorage.getItem('theme')
```

## التحقق من صحة البيانات

### 1. القيم الافتراضية:
```javascript
i_hours = i_hours || 7
i_days = i_days || 5
i_otMult = i_otMult || 1.5
i_eidMult = i_eidMult || 2
```

### 2. تحويل الأنواع:
```javascript
const x = parseFloat(document.getElementById(id).value)
return isNaN(x) ? 0 : x
```

### 3. قيود الكسور العشرية:
```javascript
// للنسب المئوية: 4 كسور عشرية
val = Math.round(val * 10000) / 10000
```

## الحدود والقيود

- **الراتب الأساسي**: 0 إلى ∞
- **نسبة التأمينات**: 0% إلى 100%
- **معاملات الأجر**: 0 إلى ∞
- **البدلات النسبية**: 0.01% إلى 999.99%
- **البدلات الثابتة**: 0 إلى ∞
- **سنوات الإسقاط**: 5، 7، 10
