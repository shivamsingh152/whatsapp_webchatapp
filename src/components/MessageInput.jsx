import React, { useState, useContext } from 'react';
import { Send } from 'lucide-react';
import { ChatContext } from '../context/ChatContext';
import { useIndexedDB } from '../hooks/useIndexedDB';

export const MessageInput = () => {
    const [message, setMessage] = useState('');
    const { dispatch } = useContext(ChatContext);
    const { saveMessage } = useIndexedDB();
  
    const handleSend = async () => {
      if (!message.trim()) return;
  
      const newMessage = {
        text: message,
        time: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isOwn: true
      };
  
      dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
      await saveMessage(newMessage);
      setMessage('');
    };
  
    return (
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type a message"
          className="chat-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          className="send-button"
          onClick={handleSend}
        >
          <Send className="icon" />
        </button>
      </div>
    );
};