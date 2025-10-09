import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";

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
            .catch((err) => console.error("Error fetching cenote data:", err));
    }, []);
    return certifiedDiveInfos;
}

export default function CertifiedDiverModale({ isOpen, onClose }: Props) {
    const certifiedDiveInfos = useCertifiedDiveData();
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <>
            <section>
                <article>
                    <p className="close" onClick={onClose}>
                        &times;
                    </p>

                    {certifiedDiveInfos.map((certifiedDive) => (
                        <div key={certifiedDive.id}>
                            <h2>{t(certifiedDive.title)}</h2>
                            <p>{t(certifiedDive.description)}</p>
                            <p>{t(certifiedDive.highlights)}</p>
                            <p>{t(certifiedDive.final_word)}</p>
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}