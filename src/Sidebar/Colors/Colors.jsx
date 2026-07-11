import Input from "../../components/Input";
import "./Colors.css";
import { data } from "../../db/data";
import { useContext } from "react";
import { selectContext } from "../../Context/Context";
export default function Colors() {
  const { setColor } = useContext(selectContext);
  const query = new Set();
  data.map(({ color }) => query.add(color));
  const arrayQuery = Array(...query);
  return (
    <div>
      <h2 className="sidebar-title colors-title">Colors</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input
          type="radio"
          value="all"
          name="color"
          onClick={() => setColor("all")}
        />
        <span className="checkmark"></span>
        ALL
      </label>
      {arrayQuery.map((item, key) => (
        <Input value={item} key={key} name="color" />
      ))}
    </div>
  );
}
