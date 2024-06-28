import React from 'react';
import { ChatModel, Conversation } from '../types';

interface SidebarProps {
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
  models: ChatModel[];
  conversations: Conversation[];
  onConversationSelect: (conversationId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedModel,
  onModelSelect,
  models,
  conversations,
  onConversationSelect
}) => {
  return (
    <aside className="sidebar">
      <h2>Chat Model</h2>
      <select
        value={selectedModel}
        onChange={(e) => onModelSelect(e.target.value)}
        className="model-select"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      <h2>Conversations</h2>
      <ul className="conversation-list">
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <button onClick={() => onConversationSelect(conversation.id)}>
              {conversation.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;