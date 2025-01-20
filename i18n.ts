import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import des fichiers de traduction
import commonFR from '@/public/locales/fr/common.json'
import commonEN from '@/public/locales/en/common.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: commonFR
      },
      en: {
        common: commonEN
      }
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common'
  })

export default i18n