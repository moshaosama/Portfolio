import { createContext, useContext, useState } from "react";
import type {
  SidebarContextType,
  SidebarContextTypeProps,
} from "../Types/SidebarContextType";

const SidebarContext = createContext<SidebarContextType | null>(null);

const SidebarProivder = ({ children }: SidebarContextTypeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleTriggerSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProivder;

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }
  return context;
};
