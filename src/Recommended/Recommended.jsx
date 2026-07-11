import { useContext } from "react";
import "./Recommended.css";
import { selectContext } from "../Context/Context";
export default function Recommended() {
  const { setCompany } = useContext(selectContext);
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" onClick={() => setCompany("all")}>
            All Products
          </button>
          <button className="btns" onClick={() => setCompany("Nike")}>
            Nike
          </button>
          <button className="btns" onClick={() => setCompany("Adidas")}>
            Adidas
          </button>
          <button className="btns" onClick={() => setCompany("Puma")}>
            Puma
          </button>
          <button className="btns" onClick={() => setCompany("Vans")}>
            Vans
          </button>
        </div>
      </div>
    </>
  );
}
