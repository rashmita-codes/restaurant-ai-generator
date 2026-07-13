import "./RestaurantPreview.css";

function RestaurantPreview({ data }) {

    if(!data){
        return(
            <div className="placeholder">
                🚀 Your AI generated restaurant website will appear here.
            </div>
        )
    }

    const dishes=data.menuDescription
        ? data.menuDescription.split(",")
        : ["Chef Special","Signature Dish","Fresh Dessert"];

    return(

<div className="preview-container">

<div className="hero-banner">

<h1>{data.heroTitle}</h1>

<p>{data.heroSubtitle}</p>

<div className="hero-buttons">

<button className="primary-btn">
Reserve Table
</button>

<button className="secondary-btn">
View Menu
</button>

</div>

</div>

<section className="section">

<h2>About Us</h2>

<p>{data.about}</p>

</section>

<section className="section">

<h2>Featured Menu</h2>

<div className="menu-grid">

{dishes.map((dish,index)=>(

<div className="menu-card" key={index}>

<h3>{dish.trim()}</h3>

<p>Prepared with premium ingredients and authentic flavours.</p>

</div>

))}

</div>

</section>

<section className="section">

<h2>Contact</h2>

<div className="contact-grid">

<div className="contact-card">

<h3>📍 Address</h3>

<p>{data.address}</p>

</div>

<div className="contact-card">

<h3>📞 Phone</h3>

<p>{data.phone}</p>

</div>

<div className="contact-card">

<h3>🕒 Opening Hours</h3>

<p>{data.hours}</p>

</div>

</div>

</section>

<div className="footer">

© 2026 {data.seoTitle || "Restaurant"} • Powered by Restaurant AI Generator

</div>

</div>

    )

}

export default RestaurantPreview;