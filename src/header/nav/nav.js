import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import "./nav.css";

export default function Mynav() {
  const [navMode, setNavMode] = useState("default");
  function handleScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.querySelector(".navbar").scrollHeight;
    const scrolled = winScroll / height;
    console.log(scrolled);
    if (scrolled > 0.7) {
      setNavMode("transparent");
    } else if (navMode !== "default") {
      setNavMode("default");
    }
  }
  window.addEventListener("scroll", handleScroll);
  console.log(navMode);
  return (
    <Navbar
      className={navMode}
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          controls="navbarScroll"
        />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav.Link>Book</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
