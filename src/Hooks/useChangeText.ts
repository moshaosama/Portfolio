import { useEffect, useState } from "react";

const useChangeText = () => {
  const allTexts = ["Full-Stack Developer", "UI/UX Designer"];
  const [startWord] = useState(allTexts[0]);
  const [endWord] = useState(allTexts[1]);
  const [text, setText] = useState("");

  useEffect(() => {
    let currentStartWordIndex = 1;
    let currentEndWordIndex = 1;
    const interval = setInterval(() => {
      if (currentStartWordIndex <= startWord.length) {
        setText(startWord.slice(0, currentStartWordIndex));
        currentStartWordIndex++;
      } else if (currentEndWordIndex <= endWord.length) {
        setText(endWord.slice(0, currentEndWordIndex));
        currentEndWordIndex++;
      } else {
        currentStartWordIndex = 1;
        currentEndWordIndex = 1;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return { text };
};

export default useChangeText;
