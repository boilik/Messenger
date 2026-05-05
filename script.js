let messages=[]
let message={
    text:'text',
    sender:'sender',
    recipient:'recipient',
    timestamp:'timestamp'
}

const sendBtn = document.getElementById('sendBtn')
const messageInput = document.getElementById('messageInput')
const chat = document.getElementById('chat')
function Message(text){
    this.text = text
    this.sender = 'user'
    this.recipient = 'bot'
    this.timestamp = new Date().toISOString()
    return this
}

function checkMessage(text){
    return text.trim() !== ''
}


sendBtn.addEventListener('click',()=>{
    const text = messageInput.value
    if (!checkMessage(text)) {
        return
    }
    const newMessage = new Message(text)
    messages.push(newMessage)
    messageInput.value = ''
    let messageToAdd = document.createElement('div')
    messageToAdd.classList.add('message')
    messageToAdd.textContent = newMessage.text
    chat.appendChild(messageToAdd)
})