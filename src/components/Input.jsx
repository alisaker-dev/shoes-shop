import { useContext } from "react";
import { selectContext } from "../Context/Context";

export default function Input({ value, name }) {
  const { setCategory, setPrice, setColor } = useContext(selectContext);
  return (
    <label htmlFor="" className="sidebar-label-container">
      <input
        type="radio"
        value={value}
        name={name}
        onClick={(e) => {
          name === "category"
            ? setCategory(e.target.value)
            : name === "price"
              ? setPrice(e.target.value)
              : setColor(e.target.value);
        }}
      />
      <span className="checkmark"></span>
      {String(value).toUpperCase()}
    </label>
  );
}
