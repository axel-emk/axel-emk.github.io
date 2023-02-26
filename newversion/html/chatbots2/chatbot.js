const form = document.querySelector('#message-form');
const input = document.querySelector('#message-input');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const userMessage = input.value;
	const botMessage = getBotMessage(userMessage);
	appendMessage('user-message', userMessage);
	appendMessage('bot-message', botMessage);
	input.value = '';
});

function appendMessage(type, message) {
	const newMessage = document.createElement('li');
	newMessage.classList.add(type);
	newMessage.innerText = message;
	messages.appendChild(newMessage);
}

function getBotMessage(message) {
	// Lógica del chatbot para responder al mensaje del usuario
	const botResponse = 'Hola! ¿En qué puedo ayudarte?';
	return botResponse;
}
