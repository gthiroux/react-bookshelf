# Exercice React : Application Bibliothèque

## Objectif

Créer une application de gestion de bibliothèque personnelle en ReactJS avec React Router.

## Structure de l'application

### Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Liste de tous les livres disponibles |
| `/profile` | Profile | Liste des livres mis en favoris |

### Données d'un livre

Chaque livre possède les propriétés suivantes :

```js
{
  id: number,
  nom: string,
  description: string,
  genre: string,
  like: number,
  favorite: boolean
}
```

## Fonctionnalités demandées

### Page Accueil

- Afficher la liste complète des livres
- Filtrer les livres par genre (select ou boutons)
- Rechercher un livre par son nom (barre de recherche)
- Pouvoir ajouter/retirer un livre des favoris
- Pouvoir liker un livre

### Page Profile

- Afficher uniquement les livres marqués en favoris
- Filtrer les favoris par genre
- Rechercher parmi les favoris par nom
- Pouvoir retirer un livre des favoris

## Contraintes techniques

- Utiliser React Router pour la navigation
- Utiliser `useState` pour la gestion de l'état
- Les filtres (genre + recherche) doivent pouvoir se combiner

## Données de test

Utilisez ce jeu de données pour démarrer :

```js
const livresInitiaux = [
  { id: 1, nom: "Le Seigneur des Anneaux", description: "Une épopée fantastique en Terre du Milieu", genre: "Fantasy", like: 150, favorite: false },
  { id: 2, nom: "1984", description: "Un roman dystopique sur la surveillance de masse", genre: "Science-Fiction", like: 89, favorite: false },
  { id: 3, nom: "Orgueil et Préjugés", description: "Une histoire d'amour dans l'Angleterre du 19e siècle", genre: "Romance", like: 67, favorite: false },
  { id: 4, nom: "Dune", description: "Une saga de science-fiction sur la planète Arrakis", genre: "Science-Fiction", like: 120, favorite: false },
  { id: 5, nom: "Harry Potter", description: "Les aventures d'un jeune sorcier", genre: "Fantasy", like: 200, favorite: false },
  { id: 6, nom: "Sherlock Holmes", description: "Les enquêtes du célèbre détective", genre: "Policier", like: 95, favorite: false },
  { id: 7, nom: "Le Petit Prince", description: "Un conte poétique et philosophique", genre: "Conte", like: 180, favorite: false },
  { id: 8, nom: "Fondation", description: "Le déclin d'un empire galactique", genre: "Science-Fiction", like: 75, favorite: false }
];
```

## Bonus

### Bonus 1 : Persistance des favoris

Sauvegarder la liste des favoris dans le `localStorage` pour qu'elle persiste après actualisation de la page.

### Bonus 2 : Thème sombre

- Ajouter une route `/parametres`
- Créer une page permettant d'activer/désactiver le thème sombre
- Sauvegarder la préférence dans le `localStorage`
- Appliquer le thème sur toute l'application

## Critères d'évaluation

- [ ] Les deux routes fonctionnent correctement
- [ ] L'affichage des livres est fonctionnel
- [ ] Le filtre par genre fonctionne
- [ ] La recherche par nom fonctionne
- [ ] Les filtres se combinent correctement
- [ ] L'ajout/retrait des favoris fonctionne
- [ ] Le code est propre et organisé en composants

## Livrables

- Code source du projet
- L'application doit être fonctionnelle avec `npm start`
