import { Factory, Wrench, Globe, FlaskConical } from 'lucide-react';
import { ServiceData, ContactDetails } from './types';

export const COMPANY_NAME = "Petr Svoboda GEN";
export const TAGLINE = "Zprostředkování obchodu a služeb";

export const SERVICES: ServiceData[] = [
  {
    id: 'chemistry',
    title: "Průmyslová chemie",
    subtitle: "XINTEX, spol. s r.o.",
    description: "Profesionální chemické produkty pro údržbu a výrobu. Partner společnosti XINTEX.",
    regions: ["Ústí nad Labem", "Děčín", "Česká Lípa", "Liberec", "Semily"],
    icon: FlaskConical
  },
  {
    id: 'production',
    title: "Řešení pro výrobu",
    subtitle: "Vybavení & Servis",
    description: "Komplexní dodávky vybavení pro výrobní provozy a zajištění následného servisu.",
    icon: Factory
  },
  {
    id: 'maintenance',
    title: "Řešení pro údržbu",
    subtitle: "Nářadí & Servis",
    description: "Profesionální nářadí a technická podpora pro efektivní údržbu vašich zařízení.",
    icon: Wrench
  },
  {
    id: 'import',
    title: "Dovoz z EU a USA",
    subtitle: "Asistovaný nákup",
    description: "Zprostředkování nákupu a logistiky specifického zboží a technologií ze zahraničí.",
    icon: Globe
  }
];

export const CONTACT_INFO: ContactDetails = {
  address: {
    street: "Petrovická 162",
    city: "Ústí nad Labem",
    zip: "403 40"
  },
  phones: [
    "+420 602 763 599",
    "+420 728 182 200"
  ],
  emails: [
    "petr.svoboda@sgen.cz",
    "lenka.svobodova@sgen.cz"
  ],
  web: "www.sgen.cz",
  legal: {
    ic: "72618311",
    dic: "CZ7711102894"
  },
  bank: {
    accountNumber: "830489001/5500",
    iban: "CZ7555000000000830489001",
    bankName: "Raiffeisenbank, ČR"
  }
};