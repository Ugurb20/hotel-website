import "./header.css";
import Mynav from "./nav/nav";
import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

import { Image } from "react-bootstrap";

const Imag = React.lazy(() => import("./heading.js"));

export default function Header() {
  /*
      <Suspense
        fallback={<Spinner animation="border" variant="primary" />}
      >
        <Imag /> 
        </Suspense>*/
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
