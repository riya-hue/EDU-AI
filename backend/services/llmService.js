const OpenAI = require('openai');

let client;
if (process.env.OPENAI_API_KEY) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

async function callLLM(question) {
    if (client) {
        // Real LLM call
        const completion = await client.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: question }]
        });
        return completion.choices[0].message.content;
    } else {
        // Dummy response
        return `This is a placeholder answer for: "${question}"`;
    }
}

module.exports = { callLLM };
