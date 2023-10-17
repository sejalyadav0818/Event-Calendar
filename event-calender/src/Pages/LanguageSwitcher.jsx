import React from "react";
import { useTranslation } from "react-i18next";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div class="inline-flex">
    <button onClick={() => i18n.changeLanguage("en")} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    English
    </button>
    <button onClick={() => i18n.changeLanguage("hi")} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Hindi
    </button>
  </div>
  );
};

export default LanguageSwitcher;
