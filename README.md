# Le Jardin d'Arthur – Site vitrine accessible

Ce projet est un site vitrine respectant les règles du W3C et les bonnes pratiques d’accessibilité numérique (RGAA). Il présente **"Le Jardin d'Arthur"**, un livre pour enfants disponible en braille, audio et version standard, conçu pour être inclusif et accessible à tous.

## Fonctionnalités principales

- **Accessibilité renforcée**  
  - Navigation clavier optimisée (lien "Aller au contenu principal", focus visible, etc.)
  - Structure sémantique (titres, sections, listes, balises ARIA)
  - Contrastes adaptés et mode contraste élevé via CSS
  - Formulaire accessible (labels, champs requis, navigation aisée, confirmation d'envoi accessible via popup ARIA)
  - Vidéo avec description, sous-titres et interprète LSF

- **Présentation du livre**  
  - Description détaillée et illustration de la couverture
  - Explication des apports éducatifs et du public cible

- **Vidéo de démonstration**  
  - Présentation du livre en situation réelle avec accessibilité renforcée

- **Formulaire de contact et précommande**  
  - Choix du format (braille, audio, standard, pack complet)
  - Inscription à la newsletter
  - Popup de confirmation accessible avant envoi du formulaire

- **Informations pratiques**  
  - Disponibilité, prix, contact, engagement accessibilité

- **Footer**  
  - Navigation secondaire, réseaux sociaux, conformité RGAA

## Structure du projet

```
w3c-site-braille/
├── index.html         # Page principale du site
├── contact.html       # Formulaire de contact accessible avec popup de confirmation
├── a-propos.html      # Présentation du projet et de l'auteur
├── definitions.html   # Définitions autour de l'accessibilité et du braille
├── produit.html       # Présentation détaillée du livre
├── style.css          # Feuilles de style personnalisées (accessibilité, contraste, etc.)
├── script.js          # Script JS pour améliorer l’accessibilité (focus, aria-live, etc.)
├── images/            # Images du site (ex : couverture du livre)
├── videos/            # Vidéos de démonstration accessibles
└── README.md          # Ce fichier
```

## Technologies utilisées

- **HTML5** sémantique
- **CSS3** (avec TailwindCSS CDN pour la mise en page)
- **JavaScript** vanilla pour l’accessibilité
- **Font Awesome** pour les icônes
- **Responsive design** (mobile, tablette, desktop)

## Accessibilité

Le site vise la conformité RGAA :
- Navigation clavier complète (lien d’accès rapide, focus visible)
- Contrastes respectés et mode contraste élevé via CSS
- Structure sémantique et utilisation de rôles/attributs ARIA
- Vidéo accessible (sous-titres, audio description, LSF)
- Formulaire utilisable par tous (labels, champs requis, navigation aisée, confirmation d'envoi accessible)

## Lancer le projet

1. Clone ce dépôt ou télécharge-le.
2. Ouvre `index.html` dans ton navigateur.
3. Les dépendances externes (Tailwind, Font Awesome) sont chargées via CDN.

## Auteur

Arthur Chesse  
arthur.chesse@ynov.com

## Licence

Projet réalisé dans le cadre d’un exercice pédagogique.  
© 2025 – Tous droits réservés.