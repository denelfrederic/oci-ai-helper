
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from './GlassmorphicCard';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  
  const features = [
    {
      title: "AI-Powered Assistance",
      description: "Get intelligent answers and insights powered by advanced language models."
    },
    {
      title: "WordPress Integration",
      description: "Seamlessly integrate with your WordPress site for a unified experience."
    },
    {
      title: "Investment Insights",
      description: "Access the latest information about OCI investments and portfolio."
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-accent/50 to-transparent -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16 space-y-6">
          <div className="inline-block mb-3 px-4 py-1.5 bg-accent rounded-full">
            <span className="text-sm font-medium text-primary/80">Powered by OpenAI Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            <AnimatedText 
              text="Your Intelligent OCI Assistant" 
              className="text-gradient"
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          {showSubtitle && (
            <p className="text-xl text-primary/80 max-w-2xl mx-auto animate-fade-up">
              Experience the future of AI-powered assistance with seamless WordPress integration.
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in [animation-delay:800ms]">
            <Link 
              to="/chat"
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Start Chatting
            </Link>
            <Link 
              to="/about"
              className="px-8 py-3 bg-transparent border border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in [animation-delay:1000ms]">
          {features.map((feature, index) => (
            <GlassmorphicCard 
              key={index}
              className={`p-6 text-left transition-all duration-500 ${
                selectedFeature === index 
                  ? 'scale-105 shadow-lg border-primary/20' 
                  : 'scale-100 opacity-80'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary/70">{feature.description}</p>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
