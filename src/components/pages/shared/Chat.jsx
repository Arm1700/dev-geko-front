import React, { useEffect, useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/");

        socket.onmessage = function (event) {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        };

        socket.onclose = function (event) {
            console.log("Connection closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        const socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/");
        socket.onopen = () => {
            socket.send(JSON.stringify({ message: newMessage }));
        };
        setNewMessage("");
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
