# 🌐 DIMENSION - Site Web 3D Interactif

> Expérience web immersive combinant design néo-brutaliste futuriste et rendu 3D temps réel

## ✨ Aperçu

DIMENSION est un site web portfolio créatif qui repousse les limites du design web moderne. Il intègre des éléments 3D interactifs, des animations fluides, et une esthétique visuelle distinctive inspirée du néo-brutalisme et du cinéma futuriste.

## 🎨 Design & Esthétique

### Concept Visuel
- **Esthétique :** Cinéma Futuriste Néo-Brutaliste
- **Palette :** Noir profond, Blanc pur, Cyan néon, Magenta
- **Typographie :** Orbitron (Display) + JetBrains Mono (Corps)

### Caractéristiques Distinctives
- ✅ Évite les clichés d'IA (pas de violet sur blanc, pas d'Inter/Roboto)
- ✅ Curseur personnalisé avec effet de suivi
- ✅ Effets glitch subtils sur le logo
- ✅ Ombres hard style néo-brutaliste
- ✅ Grilles asymétriques et compositions audacieuses

## 🚀 Fonctionnalités

### Section Hero
- Vidéo full-screen en arrière-plan avec overlay gradient
- Animation d'apparition échelonnée du titre
- CTA avec ombres portées néo-brutalistes
- Indicateur de scroll animé

### Scène 3D Interactive (Three.js)
- **5 objets 3D** avec matériaux variés :
  - Torus avec vidéo texture
  - Sphère holographique transparente
  - Cube wireframe magenta
  - Icosaèdre métallique pourpre
  - Plan au sol avec vidéo semi-transparente
- **1000 particules** cyan flottantes
- **Rotation interactive** contrôlée par la souris
- **Éclairage dynamique** avec 5 sources lumineuses
- **Affichage temps réel** des coordonnées et rotation

### Animations & Interactions
- **GSAP ScrollTrigger** pour animations au scroll
- **Parallaxe** sur images et éléments
- **Compteurs animés** dans les statistiques
- **Smooth scroll** entre sections
- **Hover effects** personnalisés
- **Transitions fluides** partout

### Design Responsive
- Adapté desktop, tablette, mobile
- Curseur personnalisé désactivé sur mobile
- Menu hamburger sur petits écrans
- Canvas 3D optimisé par taille d'écran

## 🛠️ Technologies

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Variables, Grid, Flexbox, Animations
- **JavaScript ES6+** - Logique interactive

### Bibliothèques
- **Three.js r128** - Rendu 3D WebGL
- **GSAP 3.12** - Animations avancées
- **ScrollTrigger** - Animations au scroll

### Outils
- **Claude Code** - Développement assisté par IA
- **Frontend-Design Skill** - Design distinctif et créatif

## 📁 Structure du Projet

```
SITE WEB/
├── index.html              # Page principale
├── css/
│   ├── main.css           # Styles principaux
│   └── animations.css     # Keyframes et animations
├── js/
│   ├── main.js            # Interactions GSAP
│   └── scene3d.js         # Scène Three.js
├── Images/
│   ├── *.mp4              # Vidéo héro et texture 3D
│   └── *.png              # Image section About
├── .claude/
│   ├── claude_config.json # Configuration skills
│   └── skills/            # Skills Claude Code
├── .gitignore
├── README.md
└── claude.md              # Documentation projet
```

## 🎯 Installation & Utilisation

### Option 1 : Déploiement sur Vercel (Recommandé)

Le site est configuré pour un déploiement facile sur Vercel :

1. **Connectez-vous à [Vercel](https://vercel.com)**
2. **Importez le dépôt GitHub** : https://github.com/Zeyneb-madi/site-web-3d-dimension
3. **Cliquez sur "Deploy"** - Vercel détectera automatiquement la configuration
4. **Votre site sera en ligne** en quelques secondes avec HTTPS et CDN global

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Zeyneb-madi/site-web-3d-dimension)

### Option 2 : Ouverture Directe
```bash
# Ouvrir directement dans le navigateur
open index.html
```

### Option 3 : Serveur Local
```bash
# Python 3
python3 -m http.server 8000

# Ou avec Node.js
npx http-server -p 8000
```

Puis ouvrir : `http://localhost:8000`

## 🎮 Interactions

- **Déplacer la souris** sur le canvas 3D → Contrôle de la caméra
- **Scroller** → Déclenche animations et parallaxe
- **Survoler** les liens → Curseur personnalisé réagit
- **Cliquer** navigation → Smooth scroll vers sections

## 🎨 Palette de Couleurs

```css
--color-black: #0a0a0a      /* Fond principal */
--color-white: #fafafa      /* Texte principal */
--color-cyan: #00fff5       /* Accent primaire */
--color-magenta: #ff006e    /* Accent secondaire */
--color-purple: #7b2cbf     /* Accent tertiaire */
```

## 📊 Performance

- ✅ Rendu 3D optimisé (60 FPS)
- ✅ Textures vidéo efficaces
- ✅ Animations CSS hardware-accelerated
- ✅ Lazy loading des assets
- ✅ Responsive images
- ✅ Support `prefers-reduced-motion`

## 🌟 Fonctionnalités Avancées

### Effets Visuels
- Glitch effect sur texte
- RGB split animation
- Scanline overlay sur vidéo
- Glow effects sur hover
- Blur backdrop sur navigation

### Accessibilité
- Structure HTML sémantique
- ARIA labels appropriés
- Support clavier navigation
- Reduced motion pour accessibilité
- Contraste couleurs optimisé

## 🔮 Évolutions Futures

- [ ] Shaders GLSL personnalisés
- [ ] Post-processing (bloom, chromatic aberration)
- [ ] Chargement modèles 3D .gltf externes
- [ ] Physique 3D avec Cannon.js
- [ ] Toggle mode sombre/clair
- [ ] Backend pour formulaire contact
- [ ] Optimisation WebP pour images
- [ ] PWA (Progressive Web App)

## 📝 License

Ce projet utilise des skills Claude Code sous licence Apache 2.0.

## 👤 Auteur

**Zeyneb Madi**

Créé avec [Claude Code](https://claude.com/claude-code) et la skill `frontend-design`

---

**Dernière mise à jour :** 26 mars 2026

⭐ Si vous aimez ce projet, n'hésitez pas à mettre une étoile sur GitHub !
