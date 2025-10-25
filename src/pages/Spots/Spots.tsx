import { useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./Spots.css"
interface Restaurant {
    id: number;
    name: string;
    address: string;
    description: string;
    image1?: string;
    image2?: string;
    image3?: string;
}

function useRestaurantData() {
    const [restaurantInfos, setRestaurantInfos] = useState<Restaurant[]>([]);
    useEffect(() => {
        fetch("/data/restaurants.json")
            .then((res) => res.json())
            .then(setRestaurantInfos)
            .catch((err) => console.error("Error fetching restaurant data:", err));
    }, [])
    return restaurantInfos;
}

export default function Spots() {
    const { t } = useLanguage()
    const restaurantInfos = useRestaurantData();

    return (
        <>
            <section className="spot-hero">
                <h1>{t('spots.hero.title')}</h1>
            </section>
            <section className="spots-about">
                <img src="/img/spot-about.webp" alt={t('spot.hero.title')} className="about-picture" />
                <div className='spot-description'><h3>{t('spots.description.title')}</h3>
                    <p>{t('spots.description')}</p>
                    <p>{t('spots.paragraph')}</p>
                </div>
            </section>
            <section className="spot-cards">
                <h2>{t('spot.restaurant.title')}</h2>
                {restaurantInfos.map((restaurant) => (
                    <article className="restaurant-card">
                        <div className="restaurant-header">
                            <h3>{t(restaurant.name)}</h3>
                            <h4>{restaurant.address}</h4>
                        </div>
                        <p>{t(restaurant.description)}</p>
                        <div className="restaurant-image-container">
                            <img src={restaurant.image1} alt={t(restaurant.name)} />
                            <img src={restaurant.image2} alt={t(restaurant.name)} className="second" />
                            <img src={restaurant.image3} alt={t(restaurant.name)} className="third" />
                        </div>
                    </article>
                ))}

                <h2>{t('spot.bar.title')}</h2>
            </section>
        </>
    )
}