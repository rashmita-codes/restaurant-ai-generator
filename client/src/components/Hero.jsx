import "./Hero.css";

function Hero({ websiteData, theme }) {

  const primaryColor = theme?.primary || "#ff7b00";
  const secondaryColor = theme?.secondary || "#ff3d81";


  return (

    <section
      className="hero"
      id="home"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >

      <div className="hero-left">


        <span className="hero-badge">
          🤖 AI Restaurant Website Builder
        </span>



        <h1 className="hero-title">

          {
            websiteData
              ? websiteData.restaurantName
              : "Build Your Restaurant Website"
          }


          <br />


          <span>

            {
              websiteData
                ? websiteData.heroTitle
                : "With AI in Seconds"
            }

          </span>


        </h1>



        <p className="hero-description">

          {
            websiteData
              ? websiteData.heroDescription
              :
              "Create a stunning professional restaurant website automatically using artificial intelligence."
          }

        </p>



        <div className="hero-buttons">

          <button
            className="hero-btn"
          >
            🚀 Start Building
          </button>


          <button
            className="secondary-btn"
          >
            ✨ AI Generated Preview
          </button>


        </div>



        <div className="hero-stats">


          <div className="stat-card">

            <h2>
              AI
            </h2>

            <p>
              Powered
            </p>

          </div>



          <div className="stat-card">

            <h2>
              10s
            </h2>

            <p>
              Generation
            </p>

          </div>



          <div className="stat-card">

            <h2>
              24/7
            </h2>

            <p>
              Available
            </p>

          </div>


        </div>


      </div>



      <div className="hero-right">


        <div className="hero-card">


          <div className="card-header">

            🍽️ AI Restaurant Designer

          </div>



          <img
            src={
              websiteData?.image ||
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            }
            alt="Restaurant"
          />



          <div className="card-content">


            <h3>

              {
                websiteData
                  ? websiteData.cuisine
                  : "Any Cuisine"
              }

            </h3>


            <p>

              {
                websiteData
                  ?
                  "Your AI-generated restaurant website is ready."
                  :
                  "Generate menus, layouts and beautiful designs using AI."
              }

            </p>


            <div className="card-tags">

              <span>
                AI Design
              </span>

              <span>
                Smart Menu
              </span>

              <span>
                Modern UI
              </span>

            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Hero;