import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Results from '../components/Results';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Company from '../components/Company';
import CTAButton from '../components/CTAButton';
import FormModal from '../components/FormModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement('script');
      script.src = 'https://embed.respondi.app/embed.js';
      script.async = true;
      script.id = 'respondi_src';
      document.body.appendChild(script);

      return () => {
        const existingScript = document.getElementById('respondi_src');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-dark">
      <Hero />
      <Results />
      <Company />
      <Process />
      <Pricing />
      <div className="flex justify-center py-20">
        <CTAButton onClick={openModal}>Fechar negócio</CTAButton>
      </div>
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;