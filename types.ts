import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  regions?: string[];
  icon: LucideIcon;
}

export interface ContactDetails {
  address: {
    street: string;
    city: string;
    zip: string;
  };
  phones: string[];
  emails: string[];
  web: string;
  legal: {
    ic: string;
    dic: string;
  };
  bank: {
    accountNumber: string;
    iban: string;
    bankName: string;
  };
}