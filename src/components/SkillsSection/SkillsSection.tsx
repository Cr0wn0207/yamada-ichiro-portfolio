import type { CSSProperties } from "react";
import { skillsData } from "../../data/skills";
import styles from "./SkillsSection.module.scss";
import type { SkillLinkProps, SkillColumnProps } from "../../types";
import { useTranslation } from "../../i18n/TranslationContext";

const SkillLink = ({ icon: Icon, name, color }: SkillLinkProps) => (
  <li>
    <a
      href="#projects"
      className={styles.skillLink}
      style={{ "--skill-color": color } as CSSProperties}
    >
      <Icon className={styles.icon} /> {name}
    </a>
  </li>
);

const SkillColumn = ({ title, skills }: SkillColumnProps) => (
  <div className={styles.column}>
    <h4>{title}</h4>
    <ul>
      {skills.map((skill) => (
        <SkillLink key={skill.name} {...skill} />
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.columns}>
        <SkillColumn title={t("skillsDev")} skills={skillsData.development} />
        <SkillColumn title={t("skillsFrontend")} skills={skillsData.frontend} />
        <SkillColumn title={t("skillsBackend")} skills={skillsData.backend} />
        <SkillColumn title={t("skillsTools")} skills={skillsData.tools} />
      </div>
    </div>
  );
};

export default SkillsSection;
