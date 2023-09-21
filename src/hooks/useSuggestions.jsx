import { useEffect, useState } from "react";

const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState("");
  useEffect(() => {
    fetch("cities.json")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
        console.log(data);
      });
  }, []);
  return [suggestions, setSuggestions];
};

export default useSuggestions;
