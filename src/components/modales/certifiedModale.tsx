import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";
import WhattsappButton from "../WhatsappButton/WhatsappButton";
import "./modale.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

interface CertifiedDive {
    id: number;
    title: string;
    description: string;
    highlights: string;
    final_word: string;
    image1?: string;
    image2?: string;
    image3?: string;
}

function useCertifiedDiveData() {
    const [certifiedDiveInfos, setCertifiedDiveInfos] = useState<CertifiedDive[]>([]);
    useEffect(() => {
        fetch("/data/certified_dive.json")
            .then((res) => res.json())
            .then(setCertifiedDiveInfos)
            .catch((err) => console.error("Error fetching certified dive data:", err));
    }, []);
    return certifiedDiveInfos;
}

export default function CertifiedDiverModale({ isOpen, onClose }: Props) {
    const certifiedDives = useCertifiedDiveData();
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <section className="dive-card-wrapper">
            <article className="dive-card">
                <button className="close" onClick={onClose} aria-label="Close">
                    &times;
                </button>

                {certifiedDives.map((certifiedDive) => (
                    <CertifiedDiveContent key={certifiedDive.id} dive={certifiedDive} t={t} />
                ))}
            </article>
        </section>
    );
}

function CertifiedDiveContent({
    dive,
    t,
}: {
    dive: CertifiedDive;
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
