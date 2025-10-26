import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import WhattsappButton from "../WhatsappButton/WhatsappButton";
import "./firstDiveModale.css";
import "./modale.css";

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
    image1?: string;
    image2?: string;
    image3?: string;
}

function useFirstDiveData() {
    const [firstDiveInfos, setFirstDiveInfos] = useState<FirstDive[]>([]);
    useEffect(() => {
        fetch("data/first_dive.json")
            .then((res) => res.json())
            .then(setFirstDiveInfos)
            .catch((err) => console.error("Error fetching first dive data", err));
    }, []);
    return firstDiveInfos;
}

export default function FirstDiveModale({ isOpen, onClose }: Props) {
    const firstDives = useFirstDiveData();
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <section className="dive-card-wrapper">
            <article className="dive-card">
                <button className="close" onClick={onClose} aria-label="Close">
                    &times;
                </button>

                {firstDives.map((firstDive) => (
                    <FirstDiveContent key={firstDive.id} dive={firstDive} t={t} />
                ))}
            </article>
        </section>
    );
}

function FirstDiveContent({
    dive,
    t,
}: {
    dive: FirstDive;
    t: (key: string) => string;
}) {
    const images = [dive.image1, dive.image2, dive.image3].filter(Boolean);
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="dive-infos">
            <div className="dive-card-left">
                <h2>{t(dive.title)}</h2>
                <p>{t(dive.description)}</p>
                <p>{t(dive.highlights)}</p>
                <p>{t(dive.final_word)}</p>
                <div className="cenote-contact">
                    <WhattsappButton />
                </div>
            </div>

            {images.length > 0 && (
                <div className="dive-card-right">
                    <div className="carousel">
                        <img
                            src={images[index]}
                            alt={`${dive.title} image ${index + 1}`}
                            className="carousel-image"
                        />
                        {images.length > 1 && (
                            <div className="carousel-controls">
                                <button onClick={prev} aria-label="Previous image">
                                    ‹
                                </button>
                                <button onClick={next} aria-label="Next image">
                                    ›
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
