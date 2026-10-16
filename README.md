# Boîte à outils technique

Application web de formation et d'aide au dimensionnement, en français, utilisable hors ligne :

- **Calculs** : pneumatique (force, choix du diamètre, consommation d'air, flambage), hydraulique (vérin, pompe, conduites), mécanique (couple-puissance, réducteur, vis-écrou, levage), électricité (loi d'Ohm, courant absorbé, moteur asynchrone, câbles).
- **À venir** : éditeur de schémas IEC 60617 / IEC 81346, simulation de circuit, simulation de pannes, composants électroniques.

## Utilisation

- En ligne : ouvrir la page GitHub Pages du dépôt, puis menu ⋮ de Chrome → **Installer** (ou bouton « Installer » de l'application).
- Hors ligne : ouvrir directement `index.html` dans un navigateur.
- Sauvegarde : boutons **Enregistrer** / **Ouvrir** (fichier projet `.json`).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'application (HTML + CSS + JavaScript, sans dépendance) |
| `manifest.json`, `sw.js`, icônes | Installation sur le PC et fonctionnement hors ligne |

Les formules et valeurs sont indicatives : elles ne remplacent ni les catalogues fabricants ni la vérification réglementaire.
