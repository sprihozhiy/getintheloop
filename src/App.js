import React, { useState } from "react";
import ExampleContent from "./ExampleContent";
import "./App.css";

export const LanguageContext = React.createContext();

export default function App() {
  const [language, setLanguage] = useState("en");

  function languageChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <LanguageContext.Provider value={language}>
      <div className="App">
        <select value={language} onChange={languageChange}>
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <ExampleContent />
      </div>
    </LanguageContext.Provider>
  );
}
