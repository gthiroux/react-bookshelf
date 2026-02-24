import { useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

const Profil = ({ favoriteBook, setFavoriteBook, like, onLike }) => {
  const typeList = [];
  const [filterType, setFilterType] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // * Get the favorite book's array from App's page
  const favorite = (id, isFavorite) => {
    //? check if the heart is true or false; if it's false then you delete the book from the array favoriteBook
    if (!isFavorite) {
      setFavoriteBook((lastList) => lastList.filter((book) => book.id !== id));
      setSearchList((lastList) => lastList.filter((book) => book.id !== id));
    }
  };

  // *recuperation of all type possible in the books array
  favoriteBook.forEach((book) => {
    if (!typeList.includes(book.genre)) typeList.push(book.genre);
  });

  // *recuperation of the filter's value
  const handleType = (e) => {
    setFilterType(e.target.value.toLowerCase());
    setSearchList([]);
  };
  // * search input
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchWord !== "") {
      // searchWord.toLowerCase();
      const result = favoriteBook.filter((book) =>
        book.title.toLocaleLowerCase().includes(searchWord.toLowerCase()),
      );
      setSearchList(result);
      setSearchWord("");
      setHasSearched(true);
    }
  };

  // * Apply the filter on searchList if searchList isn't empty or books
  const displayBook = (hasSearched ? searchList : favoriteBook).filter(
    (book) =>
      filterType === "" || filterType === book.genre.toLocaleLowerCase(),
  );

  // *Loop on the favoriteBook's array to display the book's card
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
    <div classtitle="Profil">
      <Header />
      <form className="search" onSubmit={handleSearch}>
        <input
          type="search"
          id="search"
          name="q"
          placeholder="Rechercher votre livre"
          onChange={(e) => {
            setSearchWord(e.target.value);
            if (e.target.value === "") {
              setSearchList([]);
              setHasSearched(false);
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
        {favoriteBook.length === 0
          ? "Pas encore de favoris !"
          : hasSearched && bookList.length === 0
            ? "Aucun livre trouvé !"
            : bookList}
      </div>
    </div>
  );
};

export default Profil;
