import React, { useContext } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ChatContext } from '../context/ChatContext';
import { Message } from './Message';
import { MessageInput } from './MessageInput';

export const ChatWindow = () => {
    const { state, isMobile, handleBack } = useContext(ChatContext);

    if (!state.activeContact) {
      return (
        <div className="empty-chat">
          <p>Select a chat to start messaging</p>
        </div>
      );
    }
  
    return (
      <div className={`chat-window ${isMobile && state.showContacts ? 'hidden' : ''}`}>
        {/* Chat Header */}
        <div className="chat-header">
          {isMobile && (
            <button className="back-button" onClick={handleBack}>
              <ArrowLeft className="icon" />
            </button>
          )}
          <div className="contact-avatar">
            <span>{state.activeContact.name[0]}</span>
          </div>
          <div className="chat-header-info">
            <h2 className="chat-header-name">{state.activeContact.name}</h2>
            <p className="chat-header-status">online</p>
          </div>
        </div>
  
        {/* Messages Area */}
        <div className="chat-messages">
          {state.messages.map((message, index) => (
            <Message key={index} message={message} isOwn={message.isOwn} />
          ))}
        </div>
  
        {/* Message Input */}
        <MessageInput />
      </div>
    );
};