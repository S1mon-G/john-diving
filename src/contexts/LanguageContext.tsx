import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language } from './translation';


interface LanguageContextType {
    currentLanguage: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);



export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

    const setLanguage = (language: Language) => {
        setCurrentLanguage(language);
    };

    const t = (key: string): string => {
        return translations[currentLanguage][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};