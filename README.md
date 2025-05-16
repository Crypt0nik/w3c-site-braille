# Le Jardin d'Arthur – Site vitrine accessible

Ce projet est un site vitrine respectant les règles du W3C et les bonnes pratiques d’accessibilité numérique (RGAA). Il présente **"Le Jardin d'Arthur"**, un livre pour enfants disponible en braille, audio et version standard, conçu pour être inclusif et accessible à tous.

## Fonctionnalités principales

- **Accessibilité renforcée**  
  - Navigation clavier optimisée (lien "Aller au contenu principal", focus visible, etc.)
  - Structure sémantique (titres, sections, listes, balises ARIA)
  - Contrastes adaptés et mode contraste élevé via CSS (bouton dédié, persistant sur toutes les pages)
  - Personnalisation de la taille du texte (boutons dédiés, persistant sur toutes les pages)
  - Formulaire accessible (labels, champs requis, navigation aisée, validation accessible par regex avec messages d’erreur, confirmation d'envoi accessible via popup ARIA)
  - Vidéo avec description, sous-titres et interprète LSF
  - Version FALC (Facile à Lire et à Comprendre) accessible depuis la bannière d'accueil

- **Présentation du livre**  
  - Description détaillée et illustration de la couverture
  - Explication des apports éducatifs et du public cible

- **Vidéo de démonstration**  
  - Présentation du livre en situation réelle avec accessibilité renforcée (sous-titres, audio description, LSF)

- **Formulaire de contact et précommande**  
  - Choix du format (braille, audio, standard, pack complet)
  - Inscription à la newsletter
  - Validation accessible par regex (nom, email, téléphone, message) avec messages d’erreur accessibles
  - Popup de confirmation accessible avant envoi du formulaire

- **Personnalisation d’affichage**
  - Boutons pour adapter la taille du texte et activer le contraste élevé
  - Les préférences sont mémorisées et appliquées sur toutes les pages du site

- **Version FALC**
  - Section dédiée avec un texte simplifié, accessible depuis la bannière principale

- **Informations pratiques**  
  - Disponibilité, prix, contact, engagement accessibilité

- **Footer**  
  - Navigation secondaire, réseaux sociaux, conformité RGAA

## Structure du projet

```
w3c-site-braille/
├── index.html         # Page principale du site
├── contact.html       # Formulaire de contact accessible avec validation regex et popup de confirmation
├── a-propos.html      # Présentation du projet et de l'auteur
├── definitions.html   # Définitions autour de l'accessibilité et du braille
├── produit.html       # Présentation détaillée du livre
├── style.css          # Feuilles de style personnalisées (accessibilité, contraste, etc.)
├── script.js          # Script JS pour l’accessibilité (focus, aria-live, personnalisation, persistance)
├── images/            # Images du site (ex : couverture du livre)
├── videos/            # Vidéos de démonstration accessibles
└── README.md          # Ce fichier
```

## Technologies utilisées

- **HTML5** sémantique
- **CSS3** (avec TailwindCSS CDN pour la mise en page)
- **JavaScript** vanilla pour l’accessibilité, la personnalisation et la validation du formulaire
- **Font Awesome** pour les icônes
- **Responsive design** (mobile, tablette, desktop)

## Accessibilité

Le site vise la conformité RGAA :
- Navigation clavier complète (lien d’accès rapide, focus visible)
- Contrastes respectés et mode contraste élevé via CSS (bouton dédié, persistant)
- Personnalisation de la taille du texte (boutons dédiés, persistance sur toutes les pages)
- Structure sémantique et utilisation de rôles/attributs ARIA
- Vidéo accessible (sous-titres, audio description, LSF)
- Formulaire utilisable par tous (labels, champs requis, navigation aisée, validation accessible par regex avec messages d’erreur, confirmation d'envoi accessible)
- Version FALC (Facile à Lire et à Comprendre) disponible

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