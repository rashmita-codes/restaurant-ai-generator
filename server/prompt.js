export function createRestaurantPrompt(data) {
  return `
You are a professional restaurant website designer.

Generate ONLY valid JSON.

Never write markdown.

Never use \`\`\`.

Never explain anything.

Return ONLY a JSON object.

JSON format:

{
  "restaurantName": "",
  "cuisine": "",
  "heroTitle":"",
  "heroDescription":"",
  "about":"",
  "menu":[],
  "address":"",
  "phone":"",
  "hours":"",
  "reviews":[
    {
      "name":"",
      "rating":"",
      "comment":""
    },
    {
      "name":"",
      "rating":"",
      "comment":""
    },
    {
      "name":"",
      "rating":"",
      "comment":""
    }
  ]
}

Restaurant Name:
${data.restaurantName}

Cuisine:
${data.cuisine}

Address:
${data.address}

Phone:
${data.phone}

Hours:
${data.hours}

Menu:
${data.menu}

Requirements:

Generate a premium restaurant website.

Hero title should be exciting.

Hero description should be attractive.

About should be around 120 words.

Menu must be an array.

Generate exactly 3 customer reviews.

The "cuisine" field MUST contain exactly one of these values whenever appropriate:

- Indian
- Italian
- Chinese
- Japanese
- Mexican
- Thai
- French
- American
- Cafe
- Bakery

Return ONLY valid JSON.
`;
}