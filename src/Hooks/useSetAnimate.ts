import { useEffect, useState } from "react";

const useSetAnimate = () => {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const handleAnimate = async () => {
      await new Promise(() => setTimeout(() => setIsAnimate(!isAnimate), 700));
    };

    handleAnimate();
  }, [isAnimate]);

  return { isAnimate };
};

export default useSetAnimate;
