<div dir="rtl">

# 🗂️ هيكلة المشروع — Project Structure

هيكل مُحسّن للنشر المباشر على **GitHub Pages** — ملف `index.html` في الجذر.

```
.
├── index.html             ⭐ الحاسبة — تُعرض مباشرة عند زيارة الموقع
├── README.md                 نظرة عامة + تعليمات النشر
├── LICENSE                   رخصة MIT
├── CHANGELOG.md              سجل الإصدارات
├── CONTRIBUTING.md           دليل المساهمة
├── STRUCTURE.md              هذا الملف
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── deploy.yml        نشر تلقائي على GitHub Pages عند كل push
│
└── docs/                     📚 التوثيق التقني
    ├── ARCHITECTURE.md       المعمارية، الطبقات، تدفّق البيانات
    ├── FORMULAS.md           المعادلات الحسابية بالأمثلة
    ├── DATA-MODEL.md         البيانات والحفظ المحلي
    └── DEVELOPMENT.md        التطوير والاختبار
```

---

## لماذا index.html في الجذر؟

GitHub Pages يبحث عن `index.html` في جذر المستودع (أو في `/docs`) ليعرضه كصفحة رئيسية. وضعه في الجذر يعني:

- ✅ يُعرض الموقع مباشرة على `https://<user>.github.io/<repo>/`
- ✅ لا حاجة لإعداد مسار فرعي
- ✅ روابط نسبية بسيطة

---

## خريطة القراءة حسب الدور

### 👤 مستخدم نهائي
زر الموقع المنشور مباشرة، أو افتح `index.html` محلياً.

### 👨‍💻 مطوّر
1. `README.md` → التشغيل والنشر
2. `docs/ARCHITECTURE.md` → البنية
3. `docs/FORMULAS.md` → المعادلات
4. `docs/DATA-MODEL.md` → البيانات والحفظ
5. `docs/DEVELOPMENT.md` → التطوير
6. `CONTRIBUTING.md` → المعايير

### 🚀 ناشر (DevOps)
- `README.md` → قسم «النشر على GitHub Pages»
- `.github/workflows/deploy.yml` → النشر التلقائي

---

## أين تجد ماذا في index.html

| القسم | الموقع |
|------|--------|
| الأنماط (CSS) | `<style>` في `<head>` |
| متغيرات الألوان | بداية CSS (`:root`) |
| بطاقات الملخص | بعد `<header>` |
| الأقسام 01-05 | `<section>` متتالية |
| محرر البدلات | قسم 04 + `renderAllowEditor()` |
| شريط العلاوة + الجدول | قسم 05 |
| `computeFor()` (المحرك) | منتصف `<script>` |
| `calc()` | منتصف `<script>` |
| `renderProjection()` | بعد `calc()` |
| الحفظ المحلي | `saveState` / `loadState` |
| التهيئة | نهاية `<script>` |

---

## إحصائيات

- **ملف واحد للعرض**: `index.html` (~25 KB)
- **صفر تبعيات**
- **نشر تلقائي** عبر GitHub Actions
- **4 وثائق تقنية**

</div>
