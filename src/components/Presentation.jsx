//estilos
import '../styles/Presentation.css'

//imagenes
import imagenPerfil from '../assets/imgs/foto-perfil.png'

//componentes
import Typography from './Typography'
import ReactTypingEffect from "react-typing-effect";

//hooks
import { useTranslation } from 'react-i18next'

const Presentation = () => {

    const { t } = useTranslation(["content"]);

    return (
        <section className="section flex flex-col justify-center items-center h-full w-full px-2">
            <div className="relative flex items-center justify-center gap-10 md:flex-row flex-col">
                <div className='dark:text-white flex flex-col  h-full gap-5' >
                    <div className='flex justify-start items-center text-wrap'>
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
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Presentation