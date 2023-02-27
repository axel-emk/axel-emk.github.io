const responses = {
    "hola": "Hola, ¿cómo estás?",
    "bien": "Me alegra saber eso",
    "adios": "Hasta pronto!"
  };

  function generateResponse(userInput) {
    // Convertir el input del usuario a minúsculas para compararlo con las claves del objeto JSON
    userInput = userInput.toLowerCase();
    // Si el input del usuario coincide con una clave del objeto JSON, devolver la respuesta correspondiente
    if (responses[userInput]) {
      return responses[userInput];
    } else {
      // Si no hay una respuesta correspondiente, devolver un mensaje genérico
      return "Lo siento, no entiendo lo que quieres decir";
    }
  }

  function displayMessage(userInput) {
    // Crear el mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = userInput;
    // Crear la respuesta del chatbot
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    botMessage.innerHTML = generateResponse(userInput);
    // Mostrar ambos mensajes en el contenedor de la conversación
    const chatContainer = document.getElementById("chat-container");
    chatContainer.appendChild(userMessage);
    chatContainer.appendChild(botMessage);
    // Hacer scroll hacia abajo para mostrar el último mensaje
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  const chatForm = document.getElementById("chat-form");
  chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("user-input").value;
    displayMessage(userInput);
    document.getElementById("user-input").value = "";
  });
        