import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      className={`${styles.logo} ${className ?? ""}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M8 16V10L14 4H22L32 36L42 4H50L56 10V16L40 40V56H24V40L8 16Z"
      />
    </svg>
  );
};

export default Logo;
