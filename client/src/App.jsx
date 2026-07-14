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
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to generate website");
      }

      const data = await response.json();

      console.log("AI Response:", data);

      setWebsiteData(data);
    } catch (error) {
      console.error(error);

      alert("Unable to connect to AI server.");
    }
  };

  return (
    <div className="app">
      <Navbar />

      <Hero />

      <RestaurantForm generateWebsite={generateWebsite} />

      {websiteData && (
        <RestaurantPreview data={websiteData} />
      )}
    </div>
  );
}

export default App;