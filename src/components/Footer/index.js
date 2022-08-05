import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Navbar as="footer" bg="footer" variant="dark"></Navbar>
    </>
  );
};

export default Footer;
