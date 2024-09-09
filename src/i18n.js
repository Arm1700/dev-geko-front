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
            loadPath: 'https://dev.gekoeducation.com//api/translations/{{lng}}/',
        },
        cache: {
            enabled: true,
            prefix: 'i18next_res_',
            expirationTime: 7*24*60*60*1000 // Время хранения в кэше
        },

        // react: {
        //     useSuspense: false, // Отключаем Suspense для лучшей обработки загрузки
        // },
    });

export default i18n;