import "./header.css";
import Mynav from "./nav/nav";
import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import Imag from "./heading.js";

export default function Header() {
  return (
    <div className="header-container">
      <Imag />

      <Mynav />

      <div className="heading-container">
        <h1>Best hotels for the best price</h1>

        <a href="#" className="book-button">
          Book Now
        </a>
      </div>
    </div>
  );
}
