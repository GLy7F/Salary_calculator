# 🤝 دليل المساهمة — Contributing

شكراً لاهتمامك بتطوير الحاسبة!

## قبل البدء

اقرأ [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) و[docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## المبادئ

| المبدأ | المعنى |
|--------|--------|
| **الاستقلالية** | ملف واحد يعمل بلا خادم أو بناء |
| **الخصوصية** | كل البيانات محلية، لا إرسال |
| **العربية + لاتيني** | الواجهة عربية RTL، الأرقام لاتينية (123) |
| **البساطة** | Vanilla JS، بلا تبعيات |

## العملية

```
1. Fork
2. فرع للميزة: git checkout -b feature/x
3. عدّل src/index.html
4. اختبر (انظر DEVELOPMENT.md)
5. حدّث docs/ و CHANGELOG.md
6. Pull Request
```

## معايير الكود

- دوال العرض: `renderX()` · الحساب: `computeX()`/`calc()` · الأزرار: `setX()`
- ألوان عبر `var(--teal)` لا ثابتة
- بعد تغيير البيانات: استدعِ `calc()` (تحفظ تلقائياً)
- التعليقات بالعربية، أسماء الدوال إنجليزية

## الاختبار الإلزامي

```bash
# فحص البناء
node -e "const fs=require('fs');const h=fs.readFileSync('src/index.html','utf8');const m=h.match(/<script>([\s\S]*?)<\/script>/g);let js='';m.forEach(b=>{if(!b.includes('src='))js+=b.replace(/<\/?script>/g,'')+'\n'});try{new Function(js);console.log('✅')}catch(e){console.log('❌',e.message)}"
```

تأكد من:
- [ ] البناء سليم
- [ ] الحساب صحيح
- [ ] الحفظ/الاسترجاع يعمل
- [ ] الأرقام لاتينية
- [ ] التجاوب سليم

## مرحّب به

- ميزات حسابية جديدة (ضرائب، بدلات خاصة)
- رسم بياني لمنحنى النمو
- تصدير PDF/طباعة
- زر إعادة تعيين
- الترجمة للغات أخرى
- تحسين الوصول (accessibility)

## تجنّب

- ❌ backend أو إرسال بيانات خارجية
- ❌ تبعيات بناء ثقيلة
- ❌ أرقام عربية (٠١٢) في العرض
- ❌ ألوان ثابتة بدل المتغيرات
