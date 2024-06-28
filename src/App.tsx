import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';
import { ChatModel, Conversation } from './types';
import './App.css';

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  // Mock data for models and conversations
  const models: ChatModel[] = [
    { id: 'gpt-4', name: 'GPT-4' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
    { id: 'claude', name: 'Claude' },
    { id: 'ollama', name: 'Ollama' },
  ];

  const conversations: Conversation[] = [
    { id: '1', title: 'Vacation Planning', messages: [], modelId: 'gpt-4' },
    { id: '2', title: 'Code Review', messages: [], modelId: 'gpt-3.5-turbo' },
    { id: '3', title: 'Book Recommendations', messages: [], modelId: 'claude' },
  ];

  return (
    <div className="app-container">
      <Sidebar
        selectedModel={selectedModel}
        onModelSelect={setSelectedModel}
        models={models}
        conversations={conversations}
        onConversationSelect={setSelectedConversation}
      />
      <main className="main-content">
        <ChatInterface model={selectedModel} conversationId={selectedConversation} />
      </main>
    </div>
  );
};

export default App;