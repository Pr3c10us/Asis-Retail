import React, { useState, useEffect } from "react";

const CapitalizeSentence = ({ name }) => {
  const [capitalizeWord, setCapitalize] = useState("");

  const capitalize = () => {
    const words = name?.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedSentence = capitalizedWords.join(" ");
    setCapitalize(capitalizedSentence);
  };

  useEffect(() => {
    capitalize();
  }, [name]);

  return <div>{capitalizeWord}</div>;
};

export default CapitalizeSentence;
