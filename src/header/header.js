import "./header.css";
import Mynav from "./nav/nav";
import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

import { Image } from "react-bootstrap";

const Imag = React.lazy(() => import("./heading.js"));

export default function Header() {
  return (
    <div className="header-container">
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <Imag />
      </Suspense>
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
