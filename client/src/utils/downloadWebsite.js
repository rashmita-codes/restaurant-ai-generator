import { getWebsiteTemplate } from "./websiteTemplate";

async function imageToBase64(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return await new Promise((resolve) => {
      const reader = new FileReader();

      reader.onloadend = () => resolve(reader.result);

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Image conversion failed:", error);
    return imageUrl;
  }
}

export async function downloadWebsite(data, theme) {
  let image = data.image || theme.image;

  image = await imageToBase64(image);

  const html = getWebsiteTemplate({
    ...data,
    image,
    theme,
  });

  const blob = new Blob([html], {
    type: "text/html",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${data.restaurantName}.html`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}