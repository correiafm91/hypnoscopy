import React from 'react';

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="heading-3d text-3xl md:text-5xl text-center mb-16">
        O QUE VAMOS COBRAR DE VOCÊ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-card p-8 flex flex-col items-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Pagamento Único</h3>
          <span className="text-primary text-5xl font-bold mb-6">R$ 2.250</span>
          <p className="text-white/80 text-center mb-8">
            Pagamento único para desenvolvimento completo dos textos
          </p>
        </div>
        <div className="glass-card p-8 flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
          <span className="text-primary text-5xl font-bold mb-6">R$ 1.125</span>
          <p className="text-white/80 text-center mb-8">
            Inclui acompanhamento e 5 consultorias mensais
          </p>
          <p className="text-white/60 text-sm">Não obrigatório</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;