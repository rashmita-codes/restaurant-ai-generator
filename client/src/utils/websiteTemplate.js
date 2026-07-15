export function getWebsiteTemplate(data) {

const {
restaurantName,
heroTitle,
about,
menu,
address,
phone,
hours,
reviews,
image,
theme,
cuisine,
} = data;

const menuItems = Array.isArray(menu)
? menu
: String(menu || "")
.split(",")
.map(item => item.trim())
.filter(Boolean);

const reviewItems = reviews || [];

return `

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
/>

<title>${restaurantName}</title>

<link
href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
rel="stylesheet"
/>

<style>

*{

margin:0;

padding:0;

box-sizing:border-box;

font-family:'Poppins',sans-serif;

}

body{

background:#0b0b0f;

color:white;

}

.preview{

min-height:100vh;

background:
radial-gradient(circle at top left, ${theme.primary}, transparent 35%),
radial-gradient(circle at bottom right, ${theme.secondary}, transparent 25%),
#0b0b0f;

}

.navbar{

display:flex;

justify-content:space-between;

align-items:center;

padding:22px 70px;

background:rgba(20,20,25,.75);

backdrop-filter:blur(10px);

border-bottom:1px solid rgba(255,255,255,.08);

position:sticky;

top:0;

z-index:100;

}

.logo{

font-size:30px;

font-weight:700;

color:var(--primary);

}

.logo span{

color:white;

}

.nav-links{

display:flex;

gap:35px;

}

.nav-links a{

color:#ddd;

text-decoration:none;

font-size:17px;

transition:.3s;

}

.nav-links a:hover{

color:var(--primary);

}

.hero{

width:90%;

max-width:1250px;

margin:60px auto;

display:flex;

justify-content:space-between;

align-items:center;

gap:70px;

}

.hero-left{

flex:1;

}

.hero-left h1{

font-size:62px;

line-height:1.15;

margin-bottom:22px;

}

.hero-left span{

color:var(--primary);

}

.hero-left p{

font-size:18px;

line-height:1.9;

color:#ddd;

margin-bottom:35px;

}

.hero-left button{

padding:15px 35px;

background:linear-gradient(
90deg,
var(--primary),
var(--secondary)
);

border:none;

color:white;

border-radius:50px;

font-size:18px;

cursor:pointer;

transition:.3s;

}

.hero-left button:hover{

transform:translateY(-3px);

box-shadow:0 10px 25px rgba(0,0,0,.4);

}

.hero-right{

flex:1;

display:flex;

justify-content:center;

}

.hero-right img{

width:100%;

max-width:560px;

border-radius:25px;

box-shadow:
0 25px 60px rgba(0,0,0,.45);

}

.container{

width:88%;

max-width:1200px;

margin:auto;

padding-bottom:70px;

}

.card{

margin-top:35px;

background:rgba(255,255,255,.08);

border:1px solid rgba(255,255,255,.12);

backdrop-filter:blur(18px);

border-radius:24px;

padding:35px;

box-shadow:
0 20px 50px rgba(0,0,0,.35);

}

.card h2{

font-size:30px;

margin-bottom:20px;

color:var(--primary);

}

:root{

--primary:${theme.primary};

--secondary:${theme.secondary};

}
</style>

</head>

<body>

<div class="preview">

<nav class="navbar">

<div class="logo">

🍽 ${restaurantName}

</div>

<div class="nav-links">

<a href="#">Home</a>

<a href="#">Menu</a>

<a href="#">About</a>

<a href="#">Contact</a>

</div>

</nav>

<section class="hero">

<div class="hero-left">

<h1>

${heroTitle || `Experience the Best ${cuisine} Cuisine`}

</h1>

<p>

${about}

</p>

<button>

Reserve Table

</button>

</div>

<div class="hero-right">

<img

src="${image}"

alt="${restaurantName}"

/>

</div>

</section>

<div class="container">

<div class="card">

<h2>

🍽 About Us

</h2>

<p

style="

line-height:1.9;

font-size:17px;

color:#ddd;

"

>

${about}

</p>

</div>

<div class="card">

<h2>

🍕 Featured Menu

</h2>

<div

style="

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:20px;

"

>

${menuItems
.map(item=>`

<div

style="

padding:18px;

background:linear-gradient(
135deg,
var(--primary),
var(--secondary)
);

border-radius:14px;

font-size:18px;

font-weight:600;

text-align:center;

box-shadow:
0 10px 25px rgba(0,0,0,.25);

"

>

🍴 ${item}

</div>

`)
.join("")}

</div>

</div>

<div class="card">

<h2>

📍 Contact

</h2>

<div

style="

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:20px;

"

>

<div

style="

padding:25px;

background:#15151c;

border-radius:18px;

"

>

<h3>

📍 Address

</h3>

<br>

<p>

${address}

</p>

</div>

<div

style="

padding:25px;

background:#15151c;

border-radius:18px;

"

>

<h3>

📞 Phone

</h3>

<br>

<p>

${phone}

</p>

</div>

<div

style="

padding:25px;

background:#15151c;

border-radius:18px;

"

>

<h3>

🕒 Opening Hours

</h3>

<br>

<p>

${hours}

</p>

</div>

</div>

</div>

<div class="card">

<h2>

⭐ Customer Reviews

</h2>

<div

style="

display:grid;

grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

gap:22px;

"

>

${reviewItems.map(review=>`

<div

style="

background:#15151c;

padding:25px;

border-radius:18px;

"

>

<h3>

${review.name}

</h3>

<br>

<div

style="

color:gold;

font-size:18px;

"

>

${review.rating}

</div>

<br>

<p

style="

line-height:1.8;

color:#ddd;

"

>

${review.comment}

</p>

</div>

`).join("")}
</div>

<footer
style="
margin-top:60px;
padding:35px;
background:#111827;
text-align:center;
border-top:1px solid rgba(255,255,255,.08);
"
>

<h2
style="
color:white;
margin-bottom:10px;
"
>
${restaurantName}
</h2>

<p
style="
color:#bbb;
font-size:17px;
margin-bottom:8px;
"
>
${cuisine} Restaurant
</p>

<p
style="
color:#888;
font-size:15px;
"
>
Made using AI Restaurant Website Generator
</p>

</footer>

</div>

<style>

@media(max-width:1000px){

.navbar{

padding:20px;

flex-direction:column;

gap:20px;

}

.nav-links{

gap:20px;

flex-wrap:wrap;

justify-content:center;

}

.hero{

flex-direction:column;

text-align:center;

margin:40px auto;

}

.hero-left h1{

font-size:42px;

}

.hero-left p{

font-size:17px;

}

.hero-right img{

max-width:100%;

}

.container{

width:95%;

}

.card{

padding:25px;

}

}

@media(max-width:700px){

.hero-left h1{

font-size:34px;

}

.hero-left button{

width:100%;

}

.logo{

font-size:24px;

}

.nav-links a{

font-size:15px;

}

}

</style>

</body>

</html>

`;
}