import { Context } from "./Context/Context";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./style.css";

export default function App() {
  return (
    <div className="app-shell">
      <Context>
        <Sidebar />
        <Nav />
        <main className="main-content">
          <Recommended />
          <Products />
        </main>
      </Context>
    </div>
  );
}
