import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantPreview from "./components/RestaurantPreview";

function App() {

  const [websiteData, setWebsiteData] = useState(null);


  const generateWebsite = async (formData) => {

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


      if (!response.ok) {
        throw new Error("AI generation failed");
      }


      const data = await response.json();


      console.log("AI Response:", data);


      setWebsiteData(data);


    } catch (error) {

      console.error(error);

      alert("Unable to generate website. Check backend server.");

    }

  };


  // Default theme before AI generation
  const theme = websiteData?.theme || {
    primary: "#ff7b00",
    secondary: "#ff3d81",
  };


  return (

    <div
      className="app"

      style={{
        "--primary-color": theme.primary,
        "--secondary-color": theme.secondary,
      }}

    >

      <Navbar theme={theme} />


      <Hero
        websiteData={websiteData}
        theme={theme}
      />


      <RestaurantForm
        generateWebsite={generateWebsite}
      />


      {
        websiteData && (

          <RestaurantPreview
            data={websiteData}
            theme={theme}
          />

        )
      }


    </div>

  );

}


export default App;