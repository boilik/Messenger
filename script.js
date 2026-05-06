let messages=[]

const sendBtn = document.getElementById('sendBtn')
const messageInput = document.getElementById('messageInput')
const chat = document.getElementById('chat')

messageInput.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        sendBtn.click()
    }
})



function Message(text){
    this.text = text
    this.sender = 'user'
    this.recipient = 'bot'
    this.timestamp = new Date().toISOString()
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
    renderMessages()
})

function renderMessages(){
    console.log('Рендерим сообщения, всего:', messages.length);
    chat.innerHTML = ''
    messages.forEach(msg=>{
        let messageToAdd = document.createElement('div')
        messageToAdd.classList.add('message')
        messageToAdd.textContent = msg.text
        chat.appendChild(messageToAdd)
        console.log('Добавлено сообщение:', msg.text);
    })
}

console.log('chat:', chat);
console.log('sendBtn:', sendBtn);