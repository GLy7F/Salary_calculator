# دليل التطوير - Development Guide

## البدء السريع

### المتطلبات
- متصفح حديث (Chrome, Firefox, Safari, Edge)
- محرر نصوص (VSCode, Sublime, إلخ)
- خادم ويب محلي (اختياري للتطوير المتقدم)

### التثبيت
```bash
# لا توجد متطلبات خارجية - استخدم الملفات مباشرة
# افتح index.html في المتصفح
```

## هيكل الملفات

```
.
├── index.html          # الصفحة الرئيسية
├── style.css          # أنماط CSS
├── script.js          # JavaScript logic
├── ARCHITECTURE.md    # توثيق البنية
├── FORMULAS.md        # الصيغ الرياضية
├── DATA-MODEL.md      # نموذج البيانات
├── DEVELOPMENT.md     # هذا الملف
├── CONTRIBUTING.md    # دليل المساهمة
└── Changelog          # سجل التغييرات
```

## إضافة ميزة جديدة

### الخطوة 1: تصميم البيانات
حدد البيانات المطلوبة وأضفها إلى DATA-MODEL.md

### الخطوة 2: تحديث HTML
أضف عناصر HTML جديدة مع IDs فريدة:
```html
<input id="new_field" type="number" oninput="handleNewField()">
```

### الخطوة 3: تحديث CSS
أضف أنماط جديدة إذا لزم الأمر:
```css
.new-class {
  /* الأنماط */
}
```

### الخطوة 4: تحديث JavaScript
أضف المنطق المطلوب:
```javascript
function handleNewField() {
  // المنطق
  calc();
}
```

### الخطوة 5: إضافة الترجمة
أضف النصوص إلى كائن `i18n`:
```javascript
const i18n = {
  ar: {
    'new-key': 'النص بالعربية'
  },
  en: {
    'new-key': 'English text'
  }
}
```

## اختبار الميزات

### 1. اختبار الحسابات
```javascript
// افتح console في المتصفح (F12)
// اختبر الحسابات:
v('i_basic')  // اقرأ قيمة الراتب الأساسي
calc()        // أعد حساب جميع القيم
```

### 2. اختبار اللغات
```javascript
toggleLanguage()  // بدل اللغة
currentLang       // تحقق من اللغة الحالية
```

### 3. اختبار المظهر
```javascript
toggleTheme()     // بدل المظهر
document.body.classList.contains('dark-mode')
```

### 4. اختبار الحفظ
```javascript
localStorage.getItem('salaryCalc_v1')  // اقرأ البيانات المحفوظة
```

## معايير الكود

### تسمية المتغيرات
- `camelCase` للمتغيرات والدوال
- UPPER_CASE للثوابت
- واضح ووصفي

### تنسيق الكود
```javascript
// استخدم المسافات والأقواس الصحيحة
const result = value * 2;

// علق على الأجزاء المعقدة
// حساب العملة بناءً على اللغة
const cur = getCurrency();
```

### الأداء
- تجنب العمليات الثقيلة في الحلقات
- استخدم `localStorage` للبيانات المحلية
- تجنب التحديثات غير الضرورية للـ DOM

## نصائح التطوير

### 1. استخدام Developer Tools
```javascript
// في Console:
console.log('Debug:', value)

// تابع العمليات:
calc()
```

### 2. اختبار متعدد اللغات
- غير اللغة واختبر جميع الميزات
- تأكد من عدم كسر الترجمة

### 3. اختبر الأجهزة المختلفة
- استخدم Responsive Design Mode (F12)
- اختبر على هاتف فعلي إن أمكن

### 4. الأداء
- راقب حجم الملفات
- استخدم Lighthouse في DevTools

## الأخطاء الشائعة وحلولها

### 1. القيمة تظهر NaN
```javascript
// خطأ:
const val = parseFloat(input.value)  // قد تكون غير محددة

// الصحيح:
const val = parseFloat(input.value) || 0
```

### 2. الترجمة لا تظهر
```javascript
// تأكد من:
1. المفتاح موجود في i18n
2. استدعاء updatePageLanguage() بعد التغيير
3. استخدام t() بدلاً من i18n مباشرة
```

### 3. localStorage لا يعمل
```javascript
// السبب الشائع: الموقع local file (file://)
// الحل: استخدم خادم ويب محلي

// python
python -m http.server 8000

// أو node
npx serve
```

## الأوامر المفيدة

### شغل خادم محلي بـ Python
```bash
python -m http.server 8000
# افتح: http://localhost:8000
```

### شغل خادم محلي بـ Node
```bash
npm install -g serve
serve
```

### فحص الأخطاء بـ Console
```javascript
// في المتصفح (F12)
// شاهد الأخطاء والتحذيرات
```

## مساهمة الكود

1. اقرأ CONTRIBUTING.md
2. اتبع معايير الكود
3. اختبر الميزة جيداً
4. اكتب رسالة commit واضحة
5. أضف إلى Changelog

## الموارد والمراجع

### المراجع الرسمية
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Specification](https://tc39.es/)
- [CSS Specifications](https://www.w3.org/Style/CSS/)

### أدوات التطوير
- [VSCode](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## الاتصال والدعم

للأسئلة أو المشاكل:
- قم بفتح issue على GitHub
- تحقق من Changelog للإصدارات السابقة
- اقرأ ARCHITECTURE.md للفهم الأعمق

## الخطوات التالية

1. اقرأ ARCHITECTURE.md لفهم البنية
2. اقرأ DATA-MODEL.md لفهم البيانات
3. اقرأ FORMULAS.md للحسابات
4. ابدأ بتعديلات صغيرة
5. اختبر جيداً قبل الدمج
