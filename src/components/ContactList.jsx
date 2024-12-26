import React, { useState, useContext } from 'react';
import { Users, Search, Menu } from 'lucide-react';
import { ChatContext } from '../context/ChatContext';

export const ContactList = () => {
    const { state, handleContactSelect } = useContext(ChatContext);
    const [searchTerm, setSearchTerm] = useState('');
  
    const contacts = [
      { id: 1, name: 'shivam', lastMessage: 'Hey there!', time: '10:30 AM' },
      { id: 2, name: 'harsh', lastMessage: 'How are you?', time: '9:45 AM' },
      { id: 3, name: 'abhi', lastMessage: 'See you soon!', time: 'Yesterday' }
    ];
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className={`contact-list ${state.isMobile && !state.showContacts ? 'hidden' : ''}`}>
        {/* Header */}
        <div className="contact-header">
          <div className="profile-avatar">
            <Users className="icon" />
          </div>
          <div className="header-icons">
            <Menu className="icon" />
          </div>
        </div>
  
        {/* Search */}
        <div className="search-container">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
  
        {/* Contacts */}
        <div className="contacts-container">
          {filteredContacts.map(contact => (
            <div
              key={contact.id}
              className={`contact-item ${state.activeContact?.id === contact.id ? 'active' : ''}`}
              onClick={() => handleContactSelect(contact)}
            >
              <div className="contact-avatar">
                <span>{contact.name[0]}</span>
              </div>
              <div className="contact-info">
                <div className="contact-header-row">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-time">{contact.time}</span>
                </div>
                <p className="contact-last-message">{contact.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ); 
}; 