// Responses dictionary using regular expressions
const responses = {
  'what is your name\\??': ["I am ELIZA, your virtual assistant."],
  'how are you\\??': ["I'm just a program, so I don't have feelings, but thank you for asking!"],
  'what is the capital of france\\??': ["The capital of France is Paris."],
  'who is the president of the united states\\??': ["As of 2023, the President of the United States is Joe Biden."],
  'what is the weather like\\??': ["I can't check the weather right now, but you can look it up online!"],
  'bye|goodbye|exit': ["Goodbye! Take care."],
  'hello|hi|hey': [
    "Hello! How are you feeling today?",
    "Hi there! What’s on your mind?",
    "Hey! How can I help you?"
  ],
  'you remind me of (.*)': [
    "Why do you think I remind you of {0}?",
    "What makes you think of {0} when talking to me?",
    "Is it a good feeling to be reminded of {0}?"
  ],
  '(.*) mother|father|family|parent(.*)': [
    "Tell me more about your family.",
    "How does that make you feel about your family?",
    "What role does your family play in your thoughts?"
  ],
  '(.*) I need (.*)': [
    "Why do you need {1}?",
    "Would getting {1} really help you?",
    "What if you didn’t need {1}?"
  ],
  '(.*) I am (.*)': [
    "Why do you think you are {1}?",
    "How long have you felt that way?",
    "What made you feel like {1}?"
  ],
  '(.*) I feel (.*)': [
    "Why do you feel {1}?",
    "Does feeling {1} happen often?",
    "How does that feeling affect you?"
  ],
  '(.*) (sorry|apologize)(.*)': [
    "No need to apologize.",
    "Apologies aren't necessary. Why do you feel that way?",
    "It’s okay to feel that way."
  ],
  '(.*)': [
    "Can you tell me more?",
    "Why do you say that?",
    "How does that make you feel?",
    "What do you mean by that?",
    "Interesting... go on."
  ]
};

// Reflections dictionary to replace pronouns
const reflections = {
  "I": "you",
  "me": "you",
  "my": "your",
  "am": "are",
  "you": "I",
  "your": "my",
  "yours": "mine",
  "are": "am"
};

// Function to reflect the text
function reflect(text) {
  const words = text.toLowerCase().split(" ");
  const reflectedWords = words.map(word => reflections[word] || word);
  return reflectedWords.join(" ");
}

// Function to select a response based on user input
function respond(userInput) {
  for (let pattern in responses) {
    const regex = new RegExp(pattern, 'i'); // Case-insensitive matching
    const match = userInput.match(regex);

    if (match) {
      const responseTemplate = responses[pattern][Math.floor(Math.random() * responses[pattern].length)];
      const reflectedGroups = match.slice(1).map(group => reflect(group));
      return responseTemplate.replace(/{(\d+)}/g, (_, number) => reflectedGroups[number] || '');
    }
  }
  return "I'm not sure I understand. Can you elaborate?";
}

// Function to display messages
function displayMessage(message, sender) {
  const chatBox = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  if (sender === 'user') {
    messageElement.classList.add('user-message');
    messageElement.textContent = "You: " + message;
  } else if (sender === 'bot') {
    messageElement.classList.add('bot-message');
    messageElement.textContent = "Bot: " + message;
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Handle Send button click
document.getElementById('send-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value.trim();

  if (userInput) {
    displayMessage(userInput, 'user'); // Display user message
    const botResponse = respond(userInput); // Generate bot response
    displayMessage(botResponse, 'bot'); // Display bot response
    document.getElementById('user-input').value = ''; // Clear input field
  }
});

// Handle Enter key to send message
document.getElementById('user-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('send-btn').click();
  }
});
