import React from 'react'

export const Message = ({ message, isOwn }) => (
    <div className={`message ${isOwn ? 'sent' : 'received'}`}>
      <div className="message-content">
        <p className="message-text">{message.text}</p>
        <span className="message-time">{message.time}</span>
      </div>
    </div>
  );