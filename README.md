# 💵 حاسبة الراتب — Salary Calculator

> حاسبة راتب تفاعلية تعمل بالكامل في المتصفح (بلا خادم)، تحسب الصافي والبدلات والتأمينات ومعدّلات الأجر، مع بدلات ديناميكية وتوقّع الزيادات السنوية وحفظ محلي.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![No Backend](https://img.shields.io/badge/backend-none-blue.svg)]()
[![RTL](https://img.shields.io/badge/RTL-Arabic-orange.svg)]()

---

## 📖 نظرة عامة

أداة من **ملف HTML واحد مستقل** لا تحتاج خادماً أو تثبيتاً. تحسب الراتب الصافي بناءً على الأساسي والبدلات والتأمينات، وتعرض معدّلات الأجر (اليوم، الساعة، الإضافي، العيد)، وتوقّع تطوّر الراتب عبر السنوات مع العلاوة السنوية. كل المدخلات تُحفظ محلياً في المتصفح.

### الميزات

| الميزة | الوصف |
|-------|-------|
| 🧮 **حساب الصافي** | الأساسي + البدلات − التأمينات، بمعادلة GOSI الصحيحة |
| ➕ **بدلات ديناميكية** | إضافة/حذف/تعديل أي بدل (نسبة % أو مبلغ ثابت) |
| 🏠 **كشف بدل السكن تلقائياً** | يُدرج بدل السكن في وعاء التأمينات تلقائياً |
| ⏱️ **ساعات وأيام العمل** | تخصيص ساعات اليوم وأيام الأسبوع → أجر الساعة وأيام/ساعات الشهر |
| 🔧 **معدّلات قابلة للتعديل** | معاملات أجر الإضافي والعيد |
| 📈 **العلاوة السنوية** | مبلغ ثابت أو نسبة، مع توقّع 5/7/10 سنوات |
| 🗓️ **سجل الزيادات** | جدول تطوّر الراتب سنة بسنة مع إعادة احتساب كاملة |
| 💾 **حفظ محلي** | كل المدخلات تبقى بعد تحديث الصفحة |

---

## 🚀 التشغيل

```bash
# فتح مباشر
open src/index.html        # macOS
xdg-open src/index.html    # Linux
start src/index.html       # Windows

# أو عبر خادم محلي (مُوصى به للحفظ المحلي)
python3 -m http.server 8000 --directory src
# افتح http://localhost:8000
```

لا حاجة لأي تثبيت أو بناء.

---

## 📂 هيكل المشروع

```
salary-calculator/
├── README.md              ⭐ ابدأ من هنا
├── LICENSE                   رخصة MIT
├── CHANGELOG.md              سجل الإصدارات
├── CONTRIBUTING.md           دليل المساهمة
├── STRUCTURE.md              هيكلة المشروع
├── .gitignore
├── src/
│   └── index.html            ⭐ الحاسبة الكاملة (single-file app)
└── docs/
    ├── ARCHITECTURE.md       المعمارية وتدفّق البيانات
    ├── FORMULAS.md           المعادلات الحسابية بالتفصيل
    ├── DATA-MODEL.md         نموذج البيانات والحفظ المحلي
    └── DEVELOPMENT.md        دليل التطوير والاختبار
```

---

## 🛠️ التقنيات

- **HTML5 / CSS3 / Vanilla JavaScript** — بلا أطر عمل، بلا تبعيات
- **localStorage** — الحفظ المحلي للمدخلات

> صُمّمت كملف واحد للاستقلالية الكاملة: تعمل من أي مكان دون أدوات بناء.

---

## 👨‍💻 للمطوّرين

اقرأ بالترتيب:
1. [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — البنية العامة
2. [docs/FORMULAS.md](docs/FORMULAS.md) — المعادلات الحسابية
3. [docs/DATA-MODEL.md](docs/DATA-MODEL.md) — البيانات والحفظ
4. [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) — التطوير والاختبار
5. [CONTRIBUTING.md](CONTRIBUTING.md) — المعايير

### فحص سريع

```bash
node -e "const fs=require('fs');const h=fs.readFileSync('src/index.html','utf8');const m=h.match(/<script>([\s\S]*?)<\/script>/g);let js='';m.forEach(b=>{if(!b.includes('src='))js+=b.replace(/<\/?script>/g,'')+'\n'});try{new Function(js);console.log('✅ سليم')}catch(e){console.log('❌',e.message)}"
```

---

## 🔒 الخصوصية

كل الحسابات والبيانات تبقى في متصفحك عبر `localStorage`. لا خادم، لا إرسال بيانات، لا تتبّع.

---

## 📜 الرخصة

MIT — انظر [LICENSE](LICENSE).

---

## ⚠️ إخلاء مسؤولية

أداة حسابية لأغراض التقدير الشخصي. معادلة التأمينات (GOSI) ومعاملات الأجر قد تختلف حسب نظام جهة العمل والأنظمة المعمول بها — تحقّق من جهة عملك للأرقام الرسمية.
