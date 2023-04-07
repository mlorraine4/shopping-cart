import chat2 from "../images/speech-bubble.png";
import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";
import youtube from "../images/play.png";
import twitter from "../images/twitter.png";
import home from "../images/home-icon-silhouette.png";
import email from "../images/email.png";
import phone from "../images/phone-call.png";
import { useState } from "react";

const Footer = () => {

  const openForm = () => {
    const form = document.querySelector(".form");
    form.classList.toggle("slided");
    window.scrollTo(0, document.body.scrollHeight);
  };

  const [input, setInput] = useState("");
  const onChange = () => {
    setInput("");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="footer">
      <img src={chat2} className="chat"></img>
      <div className="socialContainer subFoot">
        <img src={facebook} className="socialIcon"></img>
        <img src={insta} className="socialIcon"></img>
        <img src={youtube} className="socialIcon"></img>
        <img src={twitter} className="socialIcon"></img>
      </div>
      <div className="flex subFoot">
        <div>ABOUT US</div>
        <div>LIVE GUARANTEE</div>
        <div>SHIPPING & DELIVERY</div>
        <div>TERMS & CONDITIONS</div>
        <div>PRIVACY POLICY</div>
        <div>SECURE PAYMENT</div>
      </div>
      <div className="flex subFoot">
        <div className="flex">
          <img src={home} className="icon"></img>
          <div>109 PLAZA ST, HEALDSBURG, CA 95448</div>
        </div>
        <div className="flex">
          <img src={phone} className="icon"></img>
          <div>(707) 433-1380</div>
        </div>
        <div className="flex">
          <img src={email} className="icon"></img>
          <div>SUPPORT@GLASSGARDEN.COM</div>
        </div>
      </div>
      <div>
        <div onClick={openForm} className="subscribeText">SUBSCRIBE TO OUR NEWSLETTER</div>
        <form className="form" onSubmit={onSubmit}>
          <input type="email" onChange={onChange} className="emailInput" required></input>
          <input type="submit" value="subscribe" className="emailSubmit"></input>
        </form>
      </div>
    </div>
  );
};

export default Footer;
