import { Link } from "react-router-dom";
import sps from "../../images/sps.jpg";
import lps from "../../images/lps.jpg";
import soft from "../../images/soft.jpg";

const Shop = () => {
  return (
    <div className="shop">
      <h1>SHOP</h1>
      <div className="shopButtonsContainer">
        <Link to="/shop/soft-corals" className="shopButton">
          <img src={soft} className="shopBtnImg"></img>
          <div>SOFT CORALS</div>
        </Link>
        <Link to="/shop/lps-corals" className="shopButton">
          <img src={lps} className="shopBtnImg"></img>
          <div>LPS CORALS</div>
        </Link>
        <Link to="/shop/sps-corals" className="shopButton">
          <img src={sps} className="shopBtnImg"></img>
          <div>SPS CORALS</div>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
