# Prompt Claude Code — Refonte site Me ANGLESIO, Notaire à Saint-Dié-des-Vosges

## Contexte

Recrée un site web complet et moderne pour **Me David ANGLESIO**, notaire à Saint-Dié-des-Vosges (88100).
Le site actuel (`anglesio-saintdie.notaires.fr`) est un template générique vieillissant de la plateforme notaires.fr.
L'objectif est de produire un site **statique HTML/CSS/JS** (multi-pages) qui soit élégant, professionnel et contemporain, s'inspirant de sites notariaux premium comme `acto.notaires.fr`.

---

## Stack technique

- **HTML5 / CSS3 / JavaScript vanilla** — pas de framework, pas de build tool
- Un fichier HTML par page, un fichier `style.css` global, un fichier `main.js` global
- Fonts via Google Fonts (choisir une paire élégante — ex. Playfair Display + DM Sans, ou Cormorant Garamond + Outfit)
- Pas de dépendances externes sauf Google Fonts et éventuellement une lib d'icônes (Lucide icons CDN)
- Compatible mobile (responsive)

---

## Direction artistique

### Palette de couleurs
```
--color-primary:     #1B2B3A   /* Bleu nuit profond */
--color-accent:      #C9A96E   /* Or chaud */
--color-bg:          #FAFAF8   /* Blanc cassé chaud */
--color-bg-alt:      #F0EDE8   /* Sable très clair */
--color-text:        #1B2B3A
--color-text-muted:  #6B7280
--color-border:      #E5E0D8
```

### Typographie
- **Display / titres** : Cormorant Garamond (serif élégant, connotation juridique/prestige)
- **Corps / UI** : Outfit (propre, lisible, moderne)

### Esprit général
- Sobre, luxueux, digne de confiance
- Beaucoup d'espace blanc
- Lignes fines, contrastes subtils
- Animations légères au scroll (fade-in, slide-up)
- Pas de jaune criard, pas de bleu électrique — tout doit inspirer le sérieux et l'élégance

---

## Structure du site — Pages à créer

### 1. `index.html` — Accueil

**Sections dans l'ordre :**

1. **Header/Nav** (commun à toutes les pages)
   - Logo : "Me ANGLESIO" en Cormorant Garamond avec une fine ligne décorative + "Notaire à Saint-Dié-des-Vosges" en petit
   - Menu horizontal : L'office | Services | L'équipe | Informations & conseils | Contact
   - Bouton CTA "Prendre rendez-vous" (accent doré)
   - Menu burger sur mobile

2. **Hero section**
   - Grande image plein écran (placeholder : `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600` — bureau de notaire)
   - Overlay sombre semi-transparent
   - Accroche : "Votre patrimoine mérite une expertise de confiance"
   - Sous-titre : "Office notarial à Saint-Dié-des-Vosges — droit immobilier, familial et des entreprises"
   - Deux boutons : "Découvrir l'office" (primaire) + "Nous contacter" (secondaire outline)

3. **Section "Notre office en quelques mots"**
   - Texte de présentation (placeholder) à gauche
   - 3 chiffres clés à droite : "1 notaire", "Depuis 2014", "88100 Saint-Dié"
   - Fond blanc cassé

4. **Section "Nos domaines d'expertise"**
   - Titre centré
   - 4 cards en grille : Droit immobilier | Droit de la famille | Droit des entreprises | Successions & donations
   - Chaque card : icône Lucide + titre + courte description (placeholder) + lien "En savoir plus"
   - Fond sable clair, cards blanches avec légère ombre

5. **Section "Actualités"**
   - Titre centré
   - 2 cards d'actualités avec : date en accent doré, titre, extrait (placeholder)
   - Bouton "Toutes les actualités"

6. **Section "Prendre rendez-vous"**
   - Fond bleu nuit
   - Texte centré : "Votre premier rendez-vous est l'occasion de faire le point sur votre situation"
   - CTA centré : "Nous contacter"

7. **Footer** (commun à toutes les pages)
   - Logo + tagline
   - 3 colonnes : L'office (liens) | Nos services (liens) | Contact (adresse, téléphone, email)
   - Ligne de bas : mentions légales | politique de confidentialité | copyright
   - Fond bleu nuit, texte blanc/gris clair

---

### 2. `office.html` — L'office

**Sections :**

1. Header/Nav
2. **Page hero** (plus petite que l'accueil, ~40vh) — photo de l'office + titre "Notre office" en overlay
3. **Présentation de l'étude**
   - Texte long placeholder sur l'histoire et les valeurs de l'office
   - Domaines traités : droit immobilier, commercial, sociétés, famille, successions
4. **Informations pratiques**
   - Cards : Adresse (29 rue des Trois Villes, 88100 Saint-Dié-des-Vosges) | Téléphone (03 29 56 12 35) | Email (accueil.88049@notaires.fr) | Horaires (placeholder)
5. **Carte Google Maps** (iframe embed placeholder — mettre un `<div class="map-placeholder">` avec le texte "Carte interactive — à intégrer")
6. Footer

---

### 3. `equipe.html` — L'équipe

**Sections :**

1. Header/Nav
2. **Page hero** (~40vh) — titre "Notre équipe"
3. **Présentation du notaire**
   - Grande card horizontale : photo placeholder (`https://via.placeholder.com/300x400?text=Photo+Me+ANGLESIO`) | Nom : Me David ANGLESIO | Titre : Notaire associé | Bio placeholder | Langues parlées : Français, Anglais, Allemand, Portugais
4. **L'équipe de l'étude**
   - Grille de 3 cards (placeholders) pour les collaborateurs/clercs
   - Chaque card : photo ronde placeholder + Prénom Nom + Rôle
5. **Nos valeurs**
   - 3 colonnes : Expertise | Disponibilité | Confidentialité — avec icône + description courte
6. Footer

---

### 4. `services.html` — Services

**Sections :**

1. Header/Nav
2. **Page hero** — titre "Nos services"
3. **4 blocs de services détaillés** (alterner image gauche/droite) :
   - **Droit immobilier** : ventes, prêts, copropriété, servitudes — image placeholder Unsplash immobilier
   - **Droit de la famille** : successions, donations, mariage, adoption — image placeholder
   - **Droit des entreprises** : statuts, cessions de parts, fonds de commerce — image placeholder
   - **Droit des successions & donations** : donations-partage, partages — image placeholder
4. **Section CTA** — "Un projet ? Parlons-en." + bouton Contact
5. Footer

---

### 5. `actualites.html` — Informations & conseils

**Sections :**

1. Header/Nav
2. **Page hero** — titre "Informations & conseils"
3. **Grille d'articles** (6 cards placeholder) :
   - Date | Catégorie (badge coloré) | Titre | Extrait | Lien "Lire la suite"
   - Contenu placeholder : reprendre les vrais titres visibles sur le site actuel (note de conjoncture immobilière, adoption, etc.) + 4 autres inventés sur des sujets notariaux courants
4. Footer

---

### 6. `contact.html` — Contact

**Sections :**

1. Header/Nav
2. **Page hero** — titre "Nous contacter"
3. **Layout 2 colonnes** :
   - Gauche : Formulaire de contact (Nom, Prénom, Email, Téléphone, Objet, Message, bouton Envoyer)
   - Droite : Récapitulatif coordonnées + horaires placeholder + bouton "Paiement en ligne" (placeholder)
4. **Mention RGPD** sous le formulaire (texte standard en petit)
5. Footer

---

## Comportements JavaScript à implémenter

- **Menu burger mobile** : toggle du menu sur petit écran
- **Smooth scroll** sur les ancres
- **Animations au scroll** : fade-in + slide-up sur les sections au fur et à mesure du scroll (IntersectionObserver)
- **Active state** dans le nav : highlight de la page courante
- **Formulaire de contact** : validation basique côté client (champs requis, format email)

---

## Contraintes de qualité

- Pas de `!important` dans le CSS sauf cas exceptionnel
- CSS organisé avec commentaires de section
- Toutes les images ont un `alt` descriptif
- Contraste AA minimum pour l'accessibilité
- Pas d'animation si `prefers-reduced-motion` est actif
- Code propre, indenté, commenté

---

## Livrables attendus

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
├── js/
│   └── main.js
└── README.md   ← instructions pour personnaliser les placeholders
```

---

## Notes pour la personnalisation ultérieure

Les éléments marqués `[PLACEHOLDER]` dans le code devront être remplacés par :
- Les vraies photos de l'équipe et de l'office
- Le vrai logo (à fournir)
- Les vrais textes de présentation
- Les vraies horaires d'ouverture
- L'iframe Google Maps réelle
- Le lien de paiement en ligne réel
