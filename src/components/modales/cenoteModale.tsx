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
    image?: string;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

function useCenoteData() {
    const [cenoteInfos, setCenoteInfos] = useState<Cenote[]>([]);
    useEffect(() => {
        fetch("/data/cenotesv2.json")
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
                <p className="close" onClick={onClose}>
                    &times;
                </p>

                {cenoteInfos.map((cenote) => (
                    <div key={cenote.id} className="cenote-infos">
                        <div className="cenote-left">
                            <h2>{t(cenote.title)}</h2>
                            <p>{t(cenote.description)}</p>

                            <h3>{t('diving.title.highlight')}</h3>
                            <ul>
                                {cenote.highlights.map((item, i) => (
                                    <li key={i}>{t(item)}</li>
                                ))}
                            </ul>

                            <h3>{t('diving.title.dive')}</h3>
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
                            <img
                                src="img/jd-cenote-test.JPG"
                                alt={cenote.title}
                            />
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
}
