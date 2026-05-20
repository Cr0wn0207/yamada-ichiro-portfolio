import { useState, useEffect, useRef } from "react";
import { PiTranslate } from "react-icons/pi";
import styles from "./TranslationWidget.module.scss";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "da", label: "Dansk" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

interface Props {
  isScrolled: boolean;
  isDarkSection: boolean;
}

const TranslationWidget = ({ isScrolled, isDarkSection }: Props) => {
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const key = import.meta.env.VITE_TRANSLATION_ACCESS_KEY;
    if (!key) return;

    import("translation-widget").then(({ default: init }) => {
      init(key, {
        pageLanguage: "en",
        showUI: true,
      });
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setActiveLang(code);
    setLangOpen(false);
    const w = window as Window & {
      translate?: (lang: string, onComplete?: (r: unknown) => void, onError?: (e: unknown) => void) => void;
      resetTranslation?: (lang: string, onComplete?: (r: unknown) => void, onError?: (e: unknown) => void) => void;
    };
    const onError = (e: unknown) => console.error("[TranslationWidget] error:", e);
    if (code === "en") {
      w.resetTranslation?.("en", undefined, onError);
    } else {
      w.translate?.(code, undefined, onError);
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""} ${isDarkSection ? styles.onDark : ""} ${langOpen ? styles.dropdownActive : ""}`}
    >
      <button
        className={styles.btn}
        onClick={() => setLangOpen((o) => !o)}
        aria-label="Select language"
        aria-expanded={langOpen}
      >
        <PiTranslate className={styles.icon} />
      </button>
      {langOpen && (
        <ul className={styles.dropdown}>
          {LANGUAGES.map(({ code, label }) => (
            <li key={code}>
              <button
                className={`${styles.option} ${activeLang === code ? styles.activeOption : ""}`}
                onClick={() => handleSelect(code)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { LANGUAGES };
export default TranslationWidget;
