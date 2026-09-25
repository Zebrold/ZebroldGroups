import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default language is 'de' (German)
  const [lang, setLangState] = useState(() => {
    const pref = localStorage.getItem('zebrold_lang_pref');
    if (pref === 'en' || pref === 'de') {
      return pref;
    }
    return 'de';
  });

  useEffect(() => {
    localStorage.setItem('zebrold_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'de') {
      localStorage.setItem('zebrold_lang_pref', newLang);
      setLangState(newLang);
    }
  };

  const toggleLang = () => {
    setLangState((prev) => {
      const next = prev === 'de' ? 'en' : 'de';
      localStorage.setItem('zebrold_lang_pref', next);
      return next;
    });
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['de']?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
