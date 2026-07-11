import Input from "../../components/Input";
import "./Price.css";
import { data } from "../../db/data";
import { useContext } from "react";
import { selectContext } from "../../Context/Context";
export default function Price() {
  const { setPrice } = useContext(selectContext);
  const query = new Set();
  data.map(({ newPrice }) => query.add(newPrice));
  const arrayQuery = Array(...query).sort((a, b) => a - b);
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input
          type="radio"
          value="all"
          name="price"
          onClick={() => setPrice("all")}
        />
        <span className="checkmark"></span>
        ALL
      </label>
      {arrayQuery.map((item, key) => (
        <Input value={item} key={key} name="price" />
      ))}
    </div>
  );
}
