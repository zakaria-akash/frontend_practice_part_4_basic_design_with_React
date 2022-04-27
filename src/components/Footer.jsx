import React from "react";

const CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>&copy; zakaria-akash {CurrentYear}</p>
    </footer>
  );
}

export default Footer;
