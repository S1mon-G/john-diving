import './Footer.css'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className='contact-icons'>
        <a href="https://m.me/JohnPlaya" target="blank"><img src="../../../img/messenger-logo.png" alt="messenger app logo" /></a>
        <a href={t('whatsapp.phone')} target="blank"><img src="../../../img/whatsapp-logo.png" alt="whatsapp app logo" /></a>
        <p>contact@johndiving.com</p>
      </div>
      <div className='logo-infos'>
        <Link to='/'><img src="../../../img/jd-logo.webp" alt='john diving logo' /></Link>
        <p>© 2025 John Diving. All rights reserved.</p>
        <p>Playa del Carmen, Tulum, Riviera Maya, Mexico</p>
      </div>
      <div className='social-icons'>
        <a href="https://www.facebook.com/JohnPlaya" target="blank"><img src="../../../img/facebook-logo.png" alt="facebook link to john diving" /></a>
        <a href="https://www.instagram.com/johndiving_/" target="blank"><img src="../../../img/instagram-logo.png" alt="instagram link to john diving" /></a>
        <a href="https://www.tripadvisor.fr/Attraction_Review-g150812-d17821661-Reviews-John_Diving-Playa_del_Carmen_Yucatan_Peninsula.html" target="blank"><img src="../../../img/tripadvisor-logo.png" alt="tripadvisor link to john diving" /></a>
        <a href='/privacy' className='privacy' target='blank'><p>{t('privacy.footer')}</p></a>
      </div>


    </footer>
  )
}