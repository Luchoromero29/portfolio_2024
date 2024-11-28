import ReactTypingEffect from "react-typing-effect"
import Typography from "./Typography"

//imagenes
import imagenPerfil from '../assets/imgs/foto-perfil.png'
import { useTranslation } from "react-i18next";

const Aboutme = () => {

    const { t } = useTranslation(["content"]);

    return (
        <section id="aboutme" className="relative flex items-center justify-center gap-10 md:flex-row flex-col">
            <div className='dark:text-white flex flex-col  h-full gap-5' >
                <div className='flex justify-center items-center text-wrap h-[170px] md:justify-start'>
                    <ReactTypingEffect
                        text={[t("title"), t("welcome")]}
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={2000}
                        typingDelay={500}
                        className="gradient-text"
                    />
                </div>
                <Typography variant="span">{t("presentation")}</Typography>
            </div>
            <div className="background-image p-10 bg-white bubble-animation rounded-full overflow-hidden flex items-center justify-center m-10 sm:m-0 sm:min-w-[300px] sm:min-h-[300px]">
                <img
                    src={imagenPerfil}
                    alt="Perfil"
                    className="w-full h-full object-cover max-w-[350px]"
                />
            </div>
        </section>
    )
}

export default Aboutme