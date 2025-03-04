
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-display font-medium text-primary mb-4 block">
              OCI Assistant
            </Link>
            <p className="text-primary/70 max-w-md mt-2">
              An AI-powered assistant with seamless WordPress integration, designed to provide intelligent responses to your inquiries.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/chat" className="text-primary/70 hover:text-primary transition-colors">Chat</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary/70 hover:text-primary transition-colors">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-primary mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.oci.fund" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
                  OCI Fund
                </a>
              </li>
              <li>
                <a href="#" className="text-primary/70 hover:text-primary transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-primary/70 hover:text-primary transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} OCI Assistant. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
