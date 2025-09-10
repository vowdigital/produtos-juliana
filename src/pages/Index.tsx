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
  <section className="relative bg-gradient-hero text-white overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative container mx-auto px-4 py-12 sm:py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto + Botão */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-6 lg:ml-20 text-center lg:text-left">
            <Badge className="bg-brand-orange/10 text-brand-white border-brand-white/30 font-body font-medium mx-auto lg:mx-0">
              Material Exclusivo
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight font-heading text-brand-white">
              Transforme sua equipe em alta performance com o DISC
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl text-brand-white font-body">
              Descubra como identificar perfis, alinhar talentos e liderar com estratégia
            </p>
            <a
              href="https://pay.hotmart.com/K101808043K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-orange hover:bg-white/90 font-body font-semibold text-lg px-8 py-4 rounded-full shadow-float transition-smooth mt-4"
            >
              Quero minha equipe de alta performance <ArrowRight className="ml-2 h-5 w-5 inline" />
            </a>
            <div className="flex items-center gap-6 text-sm text-white/80 justify-center lg:justify-start mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Entrega IMEDIATA</span>
              </div>
            </div>
          </div>
        </div>
        {/* Imagem */}
        <div className="flex justify-center order-2 lg:order-1 mb-8 lg:mb-0">
          <div className="relative w-full max-w-[500px] h-[220px] sm:h-[300px] lg:h-[450px] rounded-3xl shadow-float flex items-center justify-center overflow-hidden border-2 border-white/30 bg-white/10">
            <img 
              src="/lovable-uploads/julianape.jpg" 
              alt="Transforme sua equipe em alta performance com o DISC"
              className="w-full h-full object-cover rounded-3xl shadow-float"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);


// Banner 2 - Kit de Petições Previdenciárias (mesmo estilo do Hero, fundo branco)
const BannerPetic = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="container mx-auto px-4 py-12 sm:py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Imagem */}
        <div className="flex justify-center order-2 lg:order-1 mb-8 lg:mb-0">
          <div className="relative w-full max-w-[500px] h-[220px] sm:h-[300px] lg:h-[450px] bg-white rounded-3xl shadow-float flex items-center justify-center overflow-hidden border-2 border-brand-orange/30">
            <img 
              src="/lovable-uploads/essa.jpg" 
              alt="Kit de Petições Previdenciárias"
              className="w-full h-full object-cover rounded-3xl shadow-float"
            />
          </div>
        </div>

        {/* Texto + Botão */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-6 lg:ml-20 text-center lg:text-left">
            <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 font-body font-medium mx-auto lg:mx-0">
              Material Exclusivo
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight font-heading text-brand-orange">
              Kit de Petições Previdenciárias
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl text-brand-blue font-body">
              Economize tempo e entregue excelência com petições atualizadas, completas e fáceis de adaptar ao seu cliente.
            </p>

            {/* Botão agora segue alinhamento do texto */}
            <a
              href="https://pay.hotmart.com/A101646771M?checkoutMode=10&bid=1756840817023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-orange hover:bg-orange-500 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full shadow-float transition-all duration-200 text-base sm:text-lg lg:text-xl"
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
      <BannerScript/>
    </div>
  );
};

export default Index;