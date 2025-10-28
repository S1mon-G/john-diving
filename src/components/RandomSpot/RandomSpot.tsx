import { useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "../../pages/Spots/Spots.css"

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

function getRandomSpot(spots: Spot[]) {
    if (!spots.length) return null
    const index = Math.floor(Math.random() * spots.length)
    return spots[index]
}

export default function RandomSpot() {
    const { t } = useLanguage()
    const spots = useSpotsData()
    const randomSpot = getRandomSpot(spots)

    if (!randomSpot) return null

    return (
        <section className="spot-cards">
            <article className="spot-card" key={randomSpot.id}>
                <div className="spot-header">
                    <h3>{t(randomSpot.name)}</h3>
                    <h4>{randomSpot.address}</h4>
                </div>
                <p>{t(randomSpot.description)}</p>
                <div className="spot-image-container">
                    <img src={randomSpot.image1} alt={t(randomSpot.name)} />
                    {randomSpot.image2 && (
                        <img src={randomSpot.image2} alt={t(randomSpot.name)} className="second" />
                    )}
                    {randomSpot.image3 && (
                        <img src={randomSpot.image3} alt={t(randomSpot.name)} className="third" />
                    )}
                </div>
            </article>
        </section>
    )
}
