import { useTranslation } from "react-i18next";
import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject";

//imagenes fitbyte 
import homeFitbyte from "/assets/imgs/fitbyte/home-fitbyte.png"
import rutinaFitbyte from "/assets/imgs/fitbyte/rutina-fitbyte.png"
import planFitbyte from "/assets/imgs/fitbyte/plan-fitbyte.png"

//imagenes ubuntu
import homeUbuntu from "/assets/imgs/ubuntu/ubuntu-home.png"
import solicitudesUbuntu from "/assets/imgs/ubuntu/ubuntu-solicitudes.png"
import microUbuntu from "/assets/imgs/ubuntu/ubuntu-microemprendimiento.png"

//imagenes de a3
import listaEquipos from "/assets/imgs/a3/lista-equipos.png"
import infoPersona from "/assets/imgs/a3/info-persona.png"
import formularioEquipo from "/assets/imgs/a3/formulario-equipo.png"

//json de skills
import jsonSkills from "../data/skills.json"





const Projects = () => {

  const { t } = useTranslation(["content"]);
  const skills = jsonSkills;
  const [react, cloudinary, java, jquery, mysql, nodejs, php, tailwind, typescript, 
    materialui, javascript ] = skills;
  const projects = {
    fitbyte: {
      platform: "mobile",
      images: [homeFitbyte, rutinaFitbyte, planFitbyte],
      name: "fitbyte",
      skills: [react, tailwind, cloudinary, typescript, nodejs, mysql]
    },
    ubuntu: {
      platform: "mobile",
      images: [homeUbuntu, solicitudesUbuntu, microUbuntu],
      name: "ubuntu",
      skills: [react, cloudinary, java, mysql, materialui]
    },
    a3: {
      platform: "desktop",
      images: [infoPersona, formularioEquipo, listaEquipos],
      name: "a3",
      skills: [javascript, jquery, php, tailwind]
    }

  }

  return (
    <section id="projects" className="w-full dark:text-white">
        <TitleSection title={t("projects.title")} />
        <main className="py-10 flex flex-col gap-5">  
          <ItemProject project={projects.fitbyte}/>
          <ItemProject project={projects.ubuntu}/>
          <ItemProject project={projects.a3}/>
        </main>
    </section>
  )
}

export default Projects