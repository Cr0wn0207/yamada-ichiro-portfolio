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

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: TranslationKey): string =>
    translations[lang][key] ?? translations.en[key];

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
