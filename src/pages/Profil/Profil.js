import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card/Card";

const Profil = ({ favoriteBook, setFavoriteBook }) => {
  // * Get the favorite book's array from App's page
  const favorite = (id, isFavorite) => {
    //? check if the heart is true or false; if it's false then you delete the book from the array favoriteBook
    if (!isFavorite) {
      setFavoriteBook((lastList) => lastList.filter((book) => book.id !== id));
    }
  };
  // *Loop on the favoriteBook's array to display the book's card
  const bookList = favoriteBook.map((book) => (
    <Card
      key={book.id}
      id={book.id}
      title={book.title}
      description={book.description}
      genre={book.genre}
      like={book.like}
      favorite={book.favorite}
      onFavorite={(newFavorite) => favorite(book.id, newFavorite)}
    />
  ));

  // * search input
  const [searchWord, setSearchWord] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchWord !== "") {
      // searchWord.toLowerCase();
      const result = favoriteBook.filter((book) =>
        book.title.toLocaleLowerCase().includes(searchWord.toLowerCase()),
      );
      setSearchList(result);
      setSearchWord("");
    }
  };
  //?Loop to display the books
  const searchBook = searchList.map((book) => (
    <Card
      key={book.id}
      id={book.id}
      title={book.title}
      description={book.description}
      genre={book.genre}
      like={book.like}
      favorite={book.favorite}
      onFavorite={(newFavorite) => favorite(book.id, newFavorite)}
    />
  ));
  console.log(favoriteBook);

  return (
    <div className="Profil">
      <header className="header">
        <nav>
          <Link to="/" state={{ favoriteBook }}>
            Home
          </Link>
          <Link to="/profil" state={{ favoriteBook }}>
            Profil
          </Link>
        </nav>
        <form className="hearder__search" onSubmit={handleSearch}>
          <input
            type="search"
            id="search"
            name="q"
            placeholder="Rechercher votre livre"
            onChange={(e) => {
              setSearchWord(e.target.value);
              if (e.target.value === "") {
                setSearchList([]);
              }
            }}
          ></input>
          <button type="submit"> Rechercher</button>
        </form>
      </header>
      <div className="bookList">
        {favoriteBook.length > 0
          ? searchList.length > 0
            ? searchBook
            : bookList
          : "Pas encore de favoris !"}
      </div>
    </div>
  );
};

export default Profil;
