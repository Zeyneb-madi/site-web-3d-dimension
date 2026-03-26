# Configuration Claude Code - SITE WEB 3D

## Skills Installées

Ce projet utilise des skills Claude Code pour améliorer la qualité et l'efficacité du développement.

### 1. frontend-design

**Description :** Créez des interfaces frontend distinctives et de qualité production avec une haute qualité de design.

**Utilisation :** Cette skill est automatiquement activée lors de la création de :
- Composants web
- Pages HTML/CSS
- Applications React/Vue
- Landing pages
- Dashboards
- Interfaces utilisateur

**Caractéristiques principales :**
- Design créatif et audacieux (évite les esthétiques génériques d'IA)
- Choix typographiques distinctifs
- Palettes de couleurs cohérentes
- Animations et micro-interactions
- Compositions spatiales inattendues
- Détails visuels raffinés

**Exemples de commandes :**
```
- "Crée une landing page pour un portfolio 3D"
- "Design un composant de galerie avec effet parallaxe"
- "Construis une interface dashboard avec thème sombre"
```

### 2. skill-creator

**Description :** Créez et gérez des skills Claude Code personnalisées.

**Utilisation :** Pour créer de nouvelles skills adaptées aux besoins spécifiques du projet.

## Configuration du Projet

Le fichier [claude_config.json](.claude/claude_config.json) contient :

```json
{
  "skills": [
    {
      "name": "frontend-design",
      "enabled": true
    },
    {
      "name": "skill-creator",
      "enabled": true
    }
  ],
  "project": {
    "name": "SITE WEB - Sites Internet Dynamiques 3D",
    "type": "web-3d"
  },
  "preferences": {
    "language": "fr",
    "framework": "vanilla-js",
    "3d_library": "three.js"
  }
}
```

## Comment Utiliser les Skills

### Activation Automatique

Les skills s'activent automatiquement selon le contexte de votre demande :
- **frontend-design** : Lors de la création d'interfaces web
- **skill-creator** : Lors de la création/modification de skills

### Activation Manuelle

Vous pouvez mentionner explicitement une skill dans votre demande :
```
"Utilise la skill frontend-design pour créer une page d'accueil"
```

## Principes de Design (frontend-design)

### Typographie
- Éviter : Inter, Roboto, Arial, polices système génériques
- Préférer : Polices distinctives et caractéristiques
- Combiner : Police display unique + police de corps raffinée

### Couleurs
- Éviter : Dégradés violets sur fond blanc
- Préférer : Palettes cohésives avec couleurs dominantes et accents vifs
- Utiliser : Variables CSS pour la cohérence

### Animations
- Priorité : Solutions CSS-only pour HTML
- Moments clés : Chargement de page avec révélations échelonnées
- Interactions : États de survol surprenants, déclenchements au scroll

### Composition Spatiale
- Layouts inattendus et asymétriques
- Chevauchements et flux diagonaux
- Espace négatif généreux OU densité contrôlée

### Détails Visuels
- Maillages de dégradés
- Textures de bruit
- Motifs géométriques
- Transparences superposées
- Ombres dramatiques
- Curseurs personnalisés

## Exemples pour SITE WEB 3D

### Landing Page 3D Interactive
```
"Crée une landing page avec une scène Three.js en arrière-plan,
des éléments de texte en superposition avec effet parallaxe,
et une navigation fluide vers les sections"
```

### Galerie de Projets 3D
```
"Design une galerie de projets avec aperçus 3D en survol,
transitions cinématiques entre les projets,
et une mise en page asymétrique audacieuse"
```

### Dashboard de Contrôle 3D
```
"Construis un dashboard pour contrôler une scène 3D avec
des sliders stylisés, des toggles animés,
et un thème sombre élégant avec accents néon"
```

## Structure des Skills

```
.claude/
├── claude_config.json          # Configuration principale
├── README.md                   # Ce fichier
└── skills/
    ├── frontend-design/
    │   ├── SKILL.md           # Instructions de la skill
    │   └── LICENSE.txt        # Licence Apache 2.0
    └── skill-creator/
        ├── SKILL.md
        ├── LICENSE.txt
        ├── agents/            # Agents spécialisés
        ├── references/        # Schémas et références
        └── scripts/           # Utilitaires Python
```

## License

- **frontend-design** : Apache License 2.0
- **skill-creator** : Apache License 2.0

Voir les fichiers LICENSE.txt dans chaque dossier de skill pour les termes complets.

## Support

Pour toute question sur l'utilisation des skills :
1. Consultez la documentation dans `SKILL.md` de chaque skill
2. Demandez à Claude Code : "Comment utiliser la skill frontend-design ?"
3. Consultez les exemples dans ce README

---

**Dernière mise à jour :** 26 mars 2026
