import type { ReactNode } from "react";

export interface TransitionContextType {
  isTextHero: boolean;
  isShowSkill: boolean;
}

export interface TransitionContextProps {
  children: ReactNode;
}
