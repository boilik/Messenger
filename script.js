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
sendBtn.addEventListener('click',()=>{
    const text = messageInput.value
    const newMessage = new Message(text)
    messages.push(newMessage)
    messageInput.value = ''
    let messageToAdd = document.createElement('div')
    messageToAdd.classList.add('message')
    messageToAdd.innerText = newMessage.text
    chat.appendChild(messageToAdd)
})