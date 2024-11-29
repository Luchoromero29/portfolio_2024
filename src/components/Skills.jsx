import { useTranslation } from "react-i18next"
import TitleSection from "./TitleSection";
import Typography from "./Typography";
import ItemSkillVento from "./ItemSkillVento";
import jsonSkills from "../data/skills.json";



const Skills = () => {
  
  const { t } = useTranslation(["content"]);

  const skills = jsonSkills;
  const [react, cloudinary, java, jquery, mysql, nodejs, php, tailwind, typescript, 
    materialui, javascript, css, html, thymeleaf, springboot, sequelize, 
    postman, git, github, unity, autocad] = skills;
  
  
  



    return (
    <section id="skills" className="dark:text-white w-full flex flex-col gap-10">
        <TitleSection title={t("skills.title")} />
        <main className="flex flex-col gap-10">
          <div>
            <Typography variant="h4">{t("skills.frontend")}</Typography>
            <div className="grid sm:grid-cols-4 sm:grid-rows-3 grid-cols-3 grid-rows-4 gap-2 ">
              <div className="sm:col-span-1 sm:row-span-2 col-span-1 row-span-2">
                <ItemSkillVento name={javascript.name} img={javascript.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-1 col-span-1 row-span-1">
                <ItemSkillVento name={materialui.name} img={materialui.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-2 col-span-1 row-span-1">
                <ItemSkillVento name={tailwind.name} img={tailwind.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-1 col-span-1 row-span-2">
                <ItemSkillVento name={react.name} img={react.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-2 col-span-1 row-span-1">
                <ItemSkillVento name={css.name} img={css.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-2 col-span-1 row-span-1">
                <ItemSkillVento name={html.name} img={html.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-1 col-span-1 row-span-2">
                <ItemSkillVento name={thymeleaf.name} img={thymeleaf.image} />
              </div>
              <div className="sm:col-span-1 sm:row-span-1 col-span-2 row-span-1">
                <ItemSkillVento name={jquery.name} img={jquery.image} />
              </div>
            </div>
          </div>


          <div>
            <Typography variant="h4">{t("skills.backend")}</Typography>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
              <div className="col-span-1 row-span-2">
                <ItemSkillVento name={java.name} img={java.image} />
              </div>
              <div className="col-span-1 row-span-1">
                <ItemSkillVento name={nodejs.name} img={nodejs.image} />
              </div>
              <div className="col-span-1 row-span-2 ">
                <ItemSkillVento name={springboot.name} img={springboot.image} />
              </div>
              <div className="col-span-1 row-span-2 ">
                <ItemSkillVento name={sequelize.name} img={sequelize.image} />
              </div>
              <div className="col-span-1 row-span-1 ">
                <ItemSkillVento name={mysql.name} img={mysql.image} />
              </div>
              <div className="col-span-1 row-span-1">
                <ItemSkillVento name={postman.name} img={postman.image} />
              </div>
            </div>
          </div>


          <div>
            <Typography variant="h4">{t("skills.tools")}</Typography>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
              <div className="col-span-1 row-span-1">
                <ItemSkillVento name={cloudinary.name} img={cloudinary.image} />
              </div>
              <div className="col-span-1 row-span-2">
                <ItemSkillVento name={typescript.name} img={typescript.image} />
              </div>
              <div className="col-span-1 row-span-1 ">
                <ItemSkillVento name={git.name} img={git.image} />
              </div>
              <div className="col-span-1 row-span-2 ">
                <ItemSkillVento name={github.name} img={github.image} />
              </div>
              <div className="col-span-1 row-span-2 ">
                <ItemSkillVento name={unity.name} img={unity.image} />
              </div>
              <div className="col-span-1 row-span-1">
                <ItemSkillVento name={autocad.name} img={autocad.image} />
              </div>
            </div>
          </div>
        </main>
    </section>
  )
}
/* 
front
react
js
tailwind
material
css
html
thymeleaf

*/
export default Skills