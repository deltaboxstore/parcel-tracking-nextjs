'use client';

import React from "react";
import "./App.css";

/**
 * LanguageModal Component
 * 
 * Displays a modal for users in multi-lingual countries to select their preferred language
 * Shows only relevant languages based on the user's detected country
 * 
 * Props:
 * - isOpen: boolean - controls modal visibility
 * - onClose: function - callback when modal is closed
 * - onSelectLanguage: function(languageCode) - callback when language is selected
 * - availableLanguages: array - list of language objects with code, name, and flag
 * - country: string - detected country code
 */
const LanguageModal = ({ isOpen, onClose, onSelectLanguage, availableLanguages, country }) => {
  if (!isOpen) return null;

  const countryNames = {
    IN: "India",
    HK: "Hong Kong",
    MY: "Malaysia",
    PH: "Philippines",
    SG: "Singapore",
    BN: "Brunei"
  };

  const handleLanguageSelect = (langCode) => {
    onSelectLanguage(langCode);
    onClose();
  };

  return (
    <div className="language-modal-overlay" onClick={onClose}>
      <div className="language-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="language-modal-header">
          <h2>Choose Your Language</h2>
          <p className="language-modal-subtitle">
            We detected you're in {countryNames[country] || "a multi-lingual country"}. 
            Please select your preferred language:
          </p>
        </div>
        
        <div className="language-modal-body">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className="language-option-button"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
            </button>
          ))}
        </div>

        <div className="language-modal-footer">
          <button className="language-modal-close" onClick={onClose}>
            I'll choose later
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
