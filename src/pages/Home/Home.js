import Card from "../../components/Card/Card";
// import Header from "../../components/Header/Header";
import "./Home.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const Home = () => {
  const [favoriteBook, setFavoriteBook] = useState([]);

  const favorite = (id, isFavorite) => {
    // check if the heart is true or false; if it's true you add the book in the favoriteBook array, else you delete from the favoriteBook array
    if (isFavorite) {
      // search the book with the good id in the array books and keep the book's information
      const newFavorite = books.find((book) => book.id === id);
      // copy the array favoriteBook and copy the information of the book to add and modif the key:value favorite
      setFavoriteBook((lastList) => [
        ...lastList,
        { ...newFavorite, favorite: true },
      ]);
    } else {
      setFavoriteBook((lastList) => lastList.filter((book) => book.id !== id));
    }

    console.log("good favorite");
    console.log(favoriteBook);
  };

  // Loop to display the books
  const bookList = books.map((book) => (
    <Card
      id={book.id}
      title={book.title}
      description={book.description}
      genre={book.genre}
      like={book.like}
      favorite={book.favorite}
      onFavorite={(newFavorite) => favorite(book.id, newFavorite)}
    />
  ));

  return (
    <div classtitle="Home">
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profil" state={{ favoriteBook }}>
            Profil
          </Link>
        </nav>
      </header>
      <div className="bookList">{bookList}</div>
    </div>
  );
};
export default Home;
