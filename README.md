# AFRIK FEU ET SERVICES — Site Vitrine
## Guide de personnalisation

---

## 📁 Structure du projet

```
afrik-feu-services/
├── index.html              ← Page principale
├── css/
│   ├── base.css            ← Variables, reset, utilitaires
│   ├── components.css      ← Navbar, cards, form, footer, WhatsApp
│   ├── sections.css        ← Styles de chaque section
│   └── responsive.css      ← Mobile / tablette / desktop
├── js/
│   └── main.js             ← Navbar, menu mobile, animations, formulaire
├── images/
   ├── hero/
   │   └── hero-main.jpg   ← Grande photo hero (800×520px min)
   ├── services/
   │   ├── service-vente.jpg
   │   ├── service-recharge.jpg
   │   ├── service-maintenance.jpg
   │   └── service-securite.jpg
   ├── products/
   │   ├── product-poudre-abc.jpg
   │   ├── product-co2.jpg
   │   ├── product-eau.jpg
   │   ├── product-mousse.jpg
   │   ├── product-ria.jpg
   │   └── product-detecteur.jpg
   └── about/
       ├── about-main.jpg
       └── about-inset.jpg
 
## 🔜 Prochaine étape : Version Django

Quand le client valide ce démo, une version Django production-ready peut être préparée avec :
- Backend Django + DRF
- Base de données PostgreSQL
- Formulaire de contact fonctionnel (email réel)
- Panel admin pour gérer produits et services
- Intégration Mobile Money (MTN / Orange)
