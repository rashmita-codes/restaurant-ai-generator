import { useState } from "react";

function RestaurantForm({ generateWebsite }) {
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
    generateWebsite(formData);
  };

  return (
    <section className="prompt-section">
      <h2>Create Your Restaurant Website</h2>

      <form onSubmit={handleSubmit} className="prompt-form">
        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          value={formData.restaurantName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="hours"
          placeholder="Opening Hours"
          value={formData.hours}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="menu"
          placeholder="Menu Items"
          value={formData.menu}
          onChange={handleChange}
        />

        <button type="submit">
          Generate Website
        </button>
      </form>
    </section>
  );
}

export default RestaurantForm;