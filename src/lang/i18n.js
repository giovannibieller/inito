import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { applyClientHMR } from 'i18next-hmr/client';

import Languages from './languages';

const fallbackLng = Languages[0];
const defaultLanguage = localStorage.chosenLanguage ? localStorage.chosenLanguage : fallbackLng;
const translationsPath = '/assets/i18n/{{ns}}/{{lng}}.json';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: defaultLanguage,
    backend: {
      loadPath: translationsPath
    },
    fallbackLng,
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true,
      useSuspense: false
    }
  });

applyClientHMR(i18n);

export default i18n;
