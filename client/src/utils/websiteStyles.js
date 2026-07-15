const websiteStyles = `
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',Arial,sans-serif;
}

body{

background:#0b0b0f;

color:white;

line-height:1.7;

}


/* Navbar */

.navbar{

display:flex;

justify-content:space-between;

align-items:center;

padding:20px 8%;

background:#111827;

position:sticky;

top:0;

z-index:10;

}

.logo{

font-size:30px;

font-weight:bold;

color:var(--primary);

}

.nav-links{

display:flex;

gap:30px;

}

.nav-links a{

text-decoration:none;

color:white;

font-size:17px;

}


/* Hero */

.hero{

display:flex;

justify-content:space-between;

align-items:center;

padding:80px 8%;

background:

linear-gradient(
135deg,
var(--primary),
var(--secondary)
);

gap:50px;

}

.hero-text{

flex:1;

}

.hero-text h1{

font-size:60px;

margin-bottom:20px;

}

.hero-text p{

font-size:20px;

opacity:.9;

}

.hero-image{

flex:1;

}

.hero-image img{

width:100%;

border-radius:25px;

box-shadow:0 20px 40px rgba(0,0,0,.4);

}


/* Sections */

.section{

max-width:1200px;

margin:auto;

padding:70px 8%;

}

.section h2{

font-size:36px;

margin-bottom:30px;

color:var(--primary);

}


/* Cards */

.card{

background:#17171f;

padding:35px;

border-radius:20px;

margin-bottom:30px;

box-shadow:0 10px 30px rgba(0,0,0,.25);

}


/* Menu */

.menu-grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(220px,1fr));

gap:20px;

}

.menu-item{

padding:20px;

background:#23232f;

border-radius:15px;

text-align:center;

font-size:18px;

}


/* Contact */

.contact-grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(220px,1fr));

gap:20px;

}

.contact-card{

background:#23232f;

padding:25px;

border-radius:15px;

}


/* Reviews */

.review-grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(250px,1fr));

gap:20px;

}

.review{

background:#23232f;

padding:25px;

border-radius:15px;

}


/* Footer */

.footer{

background:#111827;

padding:40px;

text-align:center;

margin-top:70px;

}


/* Responsive */

@media(max-width:900px){

.hero{

flex-direction:column;

text-align:center;

}

.hero-text h1{

font-size:42px;

}

}
`;

export default websiteStyles;