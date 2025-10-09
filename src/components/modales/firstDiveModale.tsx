import { useEffect, useState } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./firstDiveModale.css"
import "./modale.css"

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

interface FirstDive {
    id: number;
    title: string;
    description: string;
    highlights: string;
    final_word: string;
}

function useFirstDiveData() {
    const [firstDiveInfos, setFirstDiveInfos] = useState<FirstDive[]>([]);
    useEffect(() => {
        fetch("data/first_dive.json")
            .then((res) => res.json())
            .then(setFirstDiveInfos)
            .catch((err) => console.error("Error fetching first dive data", err))
    }, []);
    return firstDiveInfos
}

export default function FirstDiveModale({ isOpen, onClose }: Props) {
    const firstDives = useFirstDiveData()
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <>
            <section className="dive-card-wrapper">
                <article className="dive-card">

                    <button className="close" onClick={onClose} aria-label="Close">
                        &times;
                    </button>

                    {firstDives.map((firstDive) => (
                        <div key={firstDive.id} className="dive-infos">
                            <div className="dive-card-left">
                                <h2>{t(firstDive.title)}</h2>
                                <p>{t(firstDive.description)}</p>
                                <p>{t(firstDive.highlights)}</p>
                                <p>{t(firstDive.final_word)}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}