
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Specialty {
  name: string;
  icon: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  schedule: string;
  contact: {
    whatsapp: string;
    phone: string;
    displayPhone: string;
  };
  mainServices: Service[];
  specialties: string[];
  history: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
}
