import React, { createContext, useState } from "react";
export const AppContext = createContext({});
export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  /**
   * handle Language
   * @param {string} lang  - iso language
   */
  const handleLanguage = (lang) => {
    setLanguage(lang);
  };

  /**
   * generate context
   */
  const context = {
    isLoading,
    setIsLoading,
    language,

    //methods
    handleLanguage,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};
