import { useState } from "react";
import "./RestaurantForm.css";

function RestaurantForm({ generateWebsite }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    restaurantName: "",
    cuisine: "",
    address: "",
    phone: "",
    hours: "",
    menu: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await generateWebsite(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="generator-section" id="generator">

      <div className="generator-container">

        <div className="generator-header">

          <span className="generator-badge">
            🤖 AI Website Generator
          </span>

          <h2>
            Create Your Restaurant Website
          </h2>

          <p>
            Fill in your restaurant details and let AI generate a
            beautiful restaurant website in seconds.
          </p>

        </div>

        <form className="generator-form" onSubmit={handleSubmit}>

          <div className="input-grid">

            <div className="input-group">
              <label>Restaurant Name</label>
              <input
                type="text"
                name="restaurantName"
                placeholder="e.g. Spice Garden"
                value={formData.restaurantName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Cuisine</label>

              <select
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              >
                <option value="">Select Cuisine</option>

                <option>Indian</option>
                <option>Italian</option>
                <option>Chinese</option>
                <option>Mexican</option>
                <option>Japanese</option>
                <option>Thai</option>
                <option>French</option>
                <option>American</option>
                <option>Cafe</option>
                <option>Bakery</option>

              </select>

            </div>

          </div>

          <div className="input-grid">

            <div className="input-group">
              <label>Address</label>

              <input
                type="text"
                name="address"
                placeholder="Restaurant Address"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="input-group">

            <label>Opening Hours</label>

            <input
              type="text"
              name="hours"
              placeholder="10:00 AM - 11:00 PM"
              value={formData.hours}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>Menu Items</label>

            <textarea
              rows="6"
              name="menu"
              placeholder="Example: Paneer Tikka, Butter Chicken, Naan, Mango Lassi..."
              value={formData.menu}
              onChange={handleChange}
            />

          </div>

          <button
            className="generate-btn"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "⏳ Generating Website..."
              : "🚀 Generate AI Website"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default RestaurantForm;