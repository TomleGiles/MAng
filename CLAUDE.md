# CLAUDE.md — Site Me ANGLESIO, Notaire

> Référence complète : [prompt-claude-code-anglesio.md](prompt-claude-code-anglesio.md)

## Projet

Refonte complète du site de **Me David ANGLESIO**, notaire à Saint-Dié-des-Vosges (88100).
Site statique multi-pages HTML/CSS/JS vanilla — pas de framework, pas de build tool.

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- Google Fonts : **Cormorant Garamond** (titres) + **Outfit** (corps)
- Icônes : Lucide Icons CDN
- Responsive mobile-first

## Palette

```css
--color-primary:    #1B2B3A   /* Bleu nuit */
--color-accent:     #C9A96E   /* Or chaud */
--color-bg:         #FAFAF8   /* Blanc cassé */
--color-bg-alt:     #F0EDE8   /* Sable */
--color-text:       #1B2B3A
--color-text-muted: #6B7280
--color-border:     #E5E0D8
```

## Coordonnées réelles

- Adresse : 29 rue des Trois Villes, 88100 Saint-Dié-des-Vosges
- Téléphone : 03 29 56 12 35
- Email : accueil.88049@notaires.fr
- Langues : Français, Anglais, Allemand, Portugais

## Structure des fichiers cible

```
anglesio-notaire/
├── index.html
├── office.html
├── equipe.html
├── services.html
├── actualites.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Pages à produire

| Fichier | Titre nav | Contenu principal |
|---|---|---|
| `index.html` | Accueil | Hero + présentation + services cards + actualités + CTA |
| `office.html` | L'office | Présentation étude + infos pratiques + map placeholder |
| `equipe.html` | L'équipe | Me ANGLESIO bio + collaborateurs + valeurs |
| `services.html` | Services | 4 blocs alternés image/texte par domaine |
| `actualites.html` | Informations & conseils | Grille 6 articles placeholder |
| `contact.html` | Contact | Formulaire + coordonnées + RGPD |

## Règles CSS

- Pas de `!important` sauf cas exceptionnel
- CSS organisé par sections commentées
- `prefers-reduced-motion` respecté pour les animations

## JS à implémenter

- Menu burger mobile
- Smooth scroll
- Animations scroll via `IntersectionObserver` (fade-in, slide-up)
- Active state nav selon page courante
- Validation formulaire contact (champs requis + format email)

## Accessibilité

- Contraste minimum AA
- `alt` descriptif sur toutes les images

## Conventions de code

- Pas de commentaires évidents — seulement les WHY non-évidents
- Code indenté proprement
- Les placeholders sont marqués `[PLACEHOLDER]` pour faciliter la personnalisation ultérieure
