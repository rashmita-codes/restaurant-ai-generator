import "./Navbar.css";

function Navbar({ theme }) {

  return (

    <nav
      className="navbar"
      style={{
        "--primary-color": theme?.primary || "#ff7b00",
        "--secondary-color": theme?.secondary || "#ff3d81",
      }}
    >

      <div className="logo">

        🍽️ Restaurant AI Builder

      </div>


      <div className="nav-links">

        <a href="#home">
          Home
        </a>


        <a href="#generator">
          Features
        </a>


        <a href="#preview">
          Preview
        </a>


      </div>


    </nav>

  );

}


export default Navbar;