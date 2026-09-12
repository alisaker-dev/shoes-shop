import "./Nav.css";
import { FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { selectContext } from "../Context/Context";
export default function Nav() {
  const { setSearch, favorites, activeView, setActiveView } =
    useContext(selectContext);
  const [input, setInput] = useState("");
  useEffect(() => {
    setSearch(input);
  }, [input, setSearch]);
  return (
    <nav>
      <div className="brand-mark">
        <span className="brand-icon">
          <FiShoppingBag />
        </span>
        <span>
          shoes<span className="brand-accent">SHOP</span>
        </span>
      </div>
      <div className="nav-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="profile-container">
        <button
          type="button"
          className={`favorite-link ${activeView === "favorites" ? "active" : ""}`}
          onClick={() =>
            setActiveView(activeView === "favorites" ? "products" : "favorites")
          }
          aria-label="Open favorites"
        >
          <FiHeart className="nav-icons" />
          <span>Favorites</span>
          {favorites.length > 0 && <b>{favorites.length}</b>}
        </button>
      </div>
    </nav>
  );
}
