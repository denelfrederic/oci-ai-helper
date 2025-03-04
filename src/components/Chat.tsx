
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';
import AnimatedText from './AnimatedText';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  animationComplete?: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m the OCI Assistant. How can I help you today?',
      animationComplete: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage, animationComplete: true }]);
    
    // Simulate API call
    setIsLoading(true);
    
    // Simulate delay - this would be replaced with actual API call to OpenAI or similar
    setTimeout(() => {
      const responses = [
        "I understand you're looking for information about OCI investments. Can you specify what details you're interested in?",
        "OCI Fund invests in various technological innovations. Would you like to know about specific portfolio companies?",
        "We're focused on supporting breakthrough technologies. Is there a particular sector you're interested in?",
        "I can provide information on OCI's investment thesis and approach. Would that be helpful?",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: randomResponse,
        animationComplete: false
      }]);
      
      setIsLoading(false);
    }, 1500);
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
          placeholder="Type your message..."
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
    </div>
  );
};

export default Chat;
