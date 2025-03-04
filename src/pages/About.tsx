
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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">À propos de OneClick Invest</h1>
              <p className="text-xl text-[#0f172a]/80 text-center mb-12">
                Impliquez, financez, accélérez avec notre assistant IA intelligent.
              </p>
              
              <GlassmorphicCard className="mb-12">
                <h2 className="text-2xl font-medium mb-4">Notre Mission</h2>
                <p className="text-[#0f172a]/80 mb-4">
                  OneClick Invest a pour mission de fournir des informations intelligentes et précises sur les investissements et les entreprises de notre portefeuille, facilitant ainsi l'accès et la compréhension d'informations financières complexes.
                </p>
                <p className="text-[#0f172a]/80">
                  En exploitant les dernières technologies d'intelligence artificielle, nous créons une expérience transparente qui s'intègre aux sites WordPress et offre des interactions naturelles et humaines.
                </p>
              </GlassmorphicCard>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <GlassmorphicCard>
                  <h2 className="text-2xl font-medium mb-4">Intégration WordPress</h2>
                  <p className="text-[#0f172a]/80">
                    Notre assistant est conçu pour s'intégrer parfaitement aux sites WordPress, permettant une installation et une configuration faciles. Le plugin hérite automatiquement du style de votre site et peut être personnalisé pour correspondre à votre marque.
                  </p>
                </GlassmorphicCard>
                
                <GlassmorphicCard>
                  <h2 className="text-2xl font-medium mb-4">Technologie OpenAI</h2>
                  <p className="text-[#0f172a]/80">
                    Propulsé par les modèles de langage avancés d'OpenAI, OneClick Invest peut comprendre des requêtes complexes, fournir des réponses nuancées et apprendre des interactions pour améliorer continuellement son assistance.
                  </p>
                </GlassmorphicCard>
              </div>
              
              <GlassmorphicCard>
                <h2 className="text-2xl font-medium mb-4">Commencez</h2>
                <p className="text-[#0f172a]/80 mb-4">
                  L'intégration de OneClick Invest avec votre site WordPress est simple. Notre plugin peut être installé directement depuis le référentiel de plugins WordPress, ou vous pouvez le télécharger depuis notre site web.
                </p>
                <p className="text-[#0f172a]/80 mb-4">
                  Une fois installé, vous devrez configurer votre clé API OpenAI et personnaliser l'assistant selon vos besoins. L'ensemble du processus ne prend que quelques minutes.
                </p>
                <div className="mt-6">
                  <a 
                    href="/chat" 
                    className="inline-block px-6 py-3 bg-[#2563eb] text-white rounded-full hover:bg-[#2563eb]/90 transition-colors"
                  >
                    Essayer la démo
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
