import { useLanguage } from "../../contexts/LanguageContext"
import "./Spots.css"

export default function Spots() {
    const { t } = useLanguage()
    return (
        <>
            <section className="spot-hero">
                <h1>{t('spots.hero.title')}</h1>
            </section>
            <section className="about">
                <img src="/img/spot-about.jpg" alt={t('spot.hero.title')} className="about-picture" />
            </section>
            <section className="spot-cards">
                <h2>{t('spot.restaurant.title')}</h2>
                <h2>{t('spot.bar.title')}</h2>
            </section>
        </>
    )
}