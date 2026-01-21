'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { languageMap } from './translations';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select 
      value={language} 
      onChange={(e) => setLanguage(e.target.value)}
      className="language-selector"
      title="Select Language"
    >
      {Object.entries(languageMap).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};
