const messageInput = document.querySelector('#user-input');
const conversationElem = document.querySelector('#conversation-container');
const handleFocus = () => {
    messageInput.focus();
  };
// here there be JS, yarrr ☠️
const sendMessage = (event) => {
    // prevent the default "page reload" from occurring.
    event.preventDefault();
  
    // console.log(messageInput.value);
    const message = { author: 'user', text: messageInput.value };
    updateConversation(message);

    fetch('/cat-message')
        .then((res) => res.json())
        .then((data) => {
            updateConversation(data.message);
            // console.log(data);

        });
};

const updateConversation = (message) => {
    // console.log(message);
    // deconstruct the message object
    const { author, text } = message;
    // create a <p> element
    const messageElem = document.createElement('p');
    // add the text message to the element
    messageElem.innerHTML = `<span>${text}</span>`;
    messageElem.classList.add('message', author);
    // append the element to the conversation
    conversationElem.appendChild(messageElem);  
    handleFocus()
    if (author === 'user') {
        messageInput.value = '';
    }
    conversationElem.scrollTop = conversationElem.scrollHeight;

};

