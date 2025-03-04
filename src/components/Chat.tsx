
import React, { useState, useRef, useEffect } from 'react';
import { Send, Key } from 'lucide-react';
import { toast } from 'sonner';
import GlassmorphicCard from './GlassmorphicCard';
import AnimatedText from './AnimatedText';
import { searchQuery, setOpenAIApiKey, getOpenAIApiKey } from '@/services/openaiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  animationComplete?: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Bonjour! Je suis l\'assistant OCI. Comment puis-je vous aider aujourd\'hui?',
      animationComplete: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showApiKeyInput, setShowApiKeyInput] = useState(!getOpenAIApiKey());
  const [apiKey, setApiKey] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Check if API key is set
    if (!getOpenAIApiKey()) {
      toast.error('Veuillez d\'abord configurer votre clé API OpenAI');
      setShowApiKeyInput(true);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage, animationComplete: true }]);
    
    // Call OpenAI
    setIsLoading(true);
    
    try {
      const response = await searchQuery(userMessage);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        animationComplete: false
      }]);
    } catch (error) {
      console.error('Error getting response:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      toast.error('Veuillez entrer une clé API valide');
      return;
    }

    setOpenAIApiKey(apiKey.trim());
    setShowApiKeyInput(false);
    toast.success('Clé API configurée avec succès');
  };

  const handleAnimationComplete = (index: number) => {
    setMessages(prev => 
      prev.map((msg, i) => 
        i === index ? { ...msg, animationComplete: true } : msg
      )
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[70vh] md:h-[80vh] flex flex-col">
      {showApiKeyInput ? (
        <GlassmorphicCard className="mb-4 p-6">
          <h3 className="text-xl font-medium mb-4">Configuration de la clé API OpenAI</h3>
          <p className="mb-4 text-primary/70">Pour utiliser l'assistant, veuillez entrer votre clé API OpenAI:</p>
          <form onSubmit={handleApiKeySubmit} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12"
              />
              <Key className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg py-2 hover:bg-primary/90 transition-colors"
            >
              Sauvegarder
            </button>
          </form>
        </GlassmorphicCard>
      ) : (
        <>
          <GlassmorphicCard className="flex-1 flex flex-col overflow-hidden mb-4">
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 ${
                      message.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-accent text-primary rounded-tl-none'
                    }`}
                  >
                    {message.role === 'assistant' && !message.animationComplete ? (
                      <AnimatedText 
                        text={message.content}
                        speed={25}
                        onComplete={() => handleAnimationComplete(index)}
                      />
                    ) : (
                      <p>{message.content}</p>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-accent text-primary rounded-2xl rounded-tl-none p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </GlassmorphicCard>
          
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tapez votre message..."
              className="chat-input pr-12"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-50"
              disabled={!input.trim() || isLoading}
            >
              <Send size={18} />
            </button>
          </form>
        </>
      )}
      
      {!showApiKeyInput && (
        <div className="mt-2 text-right">
          <button 
            onClick={() => setShowApiKeyInput(true)} 
            className="text-xs text-primary/60 hover:text-primary/90"
          >
            Modifier la clé API
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
