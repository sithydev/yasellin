document.addEventListener('DOMContentLoaded', function () {
  var sendMessageButton = document.getElementById('send-button');
  var messageInput = document.getElementById('message-input');
  var chatMessages = document.querySelector('.chat-messages');

  sendMessageButton.addEventListener('click', function () {
    var messageText = messageInput.value;
    if (messageText.trim() !== '') {
      var messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = messageText;
      chatMessages.appendChild(messageElement);

      // Clear the input field after sending
      messageInput.value = '';

      // Scroll to the bottom of the chat messages
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
});
