import Card from "../components/Card";
import "./Products.css";
import { data } from "../db/data";
import { useContext } from "react";
import { selectContext } from "../Context/Context";

export default function Products() {
  const { selectedCategory, selectedPrice, selectedColor } =
    useContext(selectContext);
  console.log(`${selectedCategory}, ${selectedPrice}, ${selectedColor}`);
  const allProducts = data.map(
    (
      { img, category, title, star, reviews, newPrice, prevPrice, color },
      key,
    ) => (
      <Card
        img={img}
        category={category}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        key={key}
        prevPrice={prevPrice}
        color={color}
      />
    ),
  );
  var filteredProducts = allProducts.filter((item) => {
    const matchCategory =
      selectedCategory === "all" || item.props.category === selectedCategory;
    const matchPrice =
      selectedPrice === "all" || item.props.newPrice === selectedPrice;
    const matchColor =
      selectedColor === "all" || item.props.color === selectedColor;

    return matchCategory && matchPrice && matchColor;
  });
  return (
    <>
      <section className="card-container">
        {[selectedCategory, selectedColor, selectedPrice].every(
          (f) => f === "all",
        )
          ? allProducts
          : filteredProducts}
      </section>
    </>
  );
}
