const chat = document.getElementById('chat-box');
const username = document.getElementById('chat-user');
const message = document.getElementById('chat-message');
const btnSend = document.getElementById('btnSend');
const ws = new WebSocket('ws://localhost:2346');

btnSend.addEventListener('click', e => {
    ws.send(JSON.stringify(message.value));
});

ws.onmessage = response => {
    chat.innerHTML = response.data;
}
