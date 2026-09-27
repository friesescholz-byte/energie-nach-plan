export interface LeadData {
  buildingType: string;
  buildingYear: string;
  currentHeating: string;
  plannedMeasure: string;
  timeframe: string;
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  message?: string;
  estimatedSubsidyPercent?: number;
  submittedAt?: string;
}

export interface ReferenceProject {
  id: string;
  title: string;
  category: 'Wohngebäude' | 'WEG & Verwaltung' | 'Gewerbe & TGA';
  location: string;
  year: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  subsidyRate: string;
  savings: string;
}
