import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enContent from '../locales/en/content.json';
import esContent from '../locales/es/content.json';

const resources = {
  en: { content: enContent },
  es: { content: esContent },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
