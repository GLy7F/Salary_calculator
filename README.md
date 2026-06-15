<div dir="rtl">

# 💵 حاسبة الراتب — Salary Calculator

> حاسبة راتب تفاعلية تعمل بالكامل في المتصفح (بلا خادم)، تحسب الصافي والبدلات والتأمينات ومعدّلات الأجر، مع بدلات ديناميكية وتوقّع الزيادات السنوية وحفظ محلي.

![License](https://img.shields.io/badge/License-MIT-green.svg)
![No Backend](https://img.shields.io/badge/backend-none-blue.svg)
![Vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow.svg)
![RTL](https://img.shields.io/badge/RTL-Arabic-orange.svg)

---

## 🔗 العرض المباشر



```
https://gly7f.github.io/Salary_calculator/
```



---

## 📖 نظرة عامة

أداة من **ملف HTML واحد مستقل** لا تحتاج خادماً أو تثبيتاً. تحسب الراتب الصافي بناءً على الأساسي والبدلات والتأمينات، وتعرض معدّلات الأجر (اليوم، الساعة، الإضافي، العيد)، وتوقّع تطوّر الراتب عبر السنوات مع العلاوة السنوية. كل المدخلات تُحفظ محلياً في المتصفح.

### الميزات

| الميزة | الوصف |
|-------|-------|
| 🧮 **حساب الصافي** | الأساسي + البدلات − التأمينات، بمعادلة GOSI الصحيحة |
| ➕ **بدلات ديناميكية** | إضافة/حذف/تعديل أي بدل (نسبة % أو مبلغ ثابت) |
| 🏠 **كشف بدل السكن تلقائياً** | يُدرج بدل السكن في وعاء التأمينات تلقائياً |
| ⏱️ **ساعات وأيام العمل** | تخصيص ساعات اليوم وأيام الأسبوع |
| 🔧 **معدّلات قابلة للتعديل** | معاملات أجر الإضافي والعيد |
| 📈 **العلاوة السنوية** | مبلغ ثابت أو نسبة، مع توقّع 5/7/10 سنوات |
| 🗓️ **سجل الزيادات** | جدول تطوّر الراتب سنة بسنة |
| 💾 **حفظ محلي** | كل المدخلات تبقى بعد تحديث الصفحة |

---

## 🚀 التشغيل المحلي

```bash
# فتح مباشر
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows

# أو عبر خادم محلي (مُوصى به ليعمل الحفظ المحلي بشكل أمثل)
python3 -m http.server 8000
# افتح http://localhost:8000
```

---

## 🌐 النشر على GitHub Pages

1. ارفع المشروع إلى مستودع على GitHub:
   ```bash
   git init
   git add .
   git commit -m "حاسبة الراتب"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```

2. في صفحة المستودع على GitHub:
   - اذهب إلى **Settings** ← **Pages**
   - تحت **Source** اختر الفرع **main** والمجلد **/ (root)**
   - اضغط **Save**

3. بعد دقيقة، سيكون موقعك متاحاً على:
   ```
   https://<USERNAME>.github.io/<REPO-NAME>/
   ```

> لأن `index.html` في جذر المستودع، سيُعرض مباشرة دون أي إعداد إضافي.

---

## 📂 هيكل المشروع

```
.
├── index.html             ⭐ الحاسبة (تُعرض مباشرة على GitHub Pages)
├── README.md                 هذا الملف
├── LICENSE                   رخصة MIT
├── CHANGELOG.md              سجل الإصدارات
├── CONTRIBUTING.md           دليل المساهمة
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml        نشر تلقائي على GitHub Pages
└── docs/                     📚 التوثيق التقني
    ├── ARCHITECTURE.md       المعمارية وتدفّق البيانات
    ├── FORMULAS.md           المعادلات الحسابية
    ├── DATA-MODEL.md         نموذج البيانات والحفظ
    └── DEVELOPMENT.md        دليل التطوير والاختبار
```

---

## 🛠️ التقنيات

**HTML5 · CSS3 · Vanilla JavaScript** — بلا أطر عمل، بلا تبعيات، بلا أدوات بناء. ملف واحد يعمل في أي مكان.

---

## 👨‍💻 للمطوّرين

اقرأ بالترتيب: [ARCHITECTURE](docs/ARCHITECTURE.md) ← [FORMULAS](docs/FORMULAS.md) ← [DATA-MODEL](docs/DATA-MODEL.md) ← [DEVELOPMENT](docs/DEVELOPMENT.md) ← [CONTRIBUTING](CONTRIBUTING.md).

### فحص سريع

```bash
node -e "const fs=require('fs');const h=fs.readFileSync('index.html','utf8');const m=h.match(/<script>([\s\S]*?)<\/script>/g);let js='';m.forEach(b=>{if(!b.includes('src='))js+=b.replace(/<\/?script>/g,'')+'\n'});try{new Function(js);console.log('✅ سليم')}catch(e){console.log('❌',e.message)}"
```

---

## 🔒 الخصوصية

كل الحسابات والبيانات تبقى في متصفحك عبر `localStorage`. لا خادم، لا إرسال بيانات، لا تتبّع.

---

## 📜 الرخصة

[MIT](LICENSE)

---

## ⚠️ إخلاء مسؤولية

أداة حسابية لأغراض التقدير الشخصي. معادلة التأمينات (GOSI) ومعاملات الأجر قد تختلف حسب نظام جهة العمل والأنظمة المعمول بها — تحقّق من جهة عملك للأرقام الرسمية.

</div>
