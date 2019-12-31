import React from "react";
import "/public/styles.css";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer p"> Zainab Edina | Copyright | {year}</p>
    </footer>
  );
}

export default Footer;
