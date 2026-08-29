import React from "react";
import i18n from "../../i18n";
import "./LanguageSelector.css";

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  // i18n.language contains the language assigned to lng in i18n.js file.

  const toggleLanguage = (language) => {
    const newLang = selectedLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    setSelectedLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        backgroundColor: "var(--sidebar-bg)",
        color: "var(--custom-text)",
        border: "1px solid var(--accent-bg)",
        borderRadius: "5px",
        padding: "5px 10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        height: "36px" // Adjust the height as needed to match the button size (altura al boton para los awenaos)
      }}
      title={selectedLanguage === "es" ? "Switch to English" : "Cambiar a español"}  
    >
      {selectedLanguage === "es" ? "🇬🇧" : "🇨🇱"}
    </button>
  );
};

export default LanguageSelector;
