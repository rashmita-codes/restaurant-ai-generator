import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo-icon">🍽️</span>
          <div className="logo-text">
            <h2>RestaurantAI</h2>
            <span>Website Generator</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#generator">Generator</a>
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <a href="#about">About</a>
        </nav>

        {/* CTA Button */}
        <a href="#generator" className="nav-btn">
          Generate Website
        </a>

      </div>
    </header>
  );
}

export default Navbar;