const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");

let userText = null;

const createElement = (html, className) => {
    // Create new div and apply chat, specified class and set html content of div
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = html;
    return chatDiv; // Return the created chat div
}

const handleOutgoingChat = () => {
    userText = chatInput.value.trim(); // Get chatInput value and remove extra spaces
    const html = `<div class="chat-content">
    <div class="chat-details">
        <img src="images/user.jpg" alt="user-img">
        <p>${userText}</p>
    </div>
</div>`;
    const outgoingChatDiv = createElement(html, "outgoing");
}

sendButton.addEventListener("click", handleOutgoingChat)2355