import { useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./Spots.css"

interface Spot {
    id: number
    name: string
    address: string
    description: string
    image1?: string
    image2?: string
    image3?: string
    type: "restaurant" | "bar"
}

function useSpotsData() {
    const [spots, setSpots] = useState<Spot[]>([])

    useEffect(() => {
        Promise.all([
            fetch("/data/restaurants.json").then(res => res.json()),
            fetch("/data/bars.json").then(res => res.json())
        ])
            .then(([restaurants, bars]) => {
                const restaurantsWithType = restaurants.map((r: Spot) => ({
                    ...r,
                    type: "restaurant"
                }))
                const barsWithType = bars.map((b: Spot) => ({
                    ...b,
                    type: "bar"
                }))
                setSpots([...restaurantsWithType, ...barsWithType])
            })
            .catch(err => console.error("Error fetching spots:", err))
    }, [])

    return spots
}

export default function Spots() {
    const { t } = useLanguage()
    const spots = useSpotsData()

    const restaurants = spots.filter(s => s.type === "restaurant")
    const bars = spots.filter(s => s.type === "bar")

    return (
        <>
            <section className="spot-hero">
                <h1>{t("spots.hero.title")}</h1>
            </section>

            <section className="spots-about">
                <img
                    src="/img/spot-about.webp"
                    alt={t("spot.hero.title")}
                    className="about-picture"
                />
                <div className="spot-description">
                    <h3>{t("spots.description.title")}</h3>
                    <p>{t("spots.description")}</p>
                    <p>{t("spots.paragraph")}</p>
                </div>
            </section>

            <section className="spot-cards">
                <h2>{t("spot.restaurant.title")}</h2>
                {restaurants.map(r => (
                    <article className="spot-card" key={r.id}>
                        <div className="spot-header">
                            <h3>{t(r.name)}</h3>
                            <h4>{r.address}</h4>
                        </div>
                        <p>{t(r.description)}</p>
                        <div className="spot-image-container">
                            <img src={r.image1} alt={t(r.name)} />
                            <img src={r.image2} alt={t(r.name)} className="second" />
                            <img src={r.image3} alt={t(r.name)} className="third" />
                        </div>
                    </article>
                ))}

                <h2>{t("spot.bar.title")}</h2>
                {bars.map(b => (
                    <article className="spot-card" key={b.id}>
                        <div className="spot-header">
                            <h3>{t(b.name)}</h3>
                            <h4>{b.address}</h4>
                        </div>
                        <p>{t(b.description)}</p>
                        <div className="spot-image-container">
                            <img src={b.image1} alt={t(b.name)} />
                            <img src={b.image2} alt={t(b.name)} className="second" />
                            <img src={b.image3} alt={t(b.name)} className="third" />
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}
