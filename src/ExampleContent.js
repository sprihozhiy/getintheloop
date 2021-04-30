import React, { useContext } from "react";
import { LanguageContext } from "./App";
// import data from "./dictionary.json";

export default function ExampleContent(props) {
  const language = useContext(LanguageContext);

  function getContent() {
    //If I try to use JSON parsing from a local json file I get CORS issue that can be fixed with pasing JSON from a server using fetch() or axios
    //So I've decided to hardcode JSON as an object in a component to show the result of using React Context API.
    // const dt = JSON.parse(data);

    const dt = {
      en: {
        uiStringKey1: "Heading",
      },
      fr: {
        uiStringKey1: "Titre",
      },
    };
    return dt;
  }

  const content = getContent();

  const filteredContent = Object.keys(content)
    .filter((key) => language === key)
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: content[key],
      };
    }, {});

  return (
    <div>
      <h1>{filteredContent[language].uiStringKey1}</h1>
    </div>
  );
}
