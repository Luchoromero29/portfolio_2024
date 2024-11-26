import { useTranslation } from "react-i18next";
import Typography from "./Typography";

//imagenes
import homeFitbyte from "../assets/imgs/fitbyte/home-fitbyte.png"
import rutinaFitbyte from "../assets/imgs/fitbyte/rutina-fitbyte.png"
import planFitbyte from "../assets/imgs/fitbyte/plan-fitbyte.png"
import { useEffect, useState } from "react";

const ItemProject = () => {

    const { t } = useTranslation(["content"]);

    const title = t("projects.fitbyte.title");

    const imagenes = [homeFitbyte, rutinaFitbyte, planFitbyte];


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Cambia al siguiente índice
            setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [imagenes.length]);

    return (
        <div className=" dark:text-white min-h-[520px] p-10 border-2 rounded-lg border-dark-secondary">

            <header >
                <Typography variant="title-project">{title}</Typography>
            </header>
            <main className="flex flex-col sm:flex-row sm:h-[440px] h-[650px] gap-5">
                <div className="w-[60%] sm:h-full items-center flex flex-col justify-center">
                    <Typography variant="span">{t("projects.fitbyte.description")}</Typography>
                </div>
                <div className="flex-grow items-center justify-center">
                    <div className="flex items-center justify-center relative">
                        {imagenes.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className={`h-[400px] top-0 absolute w-auto transform transition-all duration-700 ease-in-out
                                        ${index === activeIndex
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-10 scale-95"}`} />
                        ))}
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default ItemProject