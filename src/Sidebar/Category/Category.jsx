import Input from "../../components/Input";
import "./Category.css";
import { data } from "../../db/data";
import { useContext } from "react";
import { selectContext } from "../../Context/Context";
export default function Category() {
  const { setCategory } = useContext(selectContext);
  const query = new Set();
  data.map(({ category }) => query.add(category));
  const arrayQuery = Array(...query);
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input
          type="radio"
          value="all"
          name="category"
          onClick={() => setCategory("all")}
        />
        <span className="checkmark"></span>
        ALL
      </label>
      {arrayQuery.map((item, key) => (
        <Input value={item} key={key} name="category" />
      ))}
    </div>
  );
}
