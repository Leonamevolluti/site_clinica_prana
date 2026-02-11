
import React from 'react';
import { CLINICA_PRANA_DATA } from './constants';
import logoPrana from './horizontal-verde.png';
import drLeonam from './dr-leonam.jpg';

const Logo: React.FC<{ className?: string; color?: string; showText?: boolean; variant?: 'wall' | 'standard' }> = ({ 
  className = "w-10", 
  color = "#B19461", 
  showText = false,
  variant = 'standard'
}) => (
  <div className={`flex flex-col items-center justify-center ${className} ${variant !== 'wall' ? 'animate-soft-pulse' : ''}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full aspect-square drop-shadow-sm">
      {/* Lótus Central */}
      <path 
        d="M50 15C50 15 60 38 60 56C60 74 50 86 50 86C50 86 40 74 40 56C40 38 50 15 50 15Z" 
        stroke={color} 
        strokeWidth={variant === 'wall' ? "2" : "3.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pétala Esquerda */}
      <path 
        d="M42 84C42 84 22 76 17 54C12 32 32 22 32 22C32 22 34 45 42 84Z" 
        stroke={color} 
        strokeWidth={variant === 'wall' ? "2" : "3.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pétala Direita */}
      <path 
        d="M58 84C58 84 78 76 83 54C88 32 68 22 68 22C68 22 66 45 58 84Z" 
        stroke={color} 
        strokeWidth={variant === 'wall' ? "2" : "3.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {showText && (
      <span 
        className={`font-sans font-light tracking-[0.6em] uppercase pl-[0.6em] whitespace-nowrap ${variant === 'wall' ? 'mt-6 text-xl lg:text-3xl' : 'mt-3 text-[10px]'}`} 
        style={{ color, textShadow: variant === 'wall' ? '0 2px 8px rgba(0,0,0,0.2)' : 'none' }}
      >
        Prana
      </span>
    )}
  </div>
);

const App: React.FC = () => {
  const data = CLINICA_PRANA_DATA;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${data.contact.whatsapp}`;

  return (
    <div className="min-h-screen bg-white selection:bg-[#B19461] selection:text-white overflow-x-hidden">
      {/* Navegação */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={logoPrana} 
              alt="Prana - Medicina por Imagem e Especialidades Médicas" 
              className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            <button onClick={() => scrollToSection('servicos')} className="hover:text-[#628E86] transition-colors">Exames</button>
            <button onClick={() => scrollToSection('especialidades')} className="hover:text-[#628E86] transition-colors">Especialidades</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[#628E86] transition-colors">A Clínica</button>
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B19461] text-white px-8 py-3 rounded-full hover:bg-[#a08556] transition-all shadow-lg flex items-center gap-2 group"
            >
              <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
              Agendar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: Foco na Recepção Real */}
      <section className="relative min-h-screen flex items-center bg-white pt-20 lg:pt-0">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Conteúdo Esquerdo: Texto */}
          <div className="lg:col-span-5 space-y-10 z-20 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#628E86]/10 text-[#628E86] text-[11px] font-black uppercase tracking-[0.3em]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#628E86] animate-pulse"></span>
              Excelência em Ivoti
            </div>
            <h1 className="text-6xl lg:text-[90px] font-serif font-bold text-[#2D3436] leading-[1] tracking-tighter">
              Sua saúde em <br/><span className="text-[#628E86]">boas mãos.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {data.tagline} Conheça nossa recepção preparada para acolher você com conforto e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-[#628E86] text-white rounded-[32px] font-bold text-xl hover:bg-[#537972] transition-all shadow-2xl shadow-teal-900/20 flex items-center justify-center gap-4 active:scale-95 group"
              >
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                Falar com Recepção
              </a>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="px-12 py-6 bg-white border-2 border-gray-100 text-gray-500 rounded-[32px] font-bold text-xl hover:border-[#B19461] hover:text-[#B19461] transition-all"
              >
                Ver Exames
              </button>
            </div>
          </div>

          {/* Conteúdo Direito: Visual da Recepção Real */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-10">
            {/* Quadro da Recepção */}
            <div className="relative w-full aspect-[4/3] rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-[0_80px_150px_-40px_rgba(0,0,0,0.4)] border-[12px] lg:border-[20px] border-white bg-[#F3F4F6] group">
              
              {/* Composição da Parede e Logo baseada na Foto Enviada */}
              <div className="absolute inset-0 bg-[#628E86] transition-transform duration-[8s] group-hover:scale-105">
                {/* Textura sutil de parede */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
                
                {/* Luz de Teto (Spotlight) focada no Logo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/20 via-transparent to-black/30"></div>
                
                {/* O Logotipo na Parede - Ajustado para centralizar com o texto */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform lg:scale-125 -translate-y-6">
                     <Logo variant="wall" color="#B19461" showText={true} className="w-56 lg:w-72" />
                  </div>
                </div>
              </div>

              {/* Simulação do Balcão de Madeira no canto inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#D2B48C] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border-t border-[#B19461]/30 flex items-center px-12 overflow-hidden">
                <div className="w-full h-1 bg-white/10 mt-auto"></div>
                {/* Refletindo a cor do balcão da foto */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>

              {/* Detalhe da Localização */}
              <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                Ivoti, RS
              </div>
            </div>

            {/* Crachá flutuante de Horário */}
            <div className="absolute -bottom-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 bg-white p-6 lg:p-8 rounded-[40px] shadow-2xl border border-gray-50 flex items-center gap-6 z-30 min-w-[280px]">
              <div className="w-14 h-14 rounded-full bg-[#B19461]/10 flex items-center justify-center text-[#B19461]">
                <i className="fa-solid fa-clock text-2xl"></i>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estamos Abertos</p>
                <p className="font-bold text-gray-800 text-sm">Sem fechar ao meio-dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-32 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20 space-y-4">
            <h2 className="text-[#B19461] font-bold uppercase tracking-[0.4em] text-sm">Nossos Serviços</h2>
            <h3 className="text-5xl font-serif font-bold text-[#2D3436]">Exames e Diagnósticos</h3>
            <div className="w-20 h-1.5 bg-[#628E86] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.mainServices.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[50px] shadow-xl shadow-gray-200/50 hover:translate-y-[-12px] transition-all duration-500 group border border-gray-50">
                <div className="w-20 h-20 bg-[#D9E4D1] rounded-[24px] flex items-center justify-center mb-8 group-hover:bg-[#628E86] transition-colors shadow-inner">
                  <i className={`fa-solid ${service.icon} text-3xl text-[#628E86] group-hover:text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-[#2D3436] mb-4">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section id="especialidades" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="space-y-4">
              <h2 className="text-[#B19461] font-bold uppercase tracking-[0.4em] text-sm text-left">Especialidades</h2>
              <h3 className="text-5xl font-serif font-bold text-[#2D3436]">Corpo Clínico Qualificado</h3>
            </div>
            <p className="text-gray-500 max-w-md text-lg font-light leading-relaxed border-l-2 border-[#D9E4D1] pl-6">
              Equipe multidisciplinar com foco em atendimento humanizado e soluções rápidas para sua saúde. Clique para agendar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.specialties.map((spec, idx) => (
              <a 
                key={idx} 
                href={`${whatsappLink}&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20em%20${encodeURIComponent(spec)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-100 p-8 rounded-[35px] hover:border-[#628E86] hover:bg-[#628E86] transition-all duration-300 text-center flex items-center justify-center hover:shadow-2xl hover:shadow-[#628E86]/20"
              >
                <span className="text-gray-600 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors">{spec}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-32 bg-[#628E86] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <Logo className="w-full" color="#FFFFFF" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 text-white text-[11px] font-black uppercase tracking-[0.3em]">
              Nossa História
            </div>
            <h3 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">Um compromisso com Ivoti.</h3>
            <p className="text-2xl text-teal-50/80 leading-relaxed font-light italic border-l-4 border-[#B19461] pl-8">
              "Desde 2021, transformando o acesso à saúde especializada na nossa cidade."
            </p>
            <p className="text-xl text-teal-50/70 leading-relaxed font-light">
              {data.history}
            </p>
            <div className="flex gap-12">
               <div>
                 <p className="text-4xl font-serif font-bold text-[#B19461]">15+</p>
                 <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mt-2">Especialidades</p>
               </div>
               <div className="w-px h-16 bg-white/10"></div>
               <div>
                 <p className="text-4xl font-serif font-bold text-[#B19461]">2021</p>
                 <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mt-2">Fundação</p>
               </div>
            </div>
          </div>
          <div className="relative group">
             {/* Container da Imagem com Design Elegante */}
             <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
               {/* Moldura Decorativa */}
               <div className="absolute -inset-4 bg-gradient-to-br from-[#B19461]/30 to-[#628E86]/20 rounded-[60px] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
               
               {/* Imagem Principal */}
               <div className="relative h-full rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-[#B19461]/40 transition-all duration-500">
                 <img 
                   src={drLeonam} 
                   alt="Dr. Leonam - Clínica Prana" 
                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Overlay Gradiente Sutil */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#628E86]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 {/* Texto no Hover */}
                 <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                   <p className="text-white text-lg font-serif font-bold leading-relaxed text-center drop-shadow-lg">
                     Comprometidos com sua saúde e bem-estar.
                   </p>
                 </div>
               </div>
               
               {/* Badge Decorativo */}
               <div className="absolute -bottom-6 -right-6 bg-[#B19461] text-white px-6 py-3 rounded-full shadow-xl text-xs font-black uppercase tracking-widest">
                 Excelência Médica
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1 space-y-8">
              <img 
                src={logoPrana} 
                alt="Prana - Medicina por Imagem e Especialidades Médicas" 
                className="h-10 w-auto"
              />
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
                A melhor tecnologia em diagnóstico e os melhores especialistas reunidos no coração de Ivoti.
              </p>
              <div className="flex gap-4">
                 <a 
                   href="https://www.instagram.com/ivotiprana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full border border-pink-100 flex items-center justify-center text-[#E1306C] bg-pink-50 hover:bg-[#E1306C] hover:text-white transition-all shadow-sm"
                 >
                   <i className="fa-brands fa-instagram text-xl"></i>
                 </a>
                 <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#628E86] hover:text-white transition-all"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[#B19461] font-bold uppercase tracking-widest text-xs">Endereço</h4>
              <p className="text-gray-600 text-sm leading-loose">
                {data.address.street}, {data.address.number}<br/>
                {data.address.complement} - {data.address.neighborhood}<br/>
                {data.address.city}, {data.address.state}
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-[#B19461] font-bold uppercase tracking-widest text-xs">Atendimento</h4>
              <p className="text-gray-600 text-sm leading-loose">
                {data.schedule}<br/>
                <span className="text-[#628E86] font-bold">Sem fechar ao meio-dia</span>
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-[#B19461] font-bold uppercase tracking-widest text-xs">Agendamentos</h4>
              <div className="space-y-4">
                <a href={`tel:${data.contact.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-[#628E86] transition-colors group">
                  <i className="fa-solid fa-phone text-[#D9E4D1] group-hover:text-[#628E86]"></i>
                  <span className="text-sm font-medium">{data.contact.displayPhone}</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#628E86] transition-colors group">
                  <i className="fa-brands fa-whatsapp text-[#D9E4D1] group-hover:text-[#628E86] text-lg"></i>
                  <span className="text-sm font-medium">WhatsApp Online</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-[9px] uppercase tracking-[0.3em] font-black">
             <p>© 2024 Clínica Prana Ivoti. Todos os direitos reservados.</p>
             <div className="flex gap-8">
               <a href="#" className="hover:text-[#628E86] transition-colors">Política de Privacidade</a>
               <a href="#" className="hover:text-[#628E86] transition-colors">Termos de Uso</a>
             </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[200] group flex items-center"
        aria-label="Contatar via WhatsApp"
      >
        <div className="absolute right-full mr-4 bg-[#2D3436] text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-xl">
          Agendar Consulta
        </div>
        <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-active:scale-95 animate-soft-pulse relative">
          <i className="fa-brands fa-whatsapp text-3xl"></i>
          {/* Círculo de pulsação externa */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        </div>
      </a>
    </div>
  );
};

export default App;
