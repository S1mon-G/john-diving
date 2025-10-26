import { useEffect, useState } from "react";
import WhattsappButton from "../WhatsappButton/WhatsappButton";
import "./cenoteModale.css";
import { useLanguage } from "../../contexts/LanguageContext";

interface Cenote {
    id: number;
    title: string;
    description: string;
    highlights: string[];
    selling_points: string[];
    final_word: string;
    image1?: string;
    image2?: string;
    image3?: string;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

function useCenoteData() {
    const [cenoteInfos, setCenoteInfos] = useState<Cenote[]>([]);
    useEffect(() => {
        fetch("/data/cenotes.json")
            .then((res) => res.json())
            .then(setCenoteInfos)
            .catch((err) => console.error("Error fetching cenote data:", err));
    }, []);
    return cenoteInfos;
}

export default function CenoteModale({ isOpen, onClose }: Props) {
    const cenoteInfos = useCenoteData();
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <section className="cenote-card-wrapper">
            <article className="cenote-card">
                <button className="close" onClick={onClose} aria-label="Close">
                    &times;
                </button>

                {cenoteInfos.map((cenote) => (
                    <CenoteContent key={cenote.id} cenote={cenote} t={t} />
                ))}
            </article>
        </section>
    );
}

function CenoteContent({ cenote, t }: { cenote: Cenote; t: (key: string) => string }) {
    const images = [cenote.image1, cenote.image2, cenote.image3].filter(Boolean);
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="cenote-infos">
            <div className="cenote-left">
                <h2>{t(cenote.title)}</h2>
                <p>{t(cenote.description)}</p>

                <h3>{t("diving.title.highlight")}</h3>
                <ul>
                    {cenote.highlights.map((item, i) => (
                        <li key={i}>{t(item)}</li>
                    ))}
                </ul>

                <h3>{t("diving.title.dive")}</h3>
                <ul>
                    {cenote.selling_points.map((point, i) => (
                        <li key={i}>{t(point)}</li>
                    ))}
                </ul>

                <p>{t(cenote.final_word)}</p>

                <div className="cenote-contact">
                    <WhattsappButton />
                </div>
            </div>

            <div className="cenote-right">
                <div className="carousel">
                    {images.length > 0 && (
                        <>
                            <img
                                src={images[index]}
                                alt={`${cenote.title} image ${index + 1}`}
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
