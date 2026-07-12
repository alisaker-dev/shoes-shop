import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { selectContext } from "../Context/Context";
export default function Nav() {
  const { setSearch } = useContext(selectContext);
  const [input, setInput] = useState("");
  useEffect(() => {
    setSearch(input);
  }, [input, setSearch]);
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
