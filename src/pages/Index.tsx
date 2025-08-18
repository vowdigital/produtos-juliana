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
      <button
        type="button"
        className="bg-brand-orange text-white px-6 py-2 rounded-lg font-body font-semibold shadow-float hover:scale-105 transition-smooth"
        onClick={() => {
          const el = document.getElementById('cta');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Quero o Script
      </button>
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
          <div className="space-y-4">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-orange hover:bg-white/90 font-body font-semibold text-lg px-8 py-4 shadow-float transition-smooth"
                onClick={() => {
                  const el = document.getElementById('cta');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quero o Script Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
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
            src="/lovable-uploads/1 (1).png" 
            alt="Desbloqueie a Conversão Previdenciária"
            className="max-w-[180px] w-full h-auto rounded-2xl shadow-float mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

// Beneficios (Problema)
const Beneficios = () => (
  <section id="beneficios" className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
            Você sabe tudo de benefício.<br />
            Mas na hora de responder o lead... <span className="font-heading-italic text-primary">trava?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💬",
              title: "Recebe um \"vou pensar\"",
              description: "E nunca mais vê o lead retornar?"
            },
            {
              icon: "😕", 
              title: "Sente que o cliente quer",
              description: "Mas não confia no atendimento?"
            },
            {
              icon: "📚",
              title: "Sabe Direito, mas...",
              description: "Não domina a linguagem da conversão?"
            }
          ].map((item, index) => (
            <Card key={index} className="p-8 text-center shadow-card hover-lift transition-smooth modern-accent">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-body font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="bg-primary/10 rounded-2xl p-8 color-marker color-marker-orange">
          <p className="text-xl font-body font-medium text-foreground">
            <strong>Então esse roteiro é pra você.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Solucao
const Solucao = () => (
  <section id="solucao" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
            <span className="font-heading-italic">Fechamento</span> previdenciário
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            O script profissional para advogados estratégicos.<br />
            Converte conversas em contratos – mesmo com leads frios, inseguros e cheios de dúvidas.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                "Início de conversa que gera conexão",
                "Frases-chave que posicionam com firmeza",  
                "Quebra de objeções mais comuns",
                "Simples, prático e testado em campo"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 color-marker color-marker-blue">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg font-body text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-brand-blue text-white p-6 rounded-xl">
              <p className="font-body font-medium text-lg">
                Porque saber Direito não basta.<br />
                <strong>Você precisa saber se comunicar</strong> com quem não entende nada de direito – e ainda está inseguro.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h3 className="font-body font-semibold text-xl mb-4 text-foreground">Desenvolvido para advogados que:</h3>
              <ul className="space-y-3">
                {[
                  "Recebem mensagens de leads e não sabem como continuar",
                  "Escutam \"vou pensar e te aviso\" e nunca mais têm retorno",
                  "Cansaram de explicar e não fechar",
                  "Sabem que têm conhecimento, mas não dominam a conversão"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Receber
const Receber = () => (
  <section id="receber" className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
            O que você vai <span className="font-heading-italic text-primary">receber</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Download className="h-8 w-8" />,
              title: "Script Pronto",
              description: "Para usar no WhatsApp, Instagram, ligação ou presencial"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Estratégias de Condução", 
              description: "Métodos testados para conduzir o atendimento com firmeza"
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "Quebra de Objeções",
              description: "\"Não confio\", \"tô sem dinheiro\", \"vou pensar\""
            },
            {
              icon: <Star className="h-8 w-8" />,
              title: "Gatilhos Prontos",
              description: "De urgência e autoridade prontos para aplicar"
            }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover-lift transition-smooth">
              <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-body font-semibold text-lg mb-3 text-foreground">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Bônus <span className="font-heading-italic text-primary">Inclusos</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="color-marker color-marker-orange space-y-3">
                <h4 className="font-body font-semibold text-lg text-foreground">📋 Checklist Profissional</h4>
                <p className="font-body text-muted-foreground">
                  Em versão digital e para impressão, para você seguir o passo a passo com foco e leveza.
                </p>
              </div>
              <div className="color-marker color-marker-blue space-y-3">
                <h4 className="font-body font-semibold text-lg text-foreground">🎥 Mini Aula Explicativa</h4>
                <p className="font-body text-muted-foreground">
                  Objetiva e clara, mostrando a lógica do roteiro e como aplicá-lo com firmeza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// CTA
const CTA = () => (
  <section id="cta" className="py-12 px-2 bg-brand-blue text-white flex justify-center items-center">
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
          Pare de perder bons contratos<br />
          por <span className="font-heading-italic">falta de método</span>
        </h2>
        <p className="text-base sm:text-lg font-body text-white/90">
          Aprenda a falar do jeito que convence – sem parecer vendedor.
        </p>
      </div>
      <div className="mt-6 bg-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-card backdrop-blur-sm flex flex-col items-center">
        <div className="text-center mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary">R$ 99,99</div>
          <p className="text-sm sm:text-base font-body text-white/80">Entrega IMEDIATA pelo Hotmart</p>
        </div>
        <img 
          src="/lovable-uploads/1.png" 
          alt="Logo" 
          className="mx-auto mb-3 h-8 sm:h-10 w-auto object-contain"
        />
        <Button size="lg" className="bg-gradient-cta text-white hover:scale-105 font-body font-bold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 shadow-float transition-smooth w-full max-w-full">
          GARANTIR MEU SCRIPT AGORA
          <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-xs sm:text-sm text-white/70 mt-4 w-full">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Sobre
const Sobre = () => (
  <section id="sobre" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
            Com <span className="font-heading-italic text-primary">Juliana Furquim</span>
          </h2>
          <p className="text-xl font-body text-muted-foreground">
            Do caos ao modelo de negócio
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Dominar o conteúdo jurídico <span className="font-heading-italic text-primary">não é suficiente</span>
              </h3>
              <div className="space-y-4 font-body text-foreground">
                <p>
                  Você pode ter profundo conhecimento em Direito Previdenciário, mas isso, sozinho, não garante contratos assinados.
                </p>
                <p className="font-semibold text-primary">
                  O que você vai aprender aqui ninguém te ensinou na faculdade.
                </p>
                <p>
                  No mundo real, se destaca quem se comunica com clareza, gera confiança no primeiro contato e conduz com estratégia.
                </p>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="color-marker color-marker-orange">
                <div className="text-2xl font-bold text-primary">17+</div>
                <div className="text-sm font-body text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="color-marker color-marker-blue">
                <div className="text-2xl font-bold text-primary">20k+</div>
                <div className="text-sm font-body text-muted-foreground">Clientes atendidos</div>
              </div>
              <div className="color-marker color-marker-orange">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm font-body text-muted-foreground">Avaliações 5★</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-section rounded-2xl p-8">
              <h4 className="font-body font-semibold text-lg text-foreground mb-4">
                Esse material foi criado para virar essa chave.
              </h4>
              <p className="font-body text-muted-foreground mb-6">
                Você terá acesso a um roteiro prático e direto, usado no dia a dia de um escritório que vive da advocacia, com atendimento humanizado, seguro e focado em resultado.
              </p>
              <p className="font-body font-medium text-foreground">
                A proposta é simples: te ajudar a conduzir o cliente com segurança desde o primeiro "oi" até a assinatura do contrato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gradient-hero text-white py-10 mt-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
  <img src="/lovable-uploads/1.png" alt="Logo" className="h-8" style={{width: 'auto'}} />
      </div>
      <div className="text-sm font-body text-white/80">© {new Date().getFullYear()} Todos os direitos reservados.</div>
      <div className="flex gap-4">
        <a href="https://instagram.com/julianafurquimadv" target="_blank" rel="noopener" className="hover:text-brand-orange transition-smooth">Instagram</a>
        <a href="mailto:contato@julianafurquim.com.br" className="hover:text-brand-orange transition-smooth">Contato</a>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <Hero />
      <Beneficios />
      <Solucao />
      <Receber />
      <CTA />
  <Sobre />
  <QuemEuSou />
      <Footer />
    </div>
  );
};

export default Index;