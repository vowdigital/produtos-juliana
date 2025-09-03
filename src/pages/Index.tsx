// Quem eu sou
const QuemEuSou = () => (
  <section id="quem-eu-sou" className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 text-brand-blue">
        Essa sou eu
      </h2>
      <div className="bg-brand-blue/5 rounded-2xl p-6 sm:p-10 shadow-card flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src="/lovable-uploads/essa.jpg" alt="Juliana Furquim" className="w-full max-w-xl h-56 md:h-72 object-cover object-center rounded-2xl shadow-card border-4 border-white" style={{aspectRatio: '16/7'}} />
        </div>
        <div className="flex-1">
          <div className="text-center md:text-left mb-4">
            <span className="inline-block bg-brand-orange/10 text-brand-orange font-bold rounded px-3 py-1 text-xs sm:text-sm mr-2 mb-2">MENTORA DE ADVOGADOS</span>
            <span className="inline-block bg-brand-orange/10 text-brand-orange font-bold rounded px-3 py-1 text-xs sm:text-sm mb-2">ADVOGADA PREVIDENCIARISTA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-blue md:text-left text-center mb-2">Juliana Furquim <span className="text-base font-normal text-brand-blue/70">& Empreendedora</span></h3>
          <ul className="text-left space-y-3 mb-4">
            <li><span className="font-semibold text-brand-blue">Advogada previdenciarista, mentora de advogados e empreendedora.</span></li>
            <li><span className="font-semibold text-brand-blue">Especialista em atendimento humanizado</span> e em transformar vidas através do direito.</li>
            <li><span className="font-semibold text-brand-blue">Família e propósito</span>: Casada, mãe de três filhos e apaixonada por ajudar pessoas a destravarem suas carreiras.</li>
          </ul>
          <div className="text-brand-blue/90 text-base sm:text-lg md:text-left text-center mb-6">
            Acredito que juntos podemos ir mais longe!
          </div>
          <div className="flex md:justify-start justify-center">
            <button
              type="button"
              className="inline-block bg-brand-orange hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-base sm:text-lg"
              onClick={() => {
                const el = document.getElementById('cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Garantir meu script agora
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Award, ArrowRight, Play, Download } from "lucide-react";

// Header
const Header = () => (
  <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-brand transition-smooth">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/2 (1).png" 
          alt="Logo" 
          className="h-8 sm:h-12 w-auto max-h-8 sm:max-h-12 object-contain shadow-card"
        />
      </div>
     
    </div>
  </header>
);

// Hero
const Hero = () => (
  <section id="hero" className="relative bg-gradient-hero text-white overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative container mx-auto px-4 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4 ml-20">
            <Badge className="bg-white/20 text-white border-white/30 font-body font-medium">
              Do caos ao modelo de negócio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="font-heading">Desbloqueie a</span><br />
              <span className="font-heading-italic">Conversão</span><br />
              <span className="font-heading">Previdenciária</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-body">
              Um script que mostra que o problema não é o cliente... 
              <strong> é como você fala com ele.</strong>
            </p>
            <p className="text-lg text-white/80 font-body">
              Passo a passo testado por quem vive disso.
            </p>
          </div>
            <div className="flex flex-col sm:flex-row gap-4 ml-20">
              <Button
           
  size="lg"
  className="bg-white text-brand-orange hover:bg-white/90 font-body font-semibold text-lg px-8 py-4 shadow-float transition-smooth"
  onClick={() => {
    window.location.href = 'https://pay.hotmart.com/I101206209S';
  }}
>
  Quero o Script Agora
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
            </div>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2 ml-20">
              <CheckCircle className="h-4 w-4" />
              <span>Entrega IMEDIATA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>R$ 99,99</span>
            </div>
          </div>
        </div>
       <div className="relative">
  <img 
    src="/lovable-uploads/jl.JPG" 
    alt="Desbloqueie a Conversão Previdenciária"
    className="w-[500px] h-[450px] object-cover rounded-3xl shadow-float "
  />
</div>

      </div>
    </div>
  </section>
);





// Banner 1 - Script de Conversão
const BannerScript = () => (
  <section className="w-full py-20 bg-brand-blue text-white flex justify-center">
    <div className="container max-w-5xl flex flex-col md:flex-row items-center gap-8 px-4">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-heading">Quer transformar sua abordagem?</h2>
        <p className="text-lg mb-4 font-body text-white/90">Descubra o <span className="font-semibold text-brand-orange">Script de Conversão Previdenciária</span> e aumente suas vendas com um método comprovado.</p>
        <a
          href="https://pay.hotmart.com/I101206209S"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-orange hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-base sm:text-lg"
        >
          Quero garantir meu script
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 bg-white rounded-3xl shadow-lg flex items-center justify-center border-2 border-brand-orange/30 p-0 overflow-hidden">
          <img 
            src="/lovable-uploads/2.png" 
            alt="Kit de Petições" 
            className="max-w-[85%] max-h-[85%] object-contain drop-shadow-md rounded-2xl transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>
    </div>
  </section>
);


// Banner 2 - Kit de Petições Previdenciárias (mesmo estilo do Hero, fundo branco)
const BannerPetic = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="container mx-auto px-4 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative w-[500px] h-[450px] bg-white rounded-3xl shadow-float flex items-center justify-center overflow-hidden border-2 border-brand-orange/30">
             <img 
    src="/lovable-uploads/essa.jpg" 
    alt="Desbloqueie a Conversão Previdenciária"
    className="w-[500px] h-[450px] object-cover rounded-3xl shadow-float "
  />
          </div>
        </div>
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4 ml-20">
            <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 font-body font-medium">
              Material Exclusivo
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight font-heading text-brand-orange">
              Kit de Petições Previdenciárias
            </h2>
            <p className="text-xl lg:text-2xl text-brand-blue font-body">
              Economize tempo e entregue excelência com petições atualizadas, completas e fáceis de adaptar ao seu cliente.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 ml-20">
            <a
              href="https://pay.hotmart.com/A101646771M?checkoutMode=10&bid=1756840817023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-orange hover:bg-orange-500 text-white font-bold py-4 px-12 rounded-full shadow-float transition-all duration-200 text-lg lg:text-xl"
            >
              Adquirir por R$ 99,90
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <Hero />
      <BannerPetic />
    </div>
  );
};

export default Index;