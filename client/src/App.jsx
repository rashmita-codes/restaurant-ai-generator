import { useState } from "react";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantPreview from "./components/RestaurantPreview";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {

  const [websiteData, setWebsiteData] = useState(null);


  const generateWebsite = async (formData) => {

    console.log("Generate button clicked");


    try {

      const response = await fetch(
        "http://localhost:5000/generate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),

        }
      );


      const data = await response.json();


      console.log("AI Response:", data);


      setWebsiteData(data);


    } catch (error) {

      console.log("Error:", error);

      alert("Cannot connect to server");

    }

  };



  return (

    <div className="app">


      <nav className="navbar">

        <h2>🍽️ Restaurant AI Builder</h2>

      </nav>



      <section className="hero">

        <h1>
          Create Your Restaurant Website Using AI
        </h1>

        <p>
          Generate a professional restaurant website instantly.
        </p>

      </section>



      <RestaurantForm
        generateWebsite={generateWebsite}
      />



      {
        websiteData && (

          <RestaurantPreview
            data={websiteData}
          />

        )
      }



    </div>

  );

}


export default App;