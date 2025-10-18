import { useLanguage } from "../contexts/LanguageContext"

export default function Privacy() {
    const { t } = useLanguage()
    return (<>
        <h1>{t('privacy.title')}</h1>
        <p>{t('privacy.text')}</p>
    </>
    )
}