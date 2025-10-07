import './Home.css'
import WhattsappButton from '../../components/WhatsappButton/WhatsappButton';
import CenoteModale from '../../components/modales/cenoteModale';
import { useState } from 'react';

export default function Home() {
  const [modaleOpen, setModaleOpen] = useState(false);

  return (
    <main>
      <section className="hero">
        <h1>PLONGEZ DANS <br /> LA RIVIERA MAYA </h1>
        <img src="/img/ta-award.png" alt="trip advisor travellers choice award 2025" />
      </section>
      <section className="about">
        <article className='about-intro'>
          <img src="/img/jd-about.JPG" alt="John Diving presentation" className='about-img' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam consequatur obcaecati sequi ullam dicta ratione, impedit illum unde alias necessitatibus voluptatum. Commodi facere earum eligendi ratione magnam ea eius provident!
            Quo enim expedita beatae eos tempora sit obcaecati unde magni a animi repellendus ratione, dolores error, pariatur placeat vitae fugiat, quas vero nam voluptatem facere deserunt ab consequatur. Ad, alias.</p>
        </article>
        <WhattsappButton />
      </section>
      <section className='divings'>
        <h2>Nos plongées</h2>
        <div className='divings-cards'>
          <article>
            <div className='divings-img-wrapper'>
              <img src="/img/divings-cards-first-dive.png" alt="firs dives" />
              <h3>PREMIERES PLONGEES</h3>
            </div>
          </article>
          <article>
            <div className='divings-img-wrapper'>
              <img src="/img/divings-cards-exp.png" alt="experimented dives" />
              <h3>PLONGEURS EXPERIMENTES</h3>
            </div>
          </article>

          <article onClick={() => setModaleOpen(true)}>
            <div className='divings-img-wrapper'            >
              <img src="/img/divings-cards-cenote.png" alt="cenote exploration" />
              <h3>EXPLORATION DES CENOTES</h3>
              {modaleOpen && <CenoteModale onClose={() => setModaleOpen(false)} />}
            </div>
          </article>

        </div>
      </section>
      <section className='services'>
        <h2>Nos services</h2>
        <div className='service-cards'>
          <article>
            <div className='img-wrapper'>
              <img src="/img/service-perso.png" alt="personalized service" />
            </div>
            <h3>SERVICES PERSONNALISES</h3>
            <p>Organisez une sortie sur-mesure, selon votre niveau de plongée et vos envies.</p>
          </article>
          <article>
            <div className='img-wrapper'>
              <img src="/img/service-certif.png" alt="certifiying diving" />
            </div>
            <h3>FORMATIONS DIPLOMANTES</h3>
            <p>Profitez de votre séjour pour commencer votre formation ou valider des acquis</p>
          </article>
          <article>
            <div className='img-wrapper'>
              <img src="/img/service-multi.png" alt="multilingual service" />
            </div>
            <h3>SERVICES MULTILINGUES</h3>
            <p>Nos services sont disponibles en français, anglais et espagnol </p>
          </article>
        </div>
      </section>
      <section>
        <h2>Nos bonnes adresses</h2>
      </section>
      <section>
        <h2>Retrouvez-nous sur les réseaux</h2>
      </section>
    </main>
  )
}