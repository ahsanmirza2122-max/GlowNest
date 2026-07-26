import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "GlowNest Server" });
  });

  // AI Content Assistant Route for CMS (Blog Post & Product Review generation)
  app.post("/api/ai/generate", async (req, res) => {
    try {
      const { type, topic, category } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(400).json({ 
          error: "GEMINI_API_KEY is not configured in environment secrets." 
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      let prompt = "";
      if (type === "blog") {
        prompt = `You are the lead editor for GlowNest, a luxury minimalist AliExpress affiliate lifestyle magazine.
Write an engaging, SEO-optimized blog post titled about: "${topic}".
Category: ${category || "Trending AliExpress Finds"}.

Format the output strictly as JSON with the following structure:
{
  "title": "A catchy, elegant title",
  "excerpt": "A 2-sentence captivating summary",
  "readTime": "5 min read",
  "content": "Full blog post in markdown with section headings (###) and bullet points highlighting 3-4 AliExpress products."
}`;
      } else {
        prompt = `You are a product reviewer for GlowNest luxury lifestyle magazine.
Generate a detailed product review draft for an AliExpress find named: "${topic}" in category: ${category || "Home Decor"}.

Format the output strictly as JSON with:
{
  "title": "Product Full Title",
  "shortDescription": "2-sentence summary of why it's a great find",
  "fullReview": "Detailed 3-paragraph review highlighting quality, aesthetic, and real-world testing",
  "pros": ["Pro 1", "Pro 2", "Pro 3"],
  "cons": ["Con 1", "Con 2"],
  "price": "$29.99",
  "tags": ["Tag1", "Tag2"]
}`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      return res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      return res.status(500).json({ 
        error: error.message || "Failed to generate AI content" 
      });
    }
  });

  // Vite middleware or production static files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`GlowNest server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
