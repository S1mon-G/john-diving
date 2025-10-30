import { useLanguage } from "../../contexts/LanguageContext"
import { Mail } from "lucide-react"
import "./Contact.css"

export default function Contact() {
    const { t } = useLanguage()
    return (
        <>
            <section className="contact-hero">
                <h1>{t("contact.hero.title")}</h1>
            </section>
            <section className="contact-infos">
                <p>{t('contact.info.paragraph')}</p>
                <section className="contact-links">
                    <article>
                        <h3>{t('contact.whatsapp.info')}</h3>
                        <a href={t('whatsapp.phone')} target="blank"><img src="/img/whatsapp-logo.png" alt="" /></a>
                    </article>

                    <article>
                        <h3>{t('contact.messenger.info')}</h3>
                        <a href="https://m.me/JohnPlaya" target="blank"><img src="/img/messenger-logo.png" alt="" /></a>
                    </article>

                    <article>
                        <h3>{t('contact.mail.info')}</h3>
                        <a href="mailto:contact@johndiving.com"><Mail size={50} color="currentColor" /></a>
                    </article>
                </section>
                <p>{t('contact.conclusion')}</p>
            </section>
        </>
    )
}