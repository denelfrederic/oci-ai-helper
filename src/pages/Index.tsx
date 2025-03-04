
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Chat from '@/components/Chat';
import Footer from '@/components/Footer';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import { MessageSquare, Code, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24">
          <Hero />
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl font-display font-bold mb-4">Intelligent Assistance</h2>
              <p className="text-primary/70 max-w-2xl mx-auto">
                Our AI-powered assistant provides accurate information and helpful insights about OCI Fund and more.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="p-1 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <GlassmorphicCard className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Natural Conversations</h3>
                    <p className="text-primary/70">
                      Engage in fluid, human-like conversations with our advanced language model.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>
              
              <div className="p-1 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <GlassmorphicCard className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">WordPress Integration</h3>
                    <p className="text-primary/70">
                      Seamlessly integrate with your WordPress site with our simple plugin.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>
              
              <div className="p-1 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <GlassmorphicCard className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">OpenAI Powered</h3>
                    <p className="text-primary/70">
                      Leveraging the latest in AI technology for intelligent, accurate responses.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chat Demo Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl font-display font-bold mb-4">Experience It Now</h2>
              <p className="text-primary/70 max-w-2xl mx-auto">
                Try out our assistant right now with our interactive demo.
              </p>
            </div>
            
            <div className="reveal">
              <Chat />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
