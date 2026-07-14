import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { createRestaurantPrompt } from "./prompt.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});
function extractJSON(text) {

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const first = cleaned.indexOf("{");

  const last = cleaned.lastIndexOf("}");

  if (first === -1 || last === -1) {
    throw new Error("No JSON found.");
  }

  return cleaned.slice(first, last + 1);
}
app.post("/generate", async (req, res) => {
  try {
    const {
      restaurantName,
      cuisine,
      address,
      phone,
      hours,
      menu,
    } = req.body;

   const prompt = createRestaurantPrompt(req.body);
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.8,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

   const text = completion.choices[0].message.content;

const jsonString = extractJSON(text);

const json = JSON.parse(jsonString);

    res.json(json);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate website",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});