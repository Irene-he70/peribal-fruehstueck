import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import deCommon from '../locales/de/common.json';
import enCommon from '../locales/en/common.json';
import frCommon from '../locales/fr/common.json';
import esCommon from '../locales/es/common.json';
import deRecipes from '../locales/de/recipes.json';
import enRecipes from '../locales/en/recipes.json';
import frRecipes from '../locales/fr/recipes.json';
import esRecipes from '../locales/es/recipes.json';

const resources = {
  de: { common: deCommon, recipes: deRecipes },
  en: { common: enCommon, recipes: enRecipes },
  fr: { common: frCommon, recipes: frRecipes },
  es: { common: esCommon, recipes: esRecipes },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
