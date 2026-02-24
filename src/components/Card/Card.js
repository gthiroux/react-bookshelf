import { useState } from "react";
import "./Card.scss";

const Card = ({
  id,
  title,
  description,
  genre,
  like,
  favorite,
  onFavorite,
}) => {
  const [bookLike, setLike] = useState(like);

  function handleFavorite() {
    onFavorite(!favorite);
  }
  function handleLike() {
    setLike(bookLike + 1);
  }
  return (
    <div className="Card" id={id}>
      <div className="Card__header">
        <h2 className="Card__header__title">{title}</h2>
        <button className={favorite ? "favorite" : ""} onClick={handleFavorite}>
          <ion-icon name="heart"></ion-icon>
        </button>
      </div>
      <label className="Card__genre">{genre}</label>
      <div className="Card__description">
        <p className="Card__description__text">Description du livre : </p>
        <p>{description}</p>
      </div>
      <div className="Card__like">
        <label className="Card__like__text">
          <span>Nombre de Likes : </span>
          {bookLike} Likes
        </label>
        <button className="Card__like__btn" onClick={handleLike}>
          Like <ion-icon name="thumbs-up"></ion-icon>
        </button>
      </div>
    </div>
  );
};
export default Card;
