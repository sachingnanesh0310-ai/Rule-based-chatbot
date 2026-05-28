function sendMessage() {

    let inputField = document.getElementById("userInput");
    let userText = inputField.value.trim();

    if (userText === "") {
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // User Message
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = userText;
    chatBox.appendChild(userMessage);

    // Bot Response
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");

    let response = getBotResponse(userText);
    botMessage.innerText = response;

    chatBox.appendChild(botMessage);

    // Clear input
    inputField.value = "";

    // Auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Rule-Based Responses
function getBotResponse(input) {

    input = input.toLowerCase();

    // Greetings
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you?";
    }

    // Asking Name
    else if (input.includes("your name")) {
        return "I am a Rule-Based Chatbot 🤖";
    }

    // Asking Time
    else if (input.includes("time")) {
        let time = new Date().toLocaleTimeString();
        return "Current time is: " + time;
    }

    // Asking Date
    else if (input.includes("date")) {
        let date = new Date().toLocaleDateString();
        return "Today's date is: " + date;
    }

    // Asking About Creator
    else if (input.includes("creator") || input.includes("made you")) {
        return "I was created using HTML, CSS, and JavaScript.";
    }

    // Asking How Are You
    else if (input.includes("how are you")) {
        return "I'm doing great! Thanks for asking 😊";
    }

    // Bye
    else if (input.includes("bye")) {
        return "Goodbye! Have a nice day 👋";
    }

    // Default Response
    else {
        return "Sorry, I don't understand that.";
    }
}

// Press Enter to Send Message
document.getElementById("userInput")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }
});