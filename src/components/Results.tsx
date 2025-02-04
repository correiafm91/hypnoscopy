import React from 'react';

const Results = () => {
  const images = [
    "https://i.postimg.cc/wMYcXwGr/Screenshot-20250202-124818.jpg",
    "https://i.postimg.cc/sfLVKtjq/Screenshot-20250202-124834.jpg",
    "https://i.postimg.cc/tgD1g23b/Screenshot-20250202-124829.jpg"
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="heading-3d text-3xl md:text-5xl text-center mb-16 animate-fade-in-blur">
        AINDA NÃO ESTÁ CONVENCIDO? ÓTIMO, POR QUE QUERO TE MOSTRAR MAIS COISAS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="glass-card p-4 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Resultado ${index + 1}`}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
        Com esses 3 textos que criamos, fizemos mais de 400 mil reais para o bolso desses clientes
      </p>
    </section>
  );
};

export default Results;