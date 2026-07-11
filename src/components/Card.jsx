import { BsFillBagHeartFill } from "react-icons/bs";
export default function Card({
  img,
  category,
  title,
  star,
  reviews,
  newPrice,
  prevPrice,
}) {
  return (
    <section className="card">
      <div>
        <img src={`${img}`} alt={`${category}`} className="card-img" />
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
              <span style={{ textDecoration: "line-through" }}>
                ${prevPrice}
              </span>{" "}
              ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
