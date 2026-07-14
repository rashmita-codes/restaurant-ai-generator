export function downloadWebsite(data) {
  if (!data) return;

  const menuItems = (data.menu || [])
    .map((item) => `<li>${item}</li>`)
    .join("");

  const reviews = (data.reviews || [])
    .map(
      (review) => `
      <div class="review">
        <h4>${review.name}</h4>
        <p>${review.rating}</p>
        <p>${review.comment}</p>
      </div>
    `
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${data.restaurantName}</title>

<style>
body{
font-family:Arial,sans-serif;
background:#111827;
color:white;
margin:0;
}

header{
background:#ff7b00;
padding:60px;
text-align:center;
}

section{
padding:40px;
max-width:1000px;
margin:auto;
}

.review{
background:#1f2937;
padding:20px;
margin:15px 0;
border-radius:12px;
}

footer{
background:#0f172a;
padding:30px;
text-align:center;
}
</style>

</head>

<body>

<header>
<h1>${data.restaurantName}</h1>
<p>${data.heroTitle}</p>
</header>

<section>

<h2>About</h2>

<p>${data.about}</p>

<h2>Menu</h2>

<ul>

${menuItems}

</ul>

<h2>Reviews</h2>

${reviews}

</section>

<footer>

${data.address}<br>

${data.phone}<br>

${data.hours}

</footer>

</body>

</html>
`;

  const blob = new Blob([html], {
    type: "text/html",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${data.restaurantName}.html`;

  link.click();

  URL.revokeObjectURL(url);
}