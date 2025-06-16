import { useState, useEffect, createContext, useContext } from "react";
import type {
  TransitionContextProps,
  TransitionContextType,
} from "../Types/TransitionContext";

const TransitionContext = createContext<TransitionContextType | null>(null);
// 2900
const TransitionProvider = ({ children }: TransitionContextProps) => {
  const [isTextHero, setIsTextHero] = useState(false);
  const [isShowSkill, setIsShowSkill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 2800) {
        setIsShowSkill(true);
      } else {
        setIsShowSkill(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleTransition = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setIsTextHero(true);
    };
    handleTransition();
  }, []);

  return (
    <TransitionContext.Provider value={{ isTextHero, isShowSkill }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }
  return context;
};
