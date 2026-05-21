import styles from "./Footer.module.scss";
import { Icons } from "../../utilities/useIcons";
import { useTranslation } from "../../i18n/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <img
        className={styles.dividerTop}
        src="/images/divider-top.png"
        alt="section divider"
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2>{t("footerContact")}</h2>
            <ul className={styles.contactList}>
              <li className={styles.listItem}>
                <Icons.email className={styles.techIcon} />
                <span className={styles.contactText}>
                  <a href="mailto:marksgalkins@gmail.com?subject=Hello%20from%20website&body=Hi%20Mark%2C%0D%0A%0D%0AI%20wanted%20to%20ask%20about...">
                    {t("footerEmail")}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>{t("footerNav")}</h2>
            <ul className={styles.links}>
              <li><a href="#hero">{t("footerHome")}</a></li>
              <li><a href="#about">{t("footerAbout")}</a></li>
              <li><a href="#projects">{t("footerProjects")}</a></li>
              <li><a href="#contact">{t("footerContact")}</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>{t("footerConnect")}</h2>
            <ul className={styles.socialLinks}>
              <li className="github">
                <a
                  href="https://github.com/GR0UD"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Icons.github />
                </a>
              </li>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/markgalkin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Icons.linkedin />
                </a>
              </li>
              <li className="codepen">
                <a
                  href="https://codepen.io/GROUD-the-solid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodePen"
                >
                  <Icons.codepen />
                </a>
              </li>
              <li className="devto">
                <a
                  href="https://dev.to/gr0ud"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dev.to"
                >
                  <Icons.devto />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          &copy; {currentYear}{" "}
          <a
            href="https://github.com/GR0UD"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.nameLink}
          >
            Mark Galkins
          </a>
          . {t("footerRights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
