import { useEffect, useState } from "react";
import WhattsappButton from "../WhatsappButton/WhatsappButton";
import "./cenoteModale.css";

interface Cenote {
    id: number;
    title: string;
    description: string;
    highlights: string[];
    selling_points: string[];
    final_word: string;
    image?: string;
}

function useCenoteData() {
    const [cenoteInfos, setCenoteInfos] = useState<Cenote[]>([]);

    useEffect(() => {
        fetch("/data/cenotes.json")
            .then((response) => response.json())
            .then((data) => setCenoteInfos(data))
            .catch((error) => console.error("Error fetching cenote data:", error));
    }, []);

    return cenoteInfos;
}

interface CenoteModaleProps {
    onClose: () => void;
}

export default function CenoteModale({ onClose }: CenoteModaleProps) {
    const cenoteInfos = useCenoteData();

    return (
        <section className="cenote-card-wrapper">
            <article className="cenote-card">
                <p className="close" onClick={() => onClose()}>&times;</p>
                {cenoteInfos.length > 0 &&
                    cenoteInfos.map((cenote) => (
                        <div key={cenote.id} className="cenote-infos">

                            <div className="cenote-left">

                                <h2>{cenote.title}</h2>
                                <p>{cenote.description}</p>

                                <h3>Points forts</h3>
                                <ul>
                                    {cenote.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <h3>Pourquoi plonger ici ?</h3>
                                <ul>
                                    {cenote.selling_points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <p>{cenote.final_word}</p>

                                <div className="cenote-contact">
                                    <WhattsappButton />
                                </div>
                            </div>

                            <div className="cenote-right">
                                <img src="img/jd-cenote-test.JPG" alt={cenote.title} />
                            </div>
                        </div>
                    ))}

            </article>

        </section>
    );
}
