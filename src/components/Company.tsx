
import React from 'react';

const Company = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto glass-card p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 mx-auto md:mx-0">
            <img
              src="https://i.postimg.cc/Dz2xSCGy/Minimalist-Hypnos-copywriting-logo-geometric-white-shape-on-black-background-High-contrast-stron.png"
              alt="Hypnos Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="heading-3d text-3xl md:text-4xl text-left mb-8">
              HYPNOS – A Empresa que Transforma Palavras em Dinheiro
            </h2>
            <div className="space-y-6 text-lg text-white/90">
              <p className="text-left">
                Toda compra começa na mente. Antes do clique, do pedido ou do pagamento, existe um pensamento, uma emoção, um impulso. A Hypnos domina essa arte.
              </p>
              <p className="text-left">
                Não escrevemos textos bonitos. Criamos mensagens hipnóticas, que capturam atenção, quebram objeções e conduzem o público até a única conclusão possível: comprar de você.
              </p>
              <p className="font-semibold text-white text-left">
                Nosso diferencial? Não vendemos textos soltos. Entregamos um sistema completo de persuasão.
              </p>
              <p className="text-left">
                No nosso pacote estratégico, você recebe landing pages que convertem, anúncios que vendem, VSLs que prendem atenção, e-mails que engajam e até a bio perfeita para magnetizar seguidores certos. Mas não paramos por aí. Ensinamos você a usar cada peça no momento certo, garantindo que seu negócio continue escalando mesmo depois da entrega.
              </p>
              <p className="text-left">
                E enquanto você aplica, nós monitoramos. Ajustamos, otimizamos e refinamos até sua copy atingir o nível máximo de conversão.
              </p>
              <p className="font-semibold text-white text-left">
                Se sua comunicação não está imprimindo dinheiro, ela está te custando caro. A Hypnos resolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
