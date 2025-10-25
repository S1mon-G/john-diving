import { useLanguage } from "../../contexts/LanguageContext"

export default function Spots() {
    const { t } = useLanguage()
    return (
        <>
            <section className="spot-hero">
                <h1>{t('spot.hero.title')}</h1>
            </section>
        </>
    )
}