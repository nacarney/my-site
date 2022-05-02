import "./HomePage.css";
import { Link } from "react-router-dom";
import AboutMePage from "./AboutMePage";
import LearningPage from "./LearningPage";
import ReadingPage from "./ReadingPage";
import HobbiesPage from "./HobbiesPage";

export default function HomePage() {
  return (
    <div class="container">
      <div class="center">
        <span>
          <div>
            <Link
              component={AboutMePage}
              to="/about-me"
              underline="none"
              color="inherit"
              className="neon-button"
            >
              About Me
            </Link>

            <Link
              component={HobbiesPage}
              to="/hobbies-page"
              underline="none"
              color="inherit"
              className="neon-button"
            >
              What I'm Doing
            </Link>
            <Link
              component={LearningPage}
              to="/learning-page"
              underline="none"
              color="inherit"
              className="neon-button"
            >
              What I'm Learning
            </Link>
            <Link
              component={ReadingPage}
              to="/reading-page"
              underline="none"
              color="inherit"
              className="neon-button"
            >
              What I'm Reading
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
}
