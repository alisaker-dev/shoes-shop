import { Context } from "./Context/Context";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

export default function App() {
  return (
    <div>
      <Context>
        <Sidebar />
        <Nav />
        <Recommended />
        <Products />
      </Context>
    </div>
  );
}
