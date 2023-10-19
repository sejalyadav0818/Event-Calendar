import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hnTranslations from "./locale/hn.locale.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: { welcome: "Welcome to our application!" } },
    hi: { translations: hnTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
