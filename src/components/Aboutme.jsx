import ReactTypingEffect from "react-typing-effect"
import Typography from "./Typography"

//imagenes
import imagenPerfil from '/assets/imgs/foto-perfil.png'
import { useTranslation } from "react-i18next";

const Aboutme = () => {

    const { t } = useTranslation(["content"]);

    return (
        <section id="aboutme" className="relative flex items-center justify-center gap-10 md:flex-row flex-col">
            <div className='dark:text-white flex flex-col  h-full gap-5' >
                <div className='flex justify-center items-center text-wrap h-[170px] md:justify-start'>
                    <ReactTypingEffect
                        text={[t("welcome"), t("title") ]}
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={2000}
                        typingDelay={500}
                        className="gradient-text"
                    />
                </div>
                <Typography variant="span">{t("presentation")}</Typography>
                <div className="flex justify-center items-center w-full">
                    <a
                    href="/data/CV Luciano Romero - Programador.pdf" 
                    download="CV-Luciano-Romero.pdf" 
                    className=" bg-secondary p-2 rounded-3xl shadow-md background-image text-gray cursor-pointer hover:text-black duration-150 w-40 flex justify-center items-center"> 
                        <Typography variant="span-bold">{t("cv")}</Typography>
                    </a>
                </div>
            </div>
            <div className="background-image p-10 bg-white bubble-animation rounded-full overflow-hidden flex items-center justify-center m-10 sm:m-0 sm:min-w-[300px] sm:min-h-[300px]">
                <img
                    src={imagenPerfil}
                    alt="Perfil"
                    className="w-full h-full object-cover max-w-[450px]"
                />
            </div>
        </section>
    )
}

export default Aboutme