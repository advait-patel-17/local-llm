import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import { Message, Conversation } from '../types';
import { handleModelRequest } from '../services/modelHandler'; 

interface ChatInterfaceProps {
  model: string;
  conversationId: string | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ model, conversationId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Conversation | null>(null);

  useEffect(() => {
    if (conversationId) {
      loadConversation(conversationId);
    } else {
      // Clear messages if no conversation is selected
      setMessages([]);
      setConversation(null);
    }
  }, [conversationId]);

  const loadConversation = async (id: string) => {
    setIsLoading(true);
    try {
      // In a real application, you would fetch this data from an API or database
      // For this example, we'll simulate an API call with setTimeout
      setTimeout(() => {
        const loadedConversation: Conversation = {
          id,
          title: `Conversation ${id}`,
          messages: [
            { role: 'user', content: 'Hello, how are you?' },
            { role: 'assistant', content: 'I\'m doing well, thank you! How can I assist you today?' },
          ],
          modelId: model,
        };
        setConversation(loadedConversation);
        setMessages(loadedConversation.messages);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error loading conversation:', error);
      setIsLoading(false);
    }
  };

  const sendMessage = async (content: string) => {
    const newMessage: Message = { role: 'user', content };
    setMessages([...messages, newMessage]);
    
    try {
      const response = await handleModelRequest(model, content);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
      };
      setMessages([...messages, newMessage, assistantMessage]);
    } catch (error) {
      console.error('Error sending message');      // Handle error (e.g., show an error message to the user
    }
  };

  return (
    <div className="chat-interface">
      {isLoading ? (
        <div className="loading">Loading conversation...</div>
      ) : (
        <>
          <div className="conversation-header">
            <h2>{conversation ? conversation.title : 'New Conversation'}</h2>
            <p>Using model: {model}</p>
          </div>
          <MessageList messages={messages} />
          <InputArea onSendMessage={sendMessage} />
        </>
      )}
    </div>
  );
};

export default ChatInterface;