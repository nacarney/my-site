import "./HomePage.css";
import { Link } from "react-router-dom";
import AboutMePage from "./AboutMePage";
import LearningPage from "./LearningPage";
import ReadingPage from "./ReadingPage";
import HobbiesPage from "./HobbiesPage";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--clr-neon",
      "hsl(317 100% 54%)"
    );
    document.documentElement.style.setProperty("--clr-bg", "hsl(323 21% 16%)");
  }, []);

  function setColor() {
    document.documentElement.style.setProperty(
      "--clr-bg",
      "rgb(206, 228, 237)"
    );
    document.documentElement.style.setProperty(
      "--clr-neon",
      "black"
    );
  }
  return (
    <div>
      <div className="grid-item">
        <Link
          component={AboutMePage}
          to="/about-me"
          underline="none"
          color="inherit"
        >
          <button
            style={{ background: "Transparent" }}
            className="neon-button"
          >
            About Me
          </button>
        </Link>
      </div>

      <div className="grid-item">
      <Link
        component={LearningPage}
        to="/learning-page"
        underline="none"
        color="inherit"
      >
        <button style={{ background: "Transparent" }} className="neon-button">
          What I'm Learning
        </button>
      </Link>
      </div>
      <div className="grid-item">
      <Link
        component={ReadingPage}
        to="/reading-page"
        underline="none"
        color="inherit"
      >
        <button style={{ background: "Transparent" }} className="neon-button">
          What I'm Reading
        </button>
      </Link>
      </div>
      <div className="grid-item">
      <Link
        component={HobbiesPage}
        to="/hobbies-page"
        underline="none"
        color="inherit"
      >
        <button style={{ background: "Transparent" }} className="neon-button">
          What I'm Doing
        </button>
      </Link>
      </div>
    </div>
  );
}
