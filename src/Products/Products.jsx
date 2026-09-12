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
    favorites,
    activeView,
  } = useContext(selectContext);
  const products = data.map((product, index) => ({ ...product, id: index }));
  const productsToShow = activeView === "favorites" ? favorites : products;
  const filteredProducts = productsToShow.filter((item) => {
    const matchCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchPrice =
      selectedPrice === "all" || item.newPrice === selectedPrice;
    const matchColor = selectedColor === "all" || item.color === selectedColor;
    const matchCompany =
      selectedCompany === "all" || item.company === selectedCompany;
    const matchSearch =
      selectedSearch === "all" ||
      item.title.toLowerCase().indexOf(selectedSearch.toLowerCase()) !== -1; // how it does?????!!!!

    return (
      matchCategory && matchPrice && matchColor && matchCompany && matchSearch
    );
  });
  return (
    <>
      <section className="products-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              {activeView === "favorites"
                ? "Your collection"
                : "Created for you"}
            </p>
            <h1>
              {activeView === "favorites"
                ? "Favorite pairs"
                : "Find your next pair"}
            </h1>
          </div>
          <span className="product-count">{filteredProducts.length} pairs</span>
        </div>
        <section className="card-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p className="empty-state">No pairs match your selection yet.</p>
          )}
        </section>
      </section>
    </>
  );
}
