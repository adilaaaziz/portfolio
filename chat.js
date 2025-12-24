export default async function handler(req, res) {
  // Pull the key securely from Vercel's backend
  const apiKey = process.env.DEEPSEEK_API_KEY;

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(200).json(data);
}