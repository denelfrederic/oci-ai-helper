
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassmorphicCard from '@/components/GlassmorphicCard';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">About OCI Assistant</h1>
              <p className="text-xl text-primary/80 text-center mb-12">
                Intelligent AI assistance powered by advanced language models.
              </p>
              
              <GlassmorphicCard className="mb-12">
                <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
                <p className="text-primary/80 mb-4">
                  OCI Assistant aims to provide intelligent, accurate information about OCI Fund investments and portfolio companies, making it easier for users to access and understand complex investment information.
                </p>
                <p className="text-primary/80">
                  Leveraging the latest in artificial intelligence technology, we create a seamless experience that integrates with WordPress websites and provides natural, human-like interactions.
                </p>
              </GlassmorphicCard>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <GlassmorphicCard>
                  <h2 className="text-2xl font-medium mb-4">WordPress Integration</h2>
                  <p className="text-primary/80">
                    Our assistant is designed to integrate smoothly with WordPress sites, allowing for easy installation and configuration. The plugin automatically inherits your site's styling and can be customized to match your brand.
                  </p>
                </GlassmorphicCard>
                
                <GlassmorphicCard>
                  <h2 className="text-2xl font-medium mb-4">OpenAI Technology</h2>
                  <p className="text-primary/80">
                    Powered by OpenAI's advanced language models, OCI Assistant can understand complex queries, provide nuanced responses, and learn from interactions to continuously improve its assistance.
                  </p>
                </GlassmorphicCard>
              </div>
              
              <GlassmorphicCard>
                <h2 className="text-2xl font-medium mb-4">Get Started</h2>
                <p className="text-primary/80 mb-4">
                  Integrating OCI Assistant with your WordPress site is simple. Our plugin can be installed directly from the WordPress plugin repository, or you can download it from our website.
                </p>
                <p className="text-primary/80 mb-4">
                  Once installed, you'll need to configure your OpenAI API key and customize the assistant to your needs. The entire process takes just a few minutes.
                </p>
                <div className="mt-6">
                  <a 
                    href="/chat" 
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Try the Demo
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
