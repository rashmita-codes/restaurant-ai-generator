import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import { createRestaurantPrompt } from "../prompts/restaurantPrompt.js";

dotenv.config();

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const prompt = createRestaurantPrompt(data);

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a professional restaurant website content generator. Always return only valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
    });

    let text = completion.choices[0].message.content;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("Groq Response:");
    console.log(text);

    const aiData = JSON.parse(text);

    res.json({
      success: true,
      data: {
        ...aiData,
        address: data.address,
        phone: data.phone,
        hours: data.hours,
      },
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to generate content.",
    });
  }
});

export default router;