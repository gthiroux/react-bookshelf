import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import "./Home.scss";
import { useState } from "react";

const Home = ({ books, favoriteBook, setFavoriteBook, like, onLike }) => {
  const [searchWord, setSearchWord] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [filterType, setFilterType] = useState("");
  const typeList = [];

  // * creation of the favorite book's array
  const favorite = (id, isFavorite) => {
    // ?check if the heart is true or false; if it's true you add the book in the favoriteBook array, else you delete from the favoriteBook array
    if (isFavorite) {
      //? search the book with the good id in the array books and keep the book's information
      const newFavorite = books.find((book) => book.id === id);
      //? copy the array favoriteBook and copy the information of the book to add and modif the key:value favorite
      setFavoriteBook((lastList) => [
        ...lastList,
        { ...newFavorite, favorite: true },
      ]);
    } else {
      // ? delete a book in favoriteBook's array
      setFavoriteBook((lastList) => lastList.filter((book) => book.id !== id));
    }
  };

  // *recuperation of all type possible in the books array
  books.forEach((book) => {
    if (!typeList.includes(book.genre)) typeList.push(book.genre);
  });

  // *recuperation of the filter's value
  const handleType = (e) => {
    setFilterType(e.target.value.toLowerCase());
    setSearchList([]);
  };

  // * treatment of the search bar
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchWord !== "") {
      const result = books.filter((book) =>
        book.title.toLocaleLowerCase().includes(searchWord.toLowerCase()),
      );
      setSearchList(result);
      setSearchWord("");
    }
  };

  // * Apply the filter on searchList if searchList isn't empty or books
  const displayBook = (searchList.length > 0 ? searchList : books).filter(
    (book) =>
      filterType === "" || filterType === book.genre.toLocaleLowerCase(),
  );

  //*Loop to display all books
  const bookList = displayBook.map((book) => {
    const idFavoriteBook = favoriteBook.map((fav) => fav.id);
    const isFavorite = idFavoriteBook.includes(book.id);
    return (
      <Card
        key={book.id}
        id={book.id}
        title={book.title}
        description={book.description}
        genre={book.genre}
        like={like[book.id]}
        onLike={() => onLike(book.id)}
        favorite={isFavorite}
        onFavorite={(newFavorite) => favorite(book.id, newFavorite)}
      />
    );
  });

  return (
    <div classtitle="Home">
      <Header />
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
      <select name="selectType" onChange={handleType}>
        <option value="">Filtrer selon le genre ...</option>
        {typeList.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className="bookList">
        {bookList.length > 0 ? bookList : "Aucun livre trouvé"}
      </div>
    </div>
  );
};
export default Home;
