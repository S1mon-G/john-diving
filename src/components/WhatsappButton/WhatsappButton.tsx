import './WhatsappButton.css'
import { useLanguage } from '../../contexts/LanguageContext'

export default function WhattsappButton() {
    const { t } = useLanguage();
    return (
        <a href={t('whatsapp.phone')} target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button">
                {t('whatsapp.contact')}
            </button>
        </a>
    )
}

