import type { IconType } from "react-icons";

export type TechItem = {
  name: string;
  icon: IconType;
  iconColor: string;
};

export type TechGroup = {
  title: string;
  items: TechItem[];
};
