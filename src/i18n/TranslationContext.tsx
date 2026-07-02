import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

interface TranslationContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => translations.en[key],
});

function detectBrowserLang(): Lang {
  const supported: Lang[] = ["en", "ja", "ko", "zh"];
  const browserLang = navigator.language.slice(0, 2).toLowerCase() as Lang;
  return supported.includes(browserLang) ? browserLang : "en";
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectBrowserLang);

  const t = (key: TranslationKey): string =>
    translations[lang][key] ?? translations.en[key];

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
