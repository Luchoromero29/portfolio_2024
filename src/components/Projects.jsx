import { useTranslation } from "react-i18next";
import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject";

//imagenes fitbyte 
import homeFitbyte from "../assets/imgs/fitbyte/home-fitbyte.png"
import rutinaFitbyte from "../assets/imgs/fitbyte/rutina-fitbyte.png"
import planFitbyte from "../assets/imgs/fitbyte/plan-fitbyte.png"

//imagenes ubuntu
import homeUbuntu from "../assets/imgs/ubuntu/ubuntu-home.png"
import solicitudesUbuntu from "../assets/imgs/ubuntu/ubuntu-solicitudes.png"
import microUbuntu from "../assets/imgs/ubuntu/ubuntu-microemprendimiento.png"

//imagenes de a3
import listaEquipos from "../assets/imgs/a3/lista-equipos.png"
import infoPersona from "../assets/imgs/a3/info-persona.png"
import formularioEquipo from "../assets/imgs/a3/formulario-equipo.png"

//imagenes de skills
import iconReact from "../assets/icons/react.png";
import iconCloudinary from "../assets/icons/cloudinary.png";
import iconJava from "../assets/icons/java.png";
import iconJquery from "../assets/icons/jquery.png";
import iconMysql from "../assets/icons/mysql.png";
import iconNodejs from "../assets/icons/nodejs.png";
import iconPhp from "../assets/icons/php.png";
import iconTailwind from "../assets/icons/tailwind.png";
import iconTypescript from "../assets/icons/typescript.png";
import iconMaterialui from "../assets/icons/materialui.png";
import iconJavascript from "../assets/icons/javascript.png";




const Projects = () => {

  const { t } = useTranslation(["content"]);

  const projects = {
    fitbyte: {
      platform: "mobile",
      images: [homeFitbyte, rutinaFitbyte, planFitbyte],
      name: "fitbyte",
      skills: [{
        name: "React",
        img: iconReact 
      },{
        name: "Tailwind CSS",
        img: iconTailwind
      },{
        name: "Cloudinary",
        img: iconCloudinary
      },{
        name: "Typescript",
        img: iconTypescript
      },{
        name: "Node JS",
        img: iconNodejs
      },{
        name: "MySQL",
        img: iconMysql
      }]
    },
    ubuntu: {
      platform: "mobile",
      images: [homeUbuntu, solicitudesUbuntu, microUbuntu],
      name: "ubuntu",
      skills: [{
        name: "React",
        img: iconReact 
      },{
        name: "Cloudinary",
        img: iconCloudinary
      },{
        name: "Java",
        img: iconJava
      },{
        name: "MySQL",
        img: iconMysql
      },{
        name: "Material UI",
        img: iconMaterialui
      }]
    },
    a3: {
      platform: "desktop",
      images: [infoPersona, formularioEquipo, listaEquipos],
      name: "a3",
      skills: [{
        name: "Javascript",
        img: iconJavascript
      },{
        name: "JQuery",
        img: iconJquery
      },{
        name: "PHP",
        img: iconPhp
      },{
        name: "Tailwind CSS",
        img: iconTailwind
      }]
    }

  }

  return (
    <div className="w-full dark:text-white">
        <TitleSection title={t("projects.title")} />
        <main className="py-10 flex flex-col gap-5">  
          <ItemProject project={projects.fitbyte}/>
          <ItemProject project={projects.ubuntu}/>
          <ItemProject project={projects.a3}/>
        </main>
    </div>
  )
}

export default Projects