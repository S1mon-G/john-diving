import './Home.css';
import WhattsappButton from '../../components/WhatsappButton/WhatsappButton';
import CenoteModale from '../../components/modales/cenoteModale';
import FirstDiveModale from '../../components/modales/firstDiveModale';
import CertifiedDiverModale from '../../components/modales/certifiedModale';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero">
        <h1>{t('hero.title')}</h1>
        <img src="/img/ta-award.png" alt="trip advisor travellers choice award 2025" />
      </section>

      <section className="about">
        <article className="about-intro">
          <p>
            {t('about.introduction')} <br />{t('about.description')}
          </p>
        </article>
        <WhattsappButton />
      </section>

      <section className="divings">
        <h2>{t('diving.title')}</h2>
        <div className="divings-cards">

          <article onClick={() => setOpenModal('firstDive')}>
            <div className="divings-img-wrapper">
              <img src="/img/divings-cards-first-dive.png" alt="first dives" />
              <h3>{t('diving.beginners')}</h3>
            </div>
          </article>

          <article onClick={() => setOpenModal('expert')}>
            <div className="divings-img-wrapper">
              <img src="/img/divings-cards-exp.png" alt="experimented dives" />
              <h3>{t('diving.certified')}</h3>
            </div>
          </article>

          <article onClick={() => setOpenModal('cenote')}>
            <div className="divings-img-wrapper">
              <img src="/img/divings-cards-cenote.png" alt="cenote exploration" />
              <h3>{t('diving.cenotes')}</h3>
            </div>
          </article>
        </div>

        {openModal === 'firstDive' && (
          <FirstDiveModale isOpen onClose={() => setOpenModal(null)} />
        )}
        {openModal === 'cenote' && (
          <CenoteModale isOpen onClose={() => setOpenModal(null)} />
        )}
        {openModal === 'expert' &&
          <CertifiedDiverModale isOpen onClose={() => setOpenModal(null)} />}
      </section>

      <section className="services">
        <h2>{t('services.title')}</h2>
        <div className="service-cards">
          <article>
            <div className="img-wrapper">
              <img src="/img/service-perso.png" alt="personalized service" />
            </div>
            <h3>{t('services.personalized')}</h3>
            <p>{t('services.personalized.desc')}</p>
          </article>
          <article>
            <div className="img-wrapper">
              <img src="/img/service-certif.png" alt="certifiying diving" />
            </div>
            <h3>{t('services.training')}</h3>
            <p>{t('services.training.desc')}</p>
          </article>
          <article>
            <div className="img-wrapper">
              <img src="/img/service-multi.png" alt="multilingual service" />
            </div>
            <h3>{t('services.multilingual')}</h3>
            <p>{t('services.multilingual.desc')}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
