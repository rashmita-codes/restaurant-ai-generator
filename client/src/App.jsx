import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromptForm from "./components/PromptForm";
import RestaurantPreview from "./components/RestaurantPreview";
import { generateRestaurant } from "./services/api";

function App() {
  const [restaurantData, setRestaurantData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      const response = await generateRestaurant(formData);

      console.log("API Response:", response);

      setRestaurantData(response.data);
    } catch (error) {
      console.error(error);
      alert("Unable to generate website.");
    }
  };

  return (
    <>
      <Navbar />
      <Hero />

      <PromptForm onGenerate={handleGenerate} />

      <RestaurantPreview data={restaurantData} />
    </>
  );
}

export default App;