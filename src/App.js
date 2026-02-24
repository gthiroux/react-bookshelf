import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";

const books = [
  {
    id: 1,
    title: "Le Seigneur des Anneaux",
    description: "Une épopée fantastique en Terre du Milieu",
    genre: "Fantasy",
    like: 150,
    favorite: false,
  },
  {
    id: 2,
    title: "1984",
    description: "Un roman dystopique sur la surveillance de masse",
    genre: "Science-Fiction",
    like: 89,
    favorite: false,
  },
  {
    id: 3,
    title: "Orgueil et Préjugés",
    description: "Une histoire d'amour dans l'Angleterre du 19e siècle",
    genre: "Romance",
    like: 67,
    favorite: false,
  },
  {
    id: 4,
    title: "Dune",
    description: "Une saga de science-fiction sur la planète Arrakis",
    genre: "Science-Fiction",
    like: 120,
    favorite: false,
  },
  {
    id: 5,
    title: "Harry Potter",
    description: "Les aventures d'un jeune sorcier",
    genre: "Fantasy",
    like: 200,
    favorite: false,
  },
  {
    id: 6,
    title: "Sherlock Holmes",
    description: "Les enquêtes du célèbre détective",
    genre: "Policier",
    like: 95,
    favorite: false,
  },
  {
    id: 7,
    title: "Le Petit Prince",
    description: "Un conte poétique et philosophique",
    genre: "Conte",
    like: 180,
    favorite: false,
  },
  {
    id: 8,
    title: "Fondation",
    description: "Le déclin d'un empire galactique",
    genre: "Science-Fiction",
    like: 75,
    favorite: false,
  },
];

const initialLikes = {};
books.forEach((book) => {
  initialLikes[book.id] = book.like;
});

function App() {
  const [favoriteBook, setFavoriteBook] = useState([]);
  const [like, setLike] = useState(initialLikes);
  const handleLike = (id) => {
    setLike((last) => ({ ...last, [id]: last[id] + 1 }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                favoriteBook={favoriteBook}
                setFavoriteBook={setFavoriteBook}
                like={like}
                onLike={handleLike}
              />
            }
          />
          <Route
            path="/profil"
            element={
              <Profil
                favoriteBook={favoriteBook}
                setFavoriteBook={setFavoriteBook}
                like={like}
                onLike={handleLike}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
