
import React from 'react';

const Process = () => {
  const steps = [
    "A gente faz um estudo do seu produto ou serviço",
    "Pesquisa de mercado",
    "Rascunhos de textos",
    "Finalização dos textos e revisão",
    "Aprovação do cliente",
    "Entrega final do documento com os textos",
    "Treinamentos"
  ];

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-dark-lighter to-dark">
        <h2 className="heading-3d text-3xl md:text-5xl text-center mb-16">
          DA PESQUISA AOS LUCROS! COMO FUNCIONA A NOSSA ENTREGA
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-primary/20 -translate-x-1/2" />
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-1/2 pr-12 text-right">
                {index % 2 === 0 && (
                  <div className="glass-card p-6">
                    <span className="text-primary font-bold text-xl mb-2 block">
                      {index + 1}
                    </span>
                    <p className="text-white/90">{step}</p>
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <div className="w-1/2 pl-12">
                {index % 2 === 1 && (
                  <div className="glass-card p-6">
                    <span className="text-primary font-bold text-xl mb-2 block">
                      {index + 1}
                    </span>
                    <p className="text-white/90">{step}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <h2 className="heading-3d text-3xl md:text-4xl text-center mb-8">
            Criatividade e Empatia Humanas, Sempre à Frente
          </h2>
          <div className="space-y-6 text-lg text-white/90">
            <p className="text-center">
              Acreditamos que a mente humana é insubstituível quando se trata de entender emoções, criar conexões e transformar ideias em resultados impactantes. A verdadeira inovação vem da capacidade única do ser humano de sentir, pensar estrategicamente e gerar soluções criativas que nenhuma máquina pode replicar.
            </p>
            <p className="text-center">
              Cada projeto é desenvolvido com a sensibilidade e a visão que só um ser humano pode oferecer. Nosso trabalho é focado em criar estratégias de copywriting que não apenas atendem às necessidades do cliente, mas também falam diretamente ao coração do público, com autenticidade e profundidade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
