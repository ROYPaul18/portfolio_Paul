import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Utilisation du backend HTTP
  .use(initReactI18next)
  .init({
    lng: 'fr',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' // Chemin des fichiers JSON
    }
  })
  .then(() => console.log('i18next chargé avec succès'))
  .catch(err => console.error('Erreur de chargement i18next', err));

export default i18n;
