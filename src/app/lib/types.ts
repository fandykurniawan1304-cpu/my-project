export interface CompanyInfo {
  company_name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values?: CompanyValue[];
  production_process?: ProductionProcessStep[];
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  working_hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  social_media: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  google_maps_url: string;
  logo: string | null;
  favicon: string | null;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string | null;
}

export interface ProductionProcessStep {
  step: number;
  title: string;
  description: string;
}