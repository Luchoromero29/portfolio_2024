import { useTranslation } from "react-i18next"
import TitleSection from "./TitleSection";
import Typography from "./Typography";
import ItemSkillVento from "./ItemSkillVento";
import jsonSkills from "../data/skills.json";
import { useEffect, useState } from "react";


const Skills = () => {
  
  const { t } = useTranslation(["content"]);

  const skills = jsonSkills;
  const [react, cloudinary, java, jquery, mysql, nodejs, php, tailwind, typescript, materialui, javascript] = skills;
  console.log(react, cloudinary, java, jquery, mysql, nodejs, typescript, materialui, javascript, tailwind, php);
  
  



    return (
    <section className="dark:text-white w-full">
        <TitleSection title={t("skills.title")} />
        <main className="">
          <div>
            <Typography variant="h4">Frontend</Typography>
            <div className="grid grid-cols-4 grid-rows-3">
              <div className="col-span-1 row-span-2">
                <ItemSkillVento name={react.name} img={react.image} />
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