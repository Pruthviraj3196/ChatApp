# Chat Application

A simple chat application built using **HTML, CSS, and JavaScript**, featuring multiple chat themes, message timestamps, and a chat search functionality.

## Hosted Link - https://pruthviraj3196.github.io/ChatApp/

## Features

- **Multi-theme Support**: Users can switch between four different color themes.
- **Chat Search**: Users can search for previous chat conversations.
- **Timestamps**: Each message displays the time it was sent or received.
- **Responsive Design**: Fully responsive and works on all screen sizes.

## Technologies Used

- **HTML**: Structure of the application
- **CSS**: Styling with themes and responsive layout
- **JavaScript**: Functionality for chat messages, themes, and search
- **JSON**: Stores chat data with user names, messages, and timestamps

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/chat-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd chat-app
   ```
3. Open `index.html` in a browser.

## File Structure

```
chat-app/
│-- index.html          # Main HTML file
│-- styles.css          # Styles for the chat UI
│-- script.js           # Main JavaScript file for functionality
│-- chats.json          # Stores chat history
```

## Usage

1. Open the application in a browser.
2. Select a chat session from the left panel.
3. Send and receive messages in the chat window.
4. Change themes using the dropdown in the navbar.
5. Use the search bar to find previous chats.

## Example Chat Data Format

```json
[
  {
    "id": 1,
    "name": "John Mayer",
    "lastMessageTime": "10:32 AM",
    "messages": [
      { "text": "Hey, how are you?", "timestamp": "10:30 AM", "sender": "John Mayer" },
      { "text": "I'm good, you?", "timestamp": "10:32 AM", "sender": "You" }
    ]
  }
]
```

---
**Author:** Pruthviraj Barbole

