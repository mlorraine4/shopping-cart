import { Link } from "react-router-dom";

const Navbar = ({cartIcon}) => {
    return (
      <div className="navBar">
        <div>MadCorals</div>
        <ul className="flex">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
            <img className="cartIcon"></img>
            <div className="cartItems">{cartIcon}</div>
          </Link>
        </ul>
      </div>
    );
}

export default Navbar;