import { useState } from "react";

function PromptForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    restaurantName: "",
    cuisine: "",
    address: "",
    phone: "",
    hours: "",
    menu: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <section className="prompt-section">
      <h2>Create Your Restaurant Website</h2>

      <form onSubmit={handleSubmit} className="prompt-form">

        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="hours"
          placeholder="Opening Hours"
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="menu"
          placeholder="Menu Items"
          onChange={handleChange}
        />

        <button type="submit">
          Generate Website
        </button>

      </form>
    </section>
  );
}

export default PromptForm;