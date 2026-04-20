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
│   ├── hero/
│   │   └── hero-main.jpg   ← Grande photo hero (800×520px min)
│   ├── services/
│   │   ├── service-vente.jpg
│   │   ├── service-recharge.jpg
│   │   ├── service-maintenance.jpg
│   │   └── service-securite.jpg
│   ├── products/
│   │   ├── product-poudre-abc.jpg
│   │   ├── product-co2.jpg
│   │   ├── product-eau.jpg
│   │   ├── product-mousse.jpg
│   │   ├── product-ria.jpg
│   │   └── product-detecteur.jpg
│   └── about/
│       ├── about-main.jpg
│       └── about-inset.jpg
└── README.md
```

---

## 📷 Instructions photos

### Comment remplacer un placeholder image

Chaque placeholder dans `index.html` ressemble à ceci :
```html
<div class="img-placeholder">
  <div class="ph-icon">🧯</div>
  <div class="ph-label">images/hero/hero-main.jpg — ...</div>
</div>
```

**Remplace ce bloc complet par :**
```html
<img src="images/hero/hero-main.jpg" alt="Description de l'image" />
```

---

### 📐 Tailles recommandées

| Zone             | Fichier                       | Taille min    | Format      |
|------------------|-------------------------------|---------------|-------------|
| Hero principal   | images/hero/hero-main.jpg     | 800 × 520 px  | JPG / WebP  |
| Service vente    | images/services/service-vente.jpg | 400 × 180 px | JPG / WebP |
| Service recharge | images/services/service-recharge.jpg | 400 × 180 px | JPG |
| Service maintenance | images/services/service-maintenance.jpg | 400 × 180 px | JPG |
| Service sécurité | images/services/service-securite.jpg | 400 × 180 px | JPG |
| Produit poudre   | images/products/product-poudre-abc.jpg | 400 × 220 px | JPG |
| Produit CO2      | images/products/product-co2.jpg | 400 × 220 px | JPG |
| Produit eau      | images/products/product-eau.jpg | 400 × 220 px | JPG |
| Produit mousse   | images/products/product-mousse.jpg | 400 × 220 px | JPG |
| Produit RIA      | images/products/product-ria.jpg | 400 × 220 px | JPG |
| Produit détecteur | images/products/product-detecteur.jpg | 400 × 220 px | JPG |
| À propos - grande | images/about/about-main.jpg | 560 × 480 px | JPG |
| À propos - petite | images/about/about-inset.jpg | 200 × 160 px | JPG |

---

## ✏️ Personnalisation texte (index.html)

Rechercher et remplacer dans `index.html` :

| Texte à remplacer         | Description                        |
|---------------------------|------------------------------------|
| `+237 000 000 000`        | Vrai numéro de téléphone           |
| `contact@afrikfeu.cm`     | Vrai email                         |
| `https://wa.me/237000000000` | Lien WhatsApp avec vrai numéro  |
| `500+`, `10+`, `2`        | Vraies statistiques de l'entreprise |

---

## 📞 Bouton WhatsApp

Le lien WhatsApp est dans `index.html` :
```html
<a href="https://wa.me/237XXXXXXXXX" ...>
```
Remplace `237XXXXXXXXX` par le vrai numéro (sans `+` ni espaces).  
Exemple pour `+237 655 123 456` → `https://wa.me/237655123456`

---

## 🚀 Mise en ligne

1. Ouvre le dossier avec VS Code ou ton éditeur
2. Remplace les placeholders images et les textes
3. Dépose le tout sur **GitHub Pages**, **Netlify** ou **un hébergeur web**
4. C'est en ligne ! ✅

---

## 🔜 Prochaine étape : Version Django

Quand le client valide ce démo, une version Django production-ready peut être préparée avec :
- Backend Django + DRF
- Base de données PostgreSQL
- Formulaire de contact fonctionnel (email réel)
- Panel admin pour gérer produits et services
- Intégration Mobile Money (MTN / Orange)
