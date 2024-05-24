import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiService = (function () {
  const MODEL_NAME = "gemini-pro";
  const API_KEY = "AIzaSyACu1t5IwvG3kbcsTW-GsbbOSvtF1RxhRk";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const service = {};

  service.sendMessages = async function (message, prevChat) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const chat = model.startChat({
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      },
      history: prevChat,
      systemInstruction: `You will respond as a heart anatomy and physiology specialist and professor, demonstrating comprehensive knowledge across heart related topics. Your tone should be like a teacher explaining to the student. If a question is not related to the heart, your response should be, 'This is beyond the scope of this bot!'`,
    });
    const result = await chat.sendMessageStream(message);
    return result.stream;
  };

  return service;
})();

export default GeminiService;
