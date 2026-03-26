import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  HiOutlineMail,
  HiOutlineCode,
  HiOutlineGlobe,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineTerminal,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
} from "react-icons/hi";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  mail: HiOutlineMail,
  code: HiOutlineCode,
  globe: HiOutlineGlobe,
  briefcase: HiOutlineBriefcase,
  academic: HiOutlineAcademicCap,
  cube: HiOutlineCube,
  chart: HiOutlineChartBar,
  cog: HiOutlineCog,
  terminal: HiOutlineTerminal,
  server: HiOutlineServer,
  database: HiOutlineDatabase,
  lightning: HiOutlineLightningBolt,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
