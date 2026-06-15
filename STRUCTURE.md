# 🗂️ هيكلة المشروع — Project Structure

```
salary-calculator/
│
├── README.md              ⭐ ابدأ هنا — نظرة عامة وتشغيل
├── LICENSE                   رخصة MIT
├── CHANGELOG.md              سجل الإصدارات
├── CONTRIBUTING.md           دليل المساهمة
├── STRUCTURE.md              هذا الملف
├── .gitignore
│
├── src/                   📦 الكود المصدري
│   └── index.html            ⭐ الحاسبة الكاملة (HTML+CSS+JS)
│
└── docs/                  📚 التوثيق التقني
    ├── ARCHITECTURE.md       المعمارية، الطبقات، تدفّق البيانات
    ├── FORMULAS.md           المعادلات الحسابية بالأمثلة
    ├── DATA-MODEL.md         البيانات والحفظ المحلي
    └── DEVELOPMENT.md        التطوير والاختبار
```

---

## خريطة القراءة حسب الدور

### 👤 مستخدم نهائي
1. `README.md` → التشغيل
2. افتح `src/index.html`

### 👨‍💻 مطوّر جديد
1. `README.md`
2. `docs/ARCHITECTURE.md` → البنية
3. `docs/FORMULAS.md` → المعادلات
4. `docs/DATA-MODEL.md` → البيانات والحفظ
5. `docs/DEVELOPMENT.md` → التطوير
6. `CONTRIBUTING.md`

---

## أين تجد ماذا في src/index.html

| القسم | الموقع |
|------|--------|
| الأنماط (CSS) | `<style>` في `<head>` |
| متغيرات الألوان | بداية CSS (`:root`) |
| بطاقات الملخص | بعد `<header>` |
| الأقسام 01-05 | `<section>` متتالية |
| محرر البدلات | قسم 04 + `renderAllowEditor()` |
| شريط العلاوة + الجدول | قسم 05 |
| الثوابت + `ALLOWANCES` | بداية `<script>` |
| `computeFor()` (المحرك) | منتصف `<script>` |
| `calc()` | منتصف `<script>` |
| `renderProjection()` | بعد `calc()` |
| الأزرار المقسّمة | `setRaiseType` / `setYears` |
| الحفظ المحلي | `saveState` / `loadState` |
| التهيئة | نهاية `<script>` |

---

## إحصائيات

- **ملف واحد**: `index.html` (~25 KB)
- **صفر تبعيات**
- **~12 دالة JavaScript**
- **5 أقسام واجهة**
- **4 وثائق تقنية**
