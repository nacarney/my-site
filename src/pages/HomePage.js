import "./HomePage.css";
import { Link } from "react-router-dom";
import AboutMePage from "./AboutMePage";
import LearningPage from "./LearningPage";
import ReadingPage from "./ReadingPage";
import HobbiesPage from "./HobbiesPage";
import { useEffect } from "react";

export default function HomePage() {

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
