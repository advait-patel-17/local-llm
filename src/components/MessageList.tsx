import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;