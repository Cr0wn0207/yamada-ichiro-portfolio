// React Icons
import { IoLogoSass } from "react-icons/io5";
import { TbBrandMysql, TbApi } from "react-icons/tb";
import {
  SiCsswizardry,
  SiPhp,
  SiWebpack,
  SiMamp,
  SiTypescript,
  SiMongodb,
  SiVercel,
  SiExpress,
  SiHono,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaJs,
  FaHtml5,
  FaRegWindowMaximize,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiJesterHat } from "react-icons/gi";
import { RiReactjsLine, RiNpmjsLine } from "react-icons/ri";
import { VscJson, VscVscodeInsiders } from "react-icons/vsc";
import { GrWordpress } from "react-icons/gr";
import { CgFigma } from "react-icons/cg";
import {
  FaGitlab,
  FaLocationDot,
  FaDiscord,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const Icons = {
  // 💻 Skills
  html: FaHtml5,
  css: SiCsswizardry,
  js: FaJs,
  php: SiPhp,
  react: RiReactjsLine,
  sass: IoLogoSass,
  mysql: TbBrandMysql,
  json: VscJson,
  fetch: TbApi,
  webpack: SiWebpack,
  npm: RiNpmjsLine,
  jest: GiJesterHat,
  wordpress: GrWordpress,
  mamp: SiMamp,
  localwp: FaRegWindowMaximize,
  vscode: VscVscodeInsiders,
  figma: CgFigma,
  git: FaGitlab,
  next: RiNextjsFill,
  tailwind: RiTailwindCssFill,
  typescript: SiTypescript,
  mongodb: SiMongodb,
  postgresql: BiLogoPostgresql,
  vercel: SiVercel,
  express: SiExpress,
  hono: SiHono,

  // 📬 Contact & Social
  github: FaGithub,
  instagram: FaInstagram,
  email: IoMdMail,
  phone: FaPhoneAlt,
  location: FaLocationDot,
  discord: FaDiscord,
} as const;
