import { useState, useEffect, useRef } from "react";
import { PiTranslate } from "react-icons/pi";
import styles from "./TranslationWidget.module.scss";
import { useTranslation } from "../../i18n/TranslationContext";
import type { Lang } from "../../i18n/translations";
import "flag-icons/css/flag-icons.min.css";

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "gb" },
  { code: "da", label: "Dansk",   flag: "dk" },
  { code: "de", label: "Deutsch", flag: "de" },
];

interface Props {
  isScrolled: boolean;
  isDarkSection: boolean;
}

const TranslationWidget = ({ isScrolled, isDarkSection }: Props) => {
  const { lang, setLang } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Lang) => {
    setLang(code);
    setLangOpen(false);
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
      <ul className={styles.dropdown}>
        {LANGUAGES.map(({ code, label, flag }) => (
          <li key={code}>
            <button
              className={`${styles.option} ${lang === code ? styles.activeOption : ""}`}
              onClick={() => handleSelect(code)}
            >
              <span className={`fi fi-${flag}`} />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranslationWidget;
