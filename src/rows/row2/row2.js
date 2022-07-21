import "./row2.css";
import Fade from "react-reveal/Fade";
import photo from "./andre-tan-pzQaLSGAYe4-unsplash.jpg";
import photo2 from "./ppl2.jpg";
import photo3 from "./ppl3.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";
import { Image, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Row2() {
  const [reveal, setReveal] = useState(false);
  const [revealimgs, setRevealImgs] = useState(false);
  useEffect(() => {
    function handleReveal() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height = document.querySelector(".row2-container").scrollHeight;
      const scrolled = winScroll / height;

      if (scrolled > 1) {
        setReveal(true);
        setTimeout(() => {
          setRevealImgs(true);
        }, 75);
        window.removeEventListener("scroll", handleReveal);
      }
    }
    window.addEventListener("scroll", handleReveal);
  }, []);
  return (
    <section id="reviews">
      <div className="row2-container">
        <Fade left when={reveal}>
          <div className="column1-row2"></div>
        </Fade>

        <div className="column2-row2">
          <Carousel style={{ height: "100%" }}>
            <Carousel.Item>
              <div className="carousel-slider-container">
                <div className="slider-container-col1">
                  <Image src={photo2} alt="rounded" roundedCircle></Image>
                </div>
                <div className="slider-container-col2">
                  <p>
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    The best hotel I’ve ever been privileged enough to stay at.
                    Gorgeous building, and it only gets more breathtaking when
                    you walk in. High quality rooms (there was even a tv by the
                    shower), and high quality service. Also, they are one of few
                    hotels that allow people under 21 to book a reservation.
                  </p>
                  <figcaption>
                    <span className="line">
                      <IoIosRemove />
                    </span>
                    Jason More in Smash Magazine
                  </figcaption>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-slider-container">
                <div className="slider-container-col1">
                  <Image src={photo3} alt="rounded" roundedCircle></Image>
                </div>
                <div className="slider-container-col2">
                  <p>
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    The best hotel I’ve ever been privileged enough to stay at.
                    Gorgeous building, and it only gets more breathtaking when
                    you walk in. High quality rooms (there was even a tv by the
                    shower), and high quality service. Also, they are one of few
                    hotels that allow people under 21 to book a reservation.
                  </p>
                  <figcaption>
                    <span className="line">
                      <IoIosRemove />
                    </span>
                    Miranda Smith in The Guardian
                  </figcaption>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-slider-container">
                <div className="slider-container-col1">
                  <Image src={photo} alt="rounded" roundedCircle></Image>
                </div>
                <div className="slider-container-col2">
                  <p className="full-quote">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    The best hotel I’ve ever been privileged enough to stay at.
                    Gorgeous building, and it only gets more breathtaking when
                    you walk in. High quality rooms (there was even a tv by the
                    shower), and high quality service. Also, they are one of few
                    hotels that allow people under 21 to book a reservation.
                  </p>
                  <figcaption>
                    <span className="line">
                      <IoIosRemove />
                    </span>{" "}
                    Necati Bukcuoglu
                  </figcaption>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
