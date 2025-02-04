import React from 'react';

const Company = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto glass-card p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img
              src="/lovable-uploads/0eeb7ad2-bf96-48fb-87ba-fcf3621eb85f.png"
              alt="Hypnos Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="heading-3d text-3xl md:text-4xl text-center md:text-left">
            HYPNOS – A Copywriting que Transforma Palavras em Dinheiro
          </h2>
        </div>
        
        <div className="space-y-6 text-lg text-white/90">
          <p>
            Toda compra começa na mente. Antes do clique, do pedido ou do pagamento, existe um pensamento, uma emoção, um impulso. A Hypnos domina essa arte.
          </p>
          <p>
            Não escrevemos textos bonitos. Criamos mensagens hipnóticas, que capturam atenção, quebram objeções e conduzem o público até a única conclusão possível: comprar de você.
          </p>
          <p className="font-semibold text-white">
            Nosso diferencial? Não vendemos textos soltos. Entregamos um sistema completo de persuasão.
          </p>
          <p>
            No nosso pacote estratégico, você recebe landing pages que convertem, anúncios que vendem, VSLs que prendem atenção, e-mails que engajam e até a bio perfeita para magnetizar seguidores certos. Mas não paramos por aí. Ensinamos você a usar cada peça no momento certo, garantindo que seu negócio continue escalando mesmo depois da entrega.
          </p>
          <p>
            E enquanto você aplica, nós monitoramos. Ajustamos, otimizamos e refinamos até sua copy atingir o nível máximo de conversão.
          </p>
          <p className="font-semibold text-white">
            Se sua comunicação não está imprimindo dinheiro, ela está te custando caro. A Hypnos resolve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company;