
// OpenAI service to handle API calls

const OPENAI_API_KEY = ''; // This should be provided by the user at runtime or stored securely

/**
 * Sends a query to OpenAI and returns the response
 * @param query The user's message
 * @returns The AI response
 */
export const searchQuery = async (query: string): Promise<string> => {
  try {
    if (!getOpenAIApiKey()) {
      throw new Error('Aucune clé API OpenAI n\'a été configurée');
    }

    console.log('Envoi de la requête à OpenAI...');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getOpenAIApiKey()}`
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
      const errorData = await response.json().catch(() => ({ error: { message: 'Impossible de parser la réponse d\'erreur' } }));
      console.error('Erreur API OpenAI complète:', JSON.stringify(errorData, null, 2));
      
      let errorMessage = `Erreur API OpenAI (${response.status}): `;
      
      if (errorData.error && errorData.error.message) {
        errorMessage += errorData.error.message;
      } else if (errorData.message) {
        errorMessage += errorData.message;
      } else {
        errorMessage += 'Détails non disponibles';
      }
      
      if (response.status === 401) {
        errorMessage = 'Erreur d\'authentification: La clé API OpenAI est invalide ou expirée';
      } else if (response.status === 429) {
        errorMessage = 'Limite de requêtes atteinte: Veuillez réessayer plus tard';
      } else if (response.status === 500) {
        errorMessage = 'Erreur serveur OpenAI: Le service rencontre actuellement des problèmes';
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    console.error('Erreur complète lors de l\'appel à OpenAI:', error);
    return `Désolé, je n'ai pas pu traiter votre demande: ${errorMessage}`;
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
