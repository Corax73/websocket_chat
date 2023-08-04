const chat = document.getElementById('chat-box');
const username = document.getElementById('chat-user');
const message = document.getElementById('chat-message');
const btnSend = document.getElementById('btnSend');
const ws = new WebSocket('ws://localhost:2346');
let history = chat.innerHTML;

btnSend.addEventListener('click', e => {
    let data = `${username.value} say: ${message.value} <br/>`;
    ws.send(JSON.stringify(data));
});

ws.onmessage = response => {
    history += response.data;
    chat.innerHTML = history;

}
