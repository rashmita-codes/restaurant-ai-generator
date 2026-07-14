import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantPreview from "./components/RestaurantPreview";
import "./App.css";

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

      const data = await response.json();
      setWebsiteData(data);
    } catch (error) {
      console.error(error);
      alert("Cannot connect to server");
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RestaurantForm generateWebsite={generateWebsite} />
      {websiteData && <RestaurantPreview data={websiteData} />}
    </div>
  );
}

export default App;