
// OpenAI service to handle API calls

const OPENAI_API_KEY = ''; // This should be provided by the user at runtime or stored securely

/**
 * Sends a query to OpenAI and returns the response
 * @param query The user's message
 * @returns The AI response
 */
export const searchQuery = async (query: string): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Vous êtes l\'assistant OCI, spécialisé dans l\'information sur les investissements et le fonds OCI.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer plus tard.";
  }
};

/**
 * Sets the OpenAI API key
 * @param apiKey The OpenAI API key
 */
export const setOpenAIApiKey = (apiKey: string): void => {
  (window as any).OPENAI_API_KEY = apiKey;
  Object.defineProperty(window, 'OPENAI_API_KEY', {
    value: apiKey,
    writable: true,
    configurable: false,
  });
};

/**
 * Gets the OpenAI API key
 * @returns The OpenAI API key
 */
export const getOpenAIApiKey = (): string => {
  return (window as any).OPENAI_API_KEY || '';
};
