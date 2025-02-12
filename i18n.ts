import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import des fichiers de traduction
import commonFR from '@/public/locales/fr/common.json'
import commonEN from '@/public/locales/en/common.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { common: commonFR },
      en: { common: commonEN }
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common'
  })
  .then(() => console.log('i18next chargé avec succès'))
  .catch(err => console.error('Erreur de chargement i18next', err));


export default i18n