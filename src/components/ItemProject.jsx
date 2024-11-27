import { useTranslation } from "react-i18next";
import Typography from "./Typography";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemSkill from "./ItemSkill";

const ItemProject = ({ project }) => {
    const { t } = useTranslation(["content"]);

    const title = t(`projects.${project.name}.title`);
    const images = project.images;
    const skills = project.skills;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Cambia al siguiente índice
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [images.length]);

    return (
        <div className="dark:text-white p-4 border-2 rounded-lg border-light-border">
            <header>
                <Typography variant="title-project">{title}</Typography>
            </header>
            <main className="flex flex-col sm:flex-row sm:gap-5 gap-5 items-center relative min-h-[440px]">
                <div className="sm:w-full flex-grow sm:h-full items-center flex flex-col justify-center gap-4">
                    <Typography variant="span">{t("projects.fitbyte.description")}</Typography>
                    <div className="flex gap-2 flex-wrap">
                        {skills.map((skill, index) => (
                            <ItemSkill name={skill.name} img={skill.img} key={index} />
                        ))}
                    </div>
                </div>

                <div className=" items-center justify-center relative w-[450px]">
                    <div className="relative w-full h-[400px] sm:h-[450px] flex justify-center items-center">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className={`${
                                    project.platform === "desktop"
                                        ? "h-[180px] top-0 sm:top-28"
                                        : "h-[400px]"
                                } top-0 sm:top-5 absolute w-auto object-contain transform transition-all duration-700 ease-in-out ${
                                    index === activeIndex
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-10 scale-95"
                                }`}
                                alt={`Project ${index}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <footer>
                {/* Aquí puedes agregar más contenido si es necesario */}
            </footer>
        </div>
    );
};

export default ItemProject;

ItemProject.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        skills: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
            })
        ).isRequired,
        platform: PropTypes.string.isRequired,
    }).isRequired,
};
