const API_KEY = 'AIzaSyBwXcdV9XGztrQsKL2Ss6AYi0kvF_Db1Yc';
// I know my api key is leaked if I do this!!!
const MODEL = 'gemini-2.5-flash';
const URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;


export async function callGemini(data) {

    const prompt = `
        " So I am going to use your response in my financial manager app and you have to give me response it json format only and data i provide you is of financial stats and 10+ transaction of user you have to give response in formatfinancialSummary:{ balance, income:, expenses }
        spendingAnalysis: { mostSpendingItem, amountSpent ,message } with a small message" - So this the data ${data.financial} and ${data.transaction}
    `


    const payload = {
        contents: [{
            parts: [{ text: prompt }]
        }]
    };

    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const aiRes = await response.json();
    console.log(aiRes);
    if (aiRes.candidates && aiRes.candidates[0].finishReason === "STOP") {
        const textResponse = aiRes.candidates[0].content.parts[0].text;
        const cleanJson = textResponse.replace(/```json|```/g, "").trim();
        console.log(JSON.parse(cleanJson));;
        return JSON.parse(cleanJson)
    }
    throw new Error("AI failed to generate a complete response");
}
