# Plan d'amélioration AFRIK FEU ET SERVICES

## Phase 1 : Corrections critiques
- [ ] 1. Corriger le numéro WhatsApp incohérent dans le footer (`23765096444` → `237655096444`)
- [ ] 2. Supprimer le double import Google Fonts dans `base.css` (déjà dans le HTML)
- [ ] 3. Ajouter `width`/`height` sur toutes les images + `fetchpriority="high"` sur l'image hero
- [ ] 4. Changer `loading="lazy"` en `loading="eager"` sur l'image hero

## Phase 2 : Accessibilité (A11y)
- [ ] 5. Ajouter un lien "Skip to content"
- [ ] 6. Envelopper le contenu dans `<main>`
- [ ] 7. Ajouter `aria-expanded`, `aria-controls`, `aria-label` sur le hamburger
- [ ] 8. Ajouter un focus trap dans le drawer mobile
- [ ] 9. Fermer le drawer avec la touche Escape
- [ ] 10. Ajouter `aria-current="page"` sur le lien de navigation actif
- [ ] 11. Ajouter `prefers-reduced-motion` pour les animations

## Phase 3 : Performance & Optimisation
- [ ] 12. Fusionner les 4 fichiers CSS en un seul `css/style.css`
- [ ] 13. Dédupliquer l'animation `@keyframes blink`
- [ ] 14. Ajouter `will-change` et `contain` sur les éléments animés

## Phase 4 : JavaScript & Fonctionnalités
- [ ] 15. Modulariser le JS (éviter variables globales)
- [ ] 16. Ajouter la sauvegarde auto du formulaire dans `localStorage`
- [ ] 17. Ajouter un fallback `mailto:` pour le formulaire
- [ ] 18. Ajouter un debounce sur le scroll de la navbar
- [ ] 19. Gérer les erreurs si éléments DOM manquants

## Phase 5 : Qualité du code
- [ ] 20. Créer des classes utilitaires pour remplacer les styles inline
- [ ] 21. Centraliser les z-index dans des variables CSS
- [ ] 22. Masquer les liens sociaux vides (`href="#"`)
- [ ] 23. Ajouter un print stylesheet basique

