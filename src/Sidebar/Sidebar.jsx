import "./Sidebar.css";
import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Colors from "./Colors/Colors.jsx";
export default function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}
