import { useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Navigation.css';


const Navigation = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { currentLanguage, setLanguage, t } = useLanguage();

    const languages = [
        { code: 'fr' as const, flag: '🇫🇷', name: 'Français' },
        { code: 'es' as const, flag: '🇲🇽', name: 'Español' },
        { code: 'en' as const, flag: '🇺🇸', name: 'English' }
    ];

    const handleDropdownToggle = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <img src="../../../public/img/jd-logo.png" alt="John diving logo" className='logo' />

                <div className="nav-links">
                    <a href="#accueil" className="nav-link">{t('nav.home')}</a>
                    <a href="#apropos" className="nav-link">{t('nav.about')}</a>

                    <div className="dropdown">
                        <button onClick={() => handleDropdownToggle('plongees')} className="dropdown-button">
                            {t('nav.diving')} <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {activeDropdown === 'plongees' && (
                            <div className="dropdown-menu">
                                <a href="#premieres" className="dropdown-item">{t('nav.diving.beginners')}</a>
                                <a href="#certifies" className="dropdown-item">{t('nav.diving.certified')}</a>
                                <a href="#cenotes" className="dropdown-item">{t('nav.diving.cenotes')}</a>
                            </div>
                        )}
                    </div>

                    <a href="#playadelcarmen" className="nav-link">{t('nav.playadelcarmen')}</a>
                    <a href="#contact" className="nav-link">{t('nav.contact')}</a>

                    <div className="dropdown">
                        <button onClick={() => handleDropdownToggle('language')} className="dropdown-button">
                            <Globe className="mr-1 h-4 w-4" />
                            {languages.find(lang => lang.code === currentLanguage)?.flag}
                        </button>
                        {activeDropdown === 'language' && (
                            <div className="dropdown-menu right">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => {
                                            setLanguage(language.code);
                                            setActiveDropdown(null);
                                        }}
                                        className="dropdown-item"
                                    >
                                        <span className="mr-2">{language.flag}</span>
                                        {language.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <>
                    <div className="mobile-menu">
                        <a href="#accueil" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</a>
                        <a href="#apropos" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>

                        <button onClick={() => handleDropdownToggle('plongees')}>
                            {t('nav.diving')} <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {activeDropdown === 'plongees' && (
                            <>
                                <a href="#premieres" onClick={() => setMobileMenuOpen(false)}>{t('nav.diving.beginners')}</a>
                                <a href="#certifies" onClick={() => setMobileMenuOpen(false)}>{t('nav.diving.certified')}</a>
                                <a href="#cenotes" onClick={() => setMobileMenuOpen(false)}>{t('nav.diving.cenotes')}</a>
                            </>
                        )}

                        <a href="#playadelcarmen" onClick={() => setMobileMenuOpen(false)}>{t('nav.playadelcarmen')}</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</a>

                        <button onClick={() => handleDropdownToggle('language')}>
                            <Globe className="mr-1 h-4 w-4" />
                            {languages.find(lang => lang.code === currentLanguage)?.flag}
                        </button>
                        {activeDropdown === 'language' && (
                            <>
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => {
                                            setLanguage(language.code);
                                            setActiveDropdown(null);
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        <span className="mr-2">{language.flag}</span>
                                        {language.name}
                                    </button>
                                ))}
                            </>
                        )}
                    </div>

                    <div className="backdrop" onClick={() => setMobileMenuOpen(false)} />
                </>
            )}
        </nav>
    );
};

export default Navigation;
