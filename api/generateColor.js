import OpenAI from "openai";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { characteristics } = req.body;
  if (!characteristics) {
    return res.status(400).json({ error: "Characteristics are required." });
  }

  // res
  //   .status(200)
  //   .json({ color: "violet", description: "This is the color description" });

  try {
    console.log(process.env.OPENAI_API_KEY);
    console.log("TEST generateColor12");
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    console.log("OpenAI API KEY:", openai.apiKey);

    const prompt = `Give hex color code (above 70% saturation) and very short explanation in format #hex_code;color shade name-explanation that represents ${characteristics} developer based on color psychology, Make explanation like it's me speaking as I'm the developer having these traits.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50,
    });

    const result = response.choices[0].message.content.trim();
    console.log("OpenAI Result:", result);

    const hexColorMatch = result.match(
      /(#[0-9A-Fa-f]{6});\s*([^;-]+)\s*-\s*(.*)/
    );

    if (hexColorMatch) {
      const color = hexColorMatch[1];
      const name = hexColorMatch[2].trim();
      const description = hexColorMatch[3].trim();

      console.log("Color:", color);
      console.log("Name:", name);
      console.log("Description:", description);

      res.status(200).json({ color, name, description });
    } else {
      res.status(500).json({ error: "No valid hex color code found." });
    }
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "Error generating color." });
  }
}
