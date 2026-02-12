
import { BrandInfo } from './types';

export const CLINICA_PRANA_DATA: BrandInfo = {
  name: "Clínica Prana",
  tagline: "Saúde acessível a todos com tecnologia e profissionais qualificados.",
  address: {
    street: "Rua São Leopoldo",
    number: "315",
    complement: "Sala 1",
    neighborhood: "Brasília",
    city: "Ivoti",
    state: "RS"
  },
  schedule: "Segunda a Sexta: 08:00 às 18:00 (Sem fechar ao meio-dia)",
  contact: {
    whatsapp: "5551999093354",
    phone: "51999093354",
    displayPhone: "(51) 99909-3354"
  },
  mainServices: [
    {
      title: "Ecografia Geral e Obstétrica",
      description: "Exames detalhados realizados por especialistas em radiologia, incluindo morfofuncional e mama.",
      icon: "fa-baby"
    },
    {
      title: "Endoscopia Digestiva Alta",
      description: "Procedimentos seguros para diagnóstico preciso do sistema digestivo.",
      icon: "fa-stethoscope"
    },
    {
      title: "Ozonioterapia",
      description: "Tratamento complementar inovador para diversas patologias e bem-estar.",
      icon: "fa-wind"
    },
    {
      title: "Eletro e Ecocardiograma",
      description: "Avaliação cardiológica completa para adultos e exames fetais.",
      icon: "fa-heart-pulse"
    }
  ],
  specialties: [
    "Pediatria",
    "Ginecologia",
    "Cardiologia",
    "Cirurgia Cardiovascular",
    "Cirurgia Plástica",
    "Cirurgia Geral",
    "Nutrição",
    "Colposcopia",
    "Dermatologia",
    "Clínico Geral",
    "Atendimento ao Idoso"
  ],
  history: "Inaugurada em 2021, a Clínica Prana nasceu com a proposta de reunir em Ivoti serviços de excelência que antes exigiam deslocamento a outras cidades. Unimos profissionais qualificados e tecnologia de ponta em um ambiente acolhedor.",
  colors: {
    primary: "#628E86", // Exact teal from the reception wall photo
    secondary: "#B19461", // Bronze/Gold from the logo
    accent: "#F2F6F5", // Light neutral for backgrounds
    text: "#2D3436"
  }
};
