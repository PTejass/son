const responses = {
    "hello": "Hi there!",
    "how are you": "I'm just a bot, but I'm doing great!",
    "what is your name": "I am a simple hardcoded chatbot.",
    "bye": "Goodbye! Have a nice day."
};

function sendMessage() {
    const input = document.getElementById("user-input");
    const chatContainer = document.getElementById("chat-container");
    const userText = input.value.trim().toLowerCase();

    if (userText === "") return;

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = input.value;
    chatContainer.appendChild(userMessage);

    let botReply = responses[userText] || "I can't help with that.";

    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    botMessage.textContent = botReply;
    chatContainer.appendChild(botMessage);

    input.value = "";

    chatContainer.scrollTop = chatContainer.scrollHeight;
}