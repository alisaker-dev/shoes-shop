import { Context } from "./Context/Context";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";

export default function App() {
  return (
    <div>
      <Context>
        <Sidebar />
        <Nav />
        <Products />
      </Context>
    </div>
  );
}
