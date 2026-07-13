export function createRestaurantPrompt(data) {
  return `
You are an expert restaurant website copywriter.

Generate content for this restaurant.

Restaurant Name: ${data.restaurantName}
Cuisine: ${data.cuisine}
Address: ${data.address}
Phone: ${data.phone}
Opening Hours: ${data.hours}
Menu: ${data.menu}

Return ONLY valid JSON in this exact format:

{
  "heroTitle": "",
  "heroSubtitle": "",
  "about": "",
  "menuDescription": "",
  "seoTitle": "",
  "seoDescription": ""
}

Do not include markdown.
Do not include \`\`\`.
Do not explain anything.
Return only JSON.
`;
}