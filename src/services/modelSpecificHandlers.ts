import axios from 'axios';

const openai_apikey = process.env.REACT_APP_OPENAI_API_KEY;
const claude_apikey = process.env.REACT_APP_ANTHROPIC_API_KEY;

export async function handleGPT4(prompt: string): Promise<string> {
  // Implement GPT-4 API call
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    }, {
      headers: {
        'Authorization': `Bearer ${openai_apikey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling GPT-4 API:', error);
    throw error;
  }
}

export async function handleGPT35Turbo(prompt: string): Promise<string> {
  // Implement GPT-3.5 Turbo API call (similar to GPT-4 but with different model)
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling GPT-3.5 Turbo API:', error);
    throw error;
  }
}

export async function handleClaude(prompt: string): Promise<string> {
  // Implement Claude API call
  // Note: This is a placeholder. You'll need to replace with actual Claude API endpoint and authentication
  try {
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-2',
      messages: [{ role: 'user', content: prompt }]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.content[0].text;
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw error;
  }
}

export async function handleOllama(prompt: string): Promise<string> {
  // Implement Ollama API call
  // Note: This assumes Ollama is running locally. Adjust the URL if needed.
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama2',  // or whichever model you're using with Ollama
      prompt: prompt
    });
    return response.data.response;
  } catch (error) {
    console.error('Error calling Ollama API:', error);
    throw error;
  }
}