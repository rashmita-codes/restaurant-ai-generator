import { ChefHat } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <ChefHat size={32} />
        <span>Restaurant AI Generator</span>
      </div>

      <button className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;