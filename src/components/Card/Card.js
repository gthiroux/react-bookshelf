import { useState } from "react";
import "./Card.scss";

const Card = ({ id, title, description, genre, like, favorite }) => {
  const [bookTitle] = useState(title);
  const [bookDescription] = useState(description);
  const [bookGenre] = useState(genre);
  const [bookLike, setLike] = useState(like);
  const [bookFavorite, setFavorite] = useState(favorite);

  function handleFavorite() {
    setFavorite(!bookFavorite);
  }
  function handleLike() {
    setLike(bookLike + 1);
  }
  return (
    <div className="Card">
      <div className="Card__header">
        <h2 className="Card__header__title">{bookTitle}</h2>
        <button className="Card__header__favorite" onClick={handleFavorite}>
          {bookFavorite && "validate"}
        </button>
      </div>
      <label className="Card__genre">{bookGenre}</label>
      <p className="Card__description">{bookDescription}</p>
      <div>
        <label className="Card__like">{bookLike}</label>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  );
};
export default Card;
