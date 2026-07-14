import "./RestaurantPreview.css";
import cuisineThemes from "../utils/cuisineThemes";

function RestaurantPreview({ data }) {
  if (!data) return null;
  const theme =
  cuisineThemes[data.cuisine] ||
  cuisineThemes.Default;

  return (
   <section
  className="preview-section"
  id="preview"
  style={{
    "--primary-color": theme.primary,
    "--secondary-color": theme.secondary,
  }}
>

      <div className="preview-container">

        {/* Heading */}

        <div className="preview-header">

          <span className="preview-badge">
            ✨ AI Generated Website
          </span>

          <h2>
            {data.restaurantName || "Restaurant Name"}
          </h2>

          <p>
            {data.heroTitle ||
              "Experience amazing food crafted with passion."}
          </p>

        </div>

        {/* Hero Image */}

        <div className="preview-image">

          
           <img
  src={data.image || theme.image}
  alt={data.restaurantName}
/>
        </div>

        {/* About */}

        <div className="preview-card">

          <h3>🍽 About Us</h3>

          <p>
            {data.about ||
              "AI will generate an engaging restaurant description here."}
          </p>

        </div>

        {/* Featured Menu */}

        <div className="preview-card">

          <h3>🍕 Featured Menu</h3>

          <div className="menu-grid">

            {(Array.isArray(data.menu)
              ? data.menu
              : String(data.menu || "")
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean)
            ).map((item, index) => (
              <div className="menu-item" key={index}>
                🍴 {item}
              </div>
            ))}

          </div>

        </div>

        {/* Contact */}

        <div className="contact-grid">

          <div className="contact-card">
            <h4>📍 Address</h4>
            <p>{data.address || "Restaurant Address"}</p>
          </div>

          <div className="contact-card">
            <h4>📞 Phone</h4>
            <p>{data.phone || "+91 XXXXX XXXXX"}</p>
          </div>

          <div className="contact-card">
            <h4>🕒 Opening Hours</h4>
            <p>{data.hours || "10 AM - 11 PM"}</p>
          </div>

        </div>

        {/* Reviews */}

        <div className="preview-card">

          <h3>⭐ Customer Reviews</h3>

          <div className="reviews-grid">

            {(data.reviews || [
              {
                name: "Sophia",
                rating: "⭐⭐⭐⭐⭐",
                comment:
                  "Amazing food and wonderful ambience!"
              },
              {
                name: "Daniel",
                rating: "⭐⭐⭐⭐⭐",
                comment:
                  "Highly recommended. Excellent service."
              },
              {
                name: "Emily",
                rating: "⭐⭐⭐⭐⭐",
                comment:
                  "The AI-generated website looks incredible."
              }
            ]).map((review, index) => (

              <div className="review-card" key={index}>

                <h4>{review.name}</h4>

                <span>{review.rating}</span>

                <p>{review.comment}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default RestaurantPreview;