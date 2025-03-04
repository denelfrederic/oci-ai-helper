
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Chat with OCI Assistant</h1>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Ask questions about OCI Fund, investments, or anything else you'd like to know.
            </p>
          </div>
          
          <Chat />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatPage;
