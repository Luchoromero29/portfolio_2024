import { useEffect, useState } from "react";
import Typography from "./Typography"

//css
import "../styles/ContactStyle.css"

//imagenes
import iconLinkedin from "/assets/icons/linkedin.png"
import iconGmail from "/assets/icons/gmail.png"
import iconGithubDark from "/assets/icons/github-dark.png"
import iconGithubLight from "/assets/icons/github-light.png"
import iconCheckLight from "/assets/icons/check-light.png"

//componentes
import ButtonLink from "./ButtonLink";
import { useTranslation } from "react-i18next";
import TitleSection from "./TitleSection";

const Contact = () => {

    const [copied, setCopied] = useState(false);

    const mailToCopy = "luchonromero@gmail.com"

    const { t } = useTranslation(["content"]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(mailToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);

            // Oculta el mensaje después de 2 segundos
        } catch (error) {
            console.error("Error al copiar texto:", error);
        }
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detecta si el tema oscuro está activado
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        });

        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        
        const initialDarkMode = document.documentElement.classList.contains("dark");
        setIsDarkMode(initialDarkMode);

        
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="dark:text-white flex flex-col gap-5 mb-[200px]">
            <TitleSection title={t("contact.title")} />
            <main className="flex sm:flex-row flex-col justify-between items-center gap-4">
                <div className="sm:w-[60%]">
                    <Typography variant="span">{t("contact.description")}</Typography>
                </div>
                <div className="flex flex-col gap-2">
                    <ButtonLink href="https://www.linkedin.com/in/lucianoromerosilva/" imgSrc={iconLinkedin} altText="linkedin" text={t("contact.linkedin")} />
                    <ButtonLink href="https://github.com/Luchoromero29" imgSrc={isDarkMode ? iconGithubLight : iconGithubDark} altText="github" text={t("contact.github")} />
                    <div onClick={handleCopy}>
                        <ButtonLink imgSrc={iconGmail} altText="gmail" text={t("contact.gmail")} />
                    </div>

                </div>
            </main>
            {copied && (
                <div id="popup-msg" className={`fixed gap-2 flex justify-center items-center bottom-5 left-1/2 
                transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md 
                shadow-lg  animate-slideUp `}>
                    <img className="w-6" src={iconCheckLight} />
                    <Typography variant="span">{t("copyEmail")}</Typography>
                </div>
            )}
        </section>
    )
}

export default Contact