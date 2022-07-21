import "./row1.css";
import photo1 from "./hotel1.jpg";
import photo2 from "./hotel2.jpg";
import photo3 from "./motel.jpg";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";

export default function Row1() {
  const [reveal, setReveal] = useState(false);
  const [revealimgs, setRevealImgs] = useState(false);

  useEffect(() => {
    function handleReveal() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height = document.querySelector(".row1-container").scrollHeight;
      const scrolled = winScroll / height;

      if (scrolled > 0.6) {
        console.log("aa");
        setReveal(true);
        setTimeout(() => {
          setRevealImgs(true);
        }, 50);
        window.removeEventListener("scroll", handleReveal);
      }
    }
    window.addEventListener("scroll", handleReveal);
  }, []);

  return (
    <div className="row1-container">
      <Fade bottom when={reveal}>
        <div className="column-row1-column1">
          <h1>How we work</h1>
          <p>
            LOrem ergerag eragergeragear aergaerg ergerag erg er erg er gerg ea
            erge g ! AEWEF ef we wef ewfw Afwee aga egerr ergreg regerg ergreg.
          </p>
          <a href="#" className="book-button">
            Book now
          </a>
        </div>
      </Fade>
      <div className="column-row1-column2">
        <Fade left cascade when={revealimgs}>
          <div className="img-column1">
            <img className="img1" src={photo1} alt="aa"></img>
            <img className="img2" src={photo2} alt="aa"></img>
          </div>
          <div className="img-column2">
            <img className="img3" src={photo3} alt="aa"></img>
          </div>
        </Fade>
      </div>
    </div>
  );
}
