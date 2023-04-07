import { Link } from "react-router-dom";
import Sale from "./Sale";
import yasha from "../images/yasha.jpg";
import clown from "../images/clown.jpg";
import tang from "../images/tang.jpg";
import shrimp from "../images/shrimp.png";
import roids from "../images/roids.jpg";
import tank from "../images/aquarium.png";

const Home = () => {
  const link = (
    <Link to="/shop" className="shop-link">
      {" "}
      here.
    </Link>
  );
  return (
    <div className="home">
      <div className="homeTitle">
        WELCOME TO GLASS GARDEN,
        <div className="intro">
          We offer a wide variety of rare, aqua-cultured, corals. Shop our
          selection {link}
        </div>
      </div>
      <Link to="/shop">
        <Sale />
      </Link>
      <div className="fill"></div>
      <div className="grid">
        <div className="quote">
          <div className="subTitle">What is coral aquaculture?</div>
          "Coral reefs are some of the most beautiful organisms on Earth. With
          their mystifying shapes and unique blends of colors, they’re sought
          after by saltwater aquarium owners and suppliers alike. Unfortunately,
          the natural reefs are fragile and susceptible to damage from both
          climate change and human interference. As such, conservation methods
          are taking place to reduce the impact on the wild coral reefs and
          preserve them for generations to come. This is what coral aquaculture
          is and how it’s benefiting nature and our saltwater tanks’
          ecosystems."
          <a
            className="credit-link"
            href="https://worldwidecorals.com/blogs/news/what-is-coral-aquaculture-its-benefits-and-importance"
            target="_blank"
          >
            - World Wide Corals
          </a>
        </div>
        <div className="care">
          <div className="header">CARE</div>
          <a
            href="https://apifishcare.com/post/the-saltwater-series-keeping-healthy-corals#:~:text=Corals%20require%20specific%20water%20conditions,500%20ppm%20(mg%2FL)"
            target="_blank"
          >
            <div className="subTitle">The Basics </div>
          </a>
          <a
            href="https://keesaquarium.com/blog/83191/how-to-take-care-of-coral-in-a-home-aquarium"
            target="_blank"
          >
            <div className="subTitle">
              Caring for your corals in a home environment
            </div>
          </a>
        </div>
        <div className="food">
          <div className="header">FOOD</div>
          <a
            href="https://www.polyplab.com/products/reef-roids"
            target="_blank"
            className="section"
          >
            <div
              className="flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img className="icon" src={roids}></img>
              <div className="subTitle">Reef Roids </div>
            </div>
          </a>
          <a
            href="https://www.mysis.com/hobbyist/product/frozen-mysis-shrimp/"
            target="_blank"
          >
            <div
              className="flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img src={shrimp} className="icon"></img>
              <div className="subTitle">Frozen Mysis Shrimp </div>
            </div>
          </a>
        </div>
        <div className="resources">
          <div className="header">RESOURCES</div>
          <a
            className="section"
            href="https://www.nano-reef.com/forums/topic/74703-lgreens-ultimate-guide-to-nano-fish/"
            target="_blank"
          >
            <div className="subTitle">Ready For Fish? </div>
            <img src={yasha} className="fish"></img>
            <img src={clown} className="fish"></img>
            <img src={tang} className="fish"></img>
          </a>
          <a
            className="section"
            href="https://www.piecesoftheocean.com/blogs/poto-articles/sps-vs-lps-vs-soft-coral"
            target="_blank"
          >
            <div className="subTitle">The 3 Main Types of Corals </div>
            <div
              className="subSection"
              style={{ backgroundColor: "black", display: "flex" }}
            >
              <div className="type">SOFT</div>
              <div className="type">LPS</div>
              <div className="type">SPS</div>
            </div>
          </a>
          <a
            href="https://www.bulkreefsupply.com/content/post/8-considerations-for-mounting-coral-like-a-pro-beginners-guide-ep-45"
            target="_blank"
          >
            <div className="subTitle">Coral Placement & Mounting</div>
          </a>
          <a
            href="https://www.aquariadise.com/best-lighting-for-reef-tank/"
            target="_blank"
          >
            <div
              className="flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img src={tank} className="icon"></img>
              <div className="subTitle">Lighting Recommendations</div>
            </div>
          </a>
        </div>
        <div className="beginner">
          FOR BEGINNERS
          <a
            href="https://www.bulkreefsupply.com/content/post/matthews-coral-picks-for-beginners-beginners-guide-ep-43"
            target="_blank"
          >
            <div className="subTitle">Beginner-Friendly Corals</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
