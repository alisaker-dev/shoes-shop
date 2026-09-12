import { BsFillBagHeartFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { useContext } from "react";
import { selectContext } from "../Context/Context";
export default function Card({ product }) {
  const { img, category, title, star, reviews, newPrice, prevPrice } = product;
  const { favorites, toggleFavorite } = useContext(selectContext);
  const isFavorite = favorites.some((favorite) => favorite.id === product.id);

  return (
    <section className="card">
      <div className="card-media">
        <img src={`${img}`} alt={`${category}`} className="card-img" />
        <button
          type="button"
          className={`card-favorite ${isFavorite ? "saved" : ""}`}
          onClick={() => toggleFavorite(product)}
          aria-label={`${isFavorite ? "Remove" : "Add"} ${title} ${isFavorite ? "from" : "to"} favorites`}
        >
          <FiHeart />
        </button>
        <span className="card-category">{category}</span>
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <span style={{ textDecoration: "line-through" }}>${prevPrice}</span>{" "}
            ${newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}
