import { useLanguage } from "../../contexts/LanguageContext"
import "./Sidemenu.css"

export default function Sidemenu() {
    const { t } = useLanguage()
    return (
        <section className="sidemenu">
            <a href="https://m.me/JohnPlaya" target="blank"><img src="../../../img/sidemenu-messenger.png" alt="messenger app logo" /></a>
            <a href={t('whatsapp.phone')} target="blank"><img src="../../../img/sidemenu-whatsapp.png" alt="whatsapp app logo" /></a>
            <a href="https://www.tripadvisor.fr/Attraction_Review-g150812-d17821661-Reviews-John_Diving-Playa_del_Carmen_Yucatan_Peninsula.html" target="blank"><img src="../../../img/sidemenu-tripadvisor.png" alt="tripadvisor link to john diving" /></a>

        </section>

    )
}