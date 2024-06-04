import React from "react";
import FB from "../src/images/facebook.png";
import GH from "../src/images/github.png";
import IG from "../src/images/instagram.png";
import TW from "../src/images/twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/?lang=en">
        <img className="social-img" src={TW} alt="Social Icons" />
      </a>
      <a href="https://www.facebook.com/">
        <img className="social-img" src={FB} alt="Social Icons" />
      </a>
      <a href="https://www.instagram.com/">
        <img className="social-img" src={IG} alt="Social Icons" />
      </a>
      <a href="https://github.com/">
        <img className="social-img" src={GH} alt="Social Icons" />
      </a>
    </footer>
  );
}
