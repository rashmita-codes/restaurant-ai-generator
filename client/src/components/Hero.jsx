import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Build Beautiful Restaurant Websites
          <span> in Seconds</span>
        </h1>

        <p>
          AI generates modern restaurant websites with menus,
          themes, descriptions and beautiful layouts instantly.
        </p>

        <button className="hero-btn">
          Generate Website
        </button>

      </div>
    </section>
  );
}

export default Hero;