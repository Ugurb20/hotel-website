import "./header.css";
import Mynav from "./nav/nav";
import { Suspense } from "react";

export default function Header() {
  return (
    <div className="header-container">
      <Mynav />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="heading-container">
          <h1>Best hotels for the best price</h1>

          <a href="#" className="book-button">
            Book Now
          </a>
        </div>
      </Suspense>
    </div>
  );
}
