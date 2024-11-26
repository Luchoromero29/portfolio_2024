import { useTranslation } from "react-i18next";
import TitleSection from "./TitleSection"
import ItemProject from "./ItemProject";


const Projects = () => {

  const { t } = useTranslation(["content"]);

  return (
    <div className="w-full dark:text-white">
        <TitleSection title={t("projects.title")} />
        
        <main className="py-10">  

        <ItemProject  />

        </main>

    </div>
  )
}

export default Projects