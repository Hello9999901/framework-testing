window.addEventListener("DOMContentLoaded", ()) => {
    const messages = document.createElement("ul");
    document.body.appendChild(messages);

    const websocket = new WebSocket("ws://localhost:5678");
    websocket.onmessage = ({ data }) => {
        const messages = document.createElement("li");
        const content = document.createTextNode(data);
    }
});