import './componentstyle/hero.css';
import heroSaree from '../assets/hero-saree.png';
import { Link } from "react-router-dom"; // Change this from Routes/Route

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">
          AUTHENTIC HANDLOOM
        </span>

        <h1>
          Timeless Textiles
          <br />
          for Modern Living
        </h1>

        <p>
          Explore our curated collection of handloom
          sarees, veshtis and lungis crafted with
          tradition, care and unmatched quality.
        </p>

        {/* Change <a href="..."> to <Link to="..."> */}
        <Link to="/products" className="hero-btn">
          Shop Now <span>→</span>
        </Link>
      </div>

      <img
        src={heroSaree}
        alt="Traditional handloom saree"
        className="hero-img"
      />
    </section>
  );
}

export default Hero;