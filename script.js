const chatList = document.getElementById("chatList");
const chatMessages = document.getElementById("chatMessages");
const chatUserName = document.getElementById("chatUserName");
const themeSelect = document.getElementById("themeSelect");
const searchChat = document.getElementById("searchChat");
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessage");

let chatData = [];
let currentChatIndex = 0;

// Load Chat Data from chats.json
async function loadChats() {
    try {
        const response = await fetch("chats.json");
        chatData = await response.json();
        renderChatSessions();
    } catch (error) {
        console.error("Error loading chats:", error);
    }
}

// Render Chat List
function renderChatSessions() {
    chatList.innerHTML = "";
    chatData.forEach((chat, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${chat.name}</strong><br><small>${chat.lastMessageTime}</small>`;
        li.addEventListener("click", () => loadChat(index));
        chatList.appendChild(li);
    });
}

// Load Messages for Selected Chat
function loadChat(index) {
    currentChatIndex = index;
    const chat = chatData[index];
    chatUserName.innerText = chat.name;
    chatMessages.innerHTML = chat.messages.map(msg => 
        `<p class="message ${msg.sender === 'You' ? 'user-message' : 'other-message'}">
            <strong>${msg.sender}:</strong> ${msg.text}
            <span class="timestamp">${msg.timestamp}</span>
        </p>`
    ).join("");
}

// Handle Theme Selection
themeSelect.addEventListener("change", () => {
    document.body.className = themeSelect.value + "-theme";
});

// Search Chats
searchChat.addEventListener("input", () => {
    const query = searchChat.value.toLowerCase();
    renderChatSessions();
    [...chatList.children].forEach(chat => {
        if (!chat.textContent.toLowerCase().includes(query)) {
            chat.style.display = "none";
        }
    });
});

// Get Current Time in HH:MM AM/PM Format
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
}

// Send New Message
sendMessageBtn.addEventListener("click", () => {
    if (messageInput.value.trim() === "") return;

    const newMessage = {
        text: messageInput.value,
        timestamp: getCurrentTime(),
        sender: "You"
    };

    chatData[currentChatIndex].messages.push(newMessage);

    chatMessages.innerHTML += `<p class="message user-message">
        <strong>You:</strong> ${newMessage.text}
        <span class="timestamp">${newMessage.timestamp}</span>
    </p>`;

    messageInput.value = "";
});

// Load chats when the page loads
loadChats();
