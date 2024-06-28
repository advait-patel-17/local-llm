// src/types/index.ts

export interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export interface ChatModel {
    id: string;
    name: string;
}

export interface Conversation {
    id: string;
    title: string;
    messages: Message[];
    modelId: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

    // You can add more types and interfaces as needed for your application