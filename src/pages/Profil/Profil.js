import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

const Profil = () => {
  const { state } = useLocation();
  const [favoriteBook, setFavoriteBook] = useState(
    state.favoriteBook ? state.favoriteBook : [],
  );

  const favorite = (id, isFavorite) => {
    // check if the heart is true or false; if it's false then you delete the book from the array favoriteBook
    if (!isFavorite) {
      setFavoriteBook((lastList) => lastList.filter((book) => book.id !== id));
    }
  };

  const bookList = favoriteBook.map((book) => (
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
    <div className="Profil">
      <Header />
      <div className="bookList">
        {favoriteBook.lenght > 0 ? { bookList } : "Pas encore de favoris !"}
      </div>
    </div>
  );
};

export default Profil;
