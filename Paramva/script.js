// Add event listener for the 'Send' button
document.getElementById('sendButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value.trim();
    if (userInput) {
        displayUserMessage(userInput);
        generateBotResponse(userInput);
    }
    document.getElementById('userInput').value = ''; // Clear the input field
});

// Handle Enter key press for sending messages
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});

// Display the user's message in the chat window
function displayUserMessage(message) {
    var chatWindow = document.getElementById('chatWindow');
    var userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = message;
    chatWindow.appendChild(userMessageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
}

// Generate the bot's response based on the user's input
function generateBotResponse(userMessage) {
    var chatWindow = document.getElementById('chatWindow');
    var botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message', 'bot-message');

    var botResponse = getBotResponse(userMessage);
    botMessageDiv.textContent = botResponse;

    chatWindow.appendChild(botMessageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
}

// Get a bot response based on the user's message
function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Updated responses based on Paramva College
    if (lowerCaseMessage.includes("hi")) {
        return "I'm a bot paramva, I'm always happy to help you!";
    } else if (lowerCaseMessage.includes("how is the paramva college environment")) {
        return "It's fantastic!";
    } 
 else if (lowerCaseMessage.includes("about college")) {
        return "PARAMVA COLLEGE OF ENGINEERING  a VTU based College which is located at Tumakuru,for more information you can contact ph:9848032919";
    }else if (lowerCaseMessage.includes("paramva college code")) {
        return "CET code: E103, COMEDK code: FR123";
    } else if (lowerCaseMessage.includes("available courses")) {
        return `CSE STREAM:
1. CSE
2. ISE
3. AIDS
4. AIML
5. Cybersecurity
ECE STREAM
CIVIL STREAM
EEE STREAM
MECH STREAM`;
    } else if (lowerCaseMessage.includes("how are placements in paramva college")) {
        return "Placements are quite good!";
    } else if (lowerCaseMessage.includes("paramva college hostel facilities")) {
        return "All the necessary facilities are provided to the students in need.";
    } else if (lowerCaseMessage.includes("college timings")) {
        return "The college timings are from 9:00 AM to 4:00 PM.";
    } else if (lowerCaseMessage.includes("fee structure")) {
        return "The fee structure depends on the course you have joined.";
    } else if (lowerCaseMessage.includes("what about teaching facilities")) {
        return "The college has a NAAC A+ grade and your faculties are well-trained and skilled in teaching.";
    } else if (lowerCaseMessage.includes("library")) {
        return "The library is well-stocked with books and e-resources for students.";
    } else {
        return "Sorry, I didn't quite catch that. Could you rephrase your question?,go to the home page or you can make use of help desk";
    }
}
