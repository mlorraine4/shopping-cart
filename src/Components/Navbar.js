import { Link } from "react-router-dom";
import cartImg from "../images/shopping-cart.png";
import logo from "../images/coral-reef.png";

const Navbar = ({cartIcon}) => {
    return (
      <div className="navBar">
        <Link to="/shopping-cart/home" className="navLink">
          <div className="flex">
            <img src={logo} className="logo"></img>
            <div className="pageTitle">GLASS GARDEN</div>
          </div>
        </Link>
        <ul className="flex">
          <Link className="navLink">
            <li>LOGIN/SIGN UP</li>
          </Link>
          <Link to="/shopping-cart/shop" className="navLink">
            <li>SHOP</li>
          </Link>
          <Link to="/shopping-cart/cart" className="navLink">
            <div className="cartNav">
              <img className="cartIcon" src={cartImg}></img>
              <div className="cartQty">{cartIcon}</div>
            </div>
          </Link>
        </ul>
      </div>
    );
}

export default Navbar;