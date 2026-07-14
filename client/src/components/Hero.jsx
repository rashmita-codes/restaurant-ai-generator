import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <div className="hero-badge">
          🤖 AI Powered Restaurant Website Builder
        </div>

        <h1 className="hero-title">
          Build Stunning
          <span> Restaurant Websites</span>
          <br />
          In Seconds With AI
        </h1>

        <p className="hero-description">
          Create beautiful restaurant websites instantly using Artificial
          Intelligence. Generate menus, hero sections, descriptions,
          themes, colors, and layouts automatically.
        </p>

        <div className="hero-buttons">

          <a href="#generator" className="primary-btn">
            🚀 Generate Website
          </a>

          <a href="#features" className="secondary-btn">
            Explore Features
          </a>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>100+</h2>
            <p>Website Designs</p>
          </div>

          <div className="stat-card">
            <h2>20+</h2>
            <p>Cuisine Themes</p>
          </div>

          <div className="stat-card">
            <h2>AI</h2>
            <p>Powered</p>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="hero-right">

        <div className="hero-card glass">

          <div className="card-header">
            🍽️ AI Restaurant Preview
          </div>

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant"
          />

          <div className="card-content">

            <h3>La Bella Italia</h3>

            <p>
              Authentic Italian Cuisine crafted with AI generated branding.
            </p>

            <div className="card-tags">

              <span>Italian</span>

              <span>Luxury</span>

              <span>AI Generated</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;