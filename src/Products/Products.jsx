import Card from "../components/Card";
import "./Products.css";
import { data } from "../db/data";
import { useContext } from "react";
import { selectContext } from "../Context/Context";

export default function Products() {
  const {
    selectedCategory,
    selectedPrice,
    selectedColor,
    selectedCompany,
    selectedSearch,
  } = useContext(selectContext);
  console.log(
    `${selectedCategory}, ${selectedPrice}, ${selectedColor}, ${selectedCompany}, ${selectedSearch}`,
  );
  const allProducts = data.map(
    (
      {
        img,
        category,
        title,
        star,
        reviews,
        newPrice,
        prevPrice,
        color,
        company,
      },
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
        company={company}
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
    const matchCompany =
      selectedCompany === "all" || item.props.company === selectedCompany;
    const matchSearch =
      selectedSearch === "all" ||
      item.props.title.toLowerCase().indexOf(selectedSearch.toLowerCase()) !==
        -1; // how it does?????!!!!

    return (
      matchCategory && matchPrice && matchColor && matchCompany && matchSearch
    );
  });
  return (
    <>
      <section className="card-container">
        {[
          selectedCategory,
          selectedColor,
          selectedPrice,
          selectedCompany,
        ].every((f) => f === "all") && selectedSearch === ""
          ? allProducts
          : filteredProducts}
      </section>
    </>
  );
}
