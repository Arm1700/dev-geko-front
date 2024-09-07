import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// import en from './locale/en';
// import am from './locale/am'
// import ru from './locale/ru'


i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false,
        },
        // resources: {
        //     en,
        //     am,
        //     ru
        // },
        backend: {
            loadPath: 'http://127.0.0.1:8000/api/translations/{{lng}}/',
        },
    });

export default i18n;