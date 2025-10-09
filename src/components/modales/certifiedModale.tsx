import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";
import "./modale.css"

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
}

function useCertifiedDiveData() {
    const [certifiedDiveInfos, setCertifiedDiveInfos] = useState<CertifiedDive[]>([]);
    useEffect(() => {
        fetch("/data/certified_dive.json")
            .then((res) => res.json())
            .then(setCertifiedDiveInfos)
            .catch((err) => console.error("Error fetching certufied dive data:", err));
    }, []);
    return certifiedDiveInfos;
}

export default function CertifiedDiverModale({ isOpen, onClose }: Props) {
    const certifiedDives = useCertifiedDiveData();
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <>
            <section className="dive-card-wrapper">
                <article className="dive-card">
                    <button className="close" onClick={onClose} aria-label="Close">
                        &times;
                    </button>

                    {certifiedDives.map((certifiedDive) => (
                        <div key={certifiedDive.id} className="dive-infos">
                            <div className="dive-card-left">
                                <h2>{t(certifiedDive.title)}</h2>
                                <p>{t(certifiedDive.description)}</p>
                                <p>{t(certifiedDive.highlights)}</p>
                                <p>{t(certifiedDive.final_word)}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}