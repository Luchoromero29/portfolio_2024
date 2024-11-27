import { useTranslation } from "react-i18next";
import TitleSection from "./TitleSection";
import ItemProject from "./ItemProject";

const Projects = () => {
  const { t } = useTranslation(["content"]);

  const projects = {
    fitbyte: {
      platform: "mobile",
      images: [
        "src/assets/imgs/fitbyte/home-fitbyte.png",
        "src/assets/imgs/fitbyte/rutina-fitbyte.png",
        "src/assets/imgs/fitbyte/plan-fitbyte.png",
      ],
      name: "fitbyte",
      skills: [
        { name: "React", img: "src/assets/icons/react.png" },
        { name: "Tailwind CSS", img: "src/assets/icons/tailwind.png" },
        { name: "Cloudinary", img: "src/assets/icons/cloudinary.png" },
        { name: "Typescript", img: "src/assets/icons/typescript.png" },
        { name: "Node JS", img: "src/assets/icons/nodejs.png" },
        { name: "MySQL", img: "src/assets/icons/mysql.png" },
      ],
    },
    ubuntu: {
      platform: "mobile",
      images: [
        "src/assets/imgs/ubuntu/ubuntu-home.png",
        "src/assets/imgs/ubuntu/ubuntu-solicitudes.png",
        "src/assets/imgs/ubuntu/ubuntu-microemprendimiento.png",
      ],
      name: "ubuntu",
      skills: [
        { name: "React", img: "src/assets/icons/react.png" },
        { name: "Cloudinary", img: "src/assets/icons/cloudinary.png" },
        { name: "Java", img: "src/assets/icons/java.png" },
        { name: "MySQL", img: "src/assets/icons/mysql.png" },
        { name: "Material UI", img: "src/assets/icons/materialui.png" },
      ],
    },
    a3: {
      platform: "desktop",
      images: [
        "src/assets/imgs/a3/info-persona.png",
        "src/assets/imgs/a3/formulario-equipo.png",
        "src/assets/imgs/a3/lista-equipos.png",
      ],
      name: "a3",
      skills: [
        { name: "Javascript", img: "src/assets/icons/javascript.png" },
        { name: "JQuery", img: "src/assets/icons/jquery.png" },
        { name: "PHP", img: "src/assets/icons/php-dark.png" },
        { name: "Tailwind CSS", img: "src/assets/icons/tailwind.png" },
      ],
    },
  };

  return (
    <div className="w-full dark:text-white">
      <TitleSection title={t("projects.title")} />
      <main className="py-10 flex flex-col gap-5">
        <ItemProject project={projects.fitbyte} />
        <ItemProject project={projects.ubuntu} />
        <ItemProject project={projects.a3} />
      </main>
    </div>
  );
};

export default Projects;
