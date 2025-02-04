import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h1 className="heading-3d text-4xl md:text-6xl text-center mb-12 animate-fade-in-blur">
        O SEGREDO QUE VOCÊ PROCURA ESTÁ AQUI!
      </h1>
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 animate-fade-in">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/go0aOyHOvjI"
          title="Apresentação"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default Hero;