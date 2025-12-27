const { callLLM } = require('../services/llmService');

async function getAIResponse(question) {
    // Call your LLM/NLP model here (OpenAI GPT)
    const response = await callLLM(question);
    return response;
}

module.exports = { getAIResponse };
