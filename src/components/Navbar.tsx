import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
        <div>
          {cartQuantity > 0 && (
            <button
              className="btn btn-outline-success position-relative rounded-circle fs-4"
              onClick={openCart}
            >
              <MdShoppingCart />
              <div className="cart-counter">{cartQuantity}</div>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
