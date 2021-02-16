import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        supportedLngs: ['en', 'sv', 'fi'],
        fallbackLng: 'en',
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
        },
        nsSeparator: false,
        keySeparator: '.',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        react: {
            wait: true,
        },
    })

export default i18n
