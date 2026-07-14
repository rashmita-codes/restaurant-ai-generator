import "./Footer.css";

function Footer({ theme }) {

  return (

    <footer
      className="footer"
      style={{
        "--primary-color": theme?.primary || "#ff7b00",
        "--secondary-color": theme?.secondary || "#ff3d81",
      }}
    >

      <div className="footer-container">


        {/* Brand Section */}
        <div className="footer-brand">

          <h2>
            🍽️ RestaurantAI Pro
          </h2>

          <p>
            Create beautiful restaurant websites instantly
            with the power of artificial intelligence.
          </p>

        </div>



        {/* Quick Links */}
        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="#home">
            Home
          </a>

          <a href="#generator">
            Generate
          </a>

          <a href="#preview">
            Preview
          </a>

        </div>



        {/* Features */}
        <div className="footer-links">

          <h3>
            Features
          </h3>

          <p>
            🤖 AI Website Generation
          </p>

          <p>
            🎨 Smart Themes
          </p>

          <p>
            🍽️ Menu Creation
          </p>

        </div>



        {/* Social */}
        <div className="footer-links">

          <h3>
            Connect
          </h3>


          <a href="#">
            GitHub
          </a>


          <a href="#">
            LinkedIn
          </a>


          <a href="#">
            Portfolio
          </a>


        </div>


      </div>



      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} RestaurantAI Pro.
          Built with React + Groq AI.
        </p>

      </div>


    </footer>

  );

}


export default Footer;