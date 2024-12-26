import React, { useReducer, useState, useEffect } from 'react';
import { ChatContext } from '../context/ChatContext';
import { chatReducer } from '../reducers/chatReducer';
import { ContactList } from './ContactList';
import { ChatWindow } from './ChatWindow';

export const WhatsAppClone = () => {
    const [state, dispatch] = useReducer(chatReducer, {
        activeContact: null,
        messages: []
      });

      // Mobile responsiveness states
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showContacts, setShowContacts] = useState(true);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle contact selection for mobile view
  const handleContactSelect = (contact) => {
    dispatch({ type: 'SET_ACTIVE_CONTACT', payload: contact });
    if (isMobile) {
      setShowContacts(false);
    }
  };

  // Handle back button for mobile view
  const handleBack = () => {
    setShowContacts(true);
  };
    
      return (
        <ChatContext.Provider value={{ 
            state, 
            dispatch, 
            isMobile,
            handleContactSelect,
            handleBack 
          }}>
            <div className="app-container">
              <ContactList 
                className={`contact-list ${isMobile && !showContacts ? 'hidden' : ''}`}
              />
              <ChatWindow 
                className={`chat-window ${isMobile && showContacts ? 'hidden' : ''}`}
              />
            </div>
          </ChatContext.Provider>
    );   
};
