import React, { useState } from "react";
import axios from 'axios';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const OPENAI_API_KEY = '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';
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
    };
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const makeApiRequest = async () => {
        try {
            // Send user's input as a message
            const userMessage = { role: 'user', content: inputValue };
            setMessages([...messages, userMessage]);

            // Include user's input in the request payload
            const requestData = {
                model: 'gpt-3.5-turbo',
                messages: [...messages, userMessage],
            };

            const response = await axios.post(apiUrl, requestData, { headers });

            const botResponse = response.data.choices[0].message.content;
            const botMessage = { role: 'assistant', content: botResponse };
            setMessages([...messages, botMessage]);
        } catch (error) {
            console.error('Error making OpenAI API request:', error);
        }

        setInputValue(''); // Clear the input field after sending the message
    };

    return (
        <div>
            {/* Chat messages */}
            <div>
                {messages.map((msg, index) => (
                    <p key={index}><b>{msg.role}:</b> {msg.content}</p>
                ))}
            </div>
            {/* Input field */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {/* Send button */}
            <button onClick={makeApiRequest}>Send</button>
        </div>
    );
}

export default Chatbot;