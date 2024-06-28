import { handleGPT4, handleGPT35Turbo, handleClaude, handleOllama } from './modelSpecificHandlers';

export async function handleModelRequest(model: string, prompt: string): Promise<string> {
  switch (model) {
    case 'gpt-4':
      return await handleGPT4(prompt);
    case 'gpt-3.5-turbo':
      return await handleGPT35Turbo(prompt);
    case 'claude':
      return await handleClaude(prompt);
    case 'ollama':
      return await handleOllama(prompt);
    default:
      throw new Error(`Unsupported model: ${model}`);
  }
}