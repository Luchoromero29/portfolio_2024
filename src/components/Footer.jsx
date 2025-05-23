import { useState } from "react";
import Typography from "./Typography";

//imagenes
import logoLr from "/assets/imgs/logo-lr.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["content"]);

  const handleScroll = (e) => {
    e.preventDefault();

    console.log(e.target.closest("a").getAttribute("href").substring(1));

    const targetId = e.target.closest("a").getAttribute("href").substring(1);

    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
      top: offsetTop - 200, // Ajuste para dejar espacio en la parte superior (por ejemplo, 60px)
      behavior: "smooth",
    });
  };

  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="dark:text-white  w-full flex items-center  flex-col px-10 py-5 gap-5 border-t-2 dark:border-dark-secondary border-dark-secondary/30">
      <div className="flex flex-col sm:flex-row gap-5 sm:items-start items-center max-w-[800px] w-full justify-between  ">
        <div className="flex  items-start justify-start">
          <div className="flex gap-2 items-center justify-center">
            <img src={logoLr} className="w-8" />
            <Typography variant="span-bold">{t("footer.title")}</Typography>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <Typography variant="span-bold">{t("footer.linksSite")}</Typography>
            <div className="flex flex-col gap-2">
              <a
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="#aboutme"
                onClick={handleScroll}
              >
                <Typography variant="span">{t("navbar.about")}</Typography>
              </a>
              <a
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="#experience"
                onClick={handleScroll}
              >
                <Typography variant="span">{t("navbar.experience")}</Typography>
              </a>
              <a
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="#projects"
                onClick={handleScroll}
              >
                <Typography variant="span">{t("navbar.projects")}</Typography>
              </a>
              <a
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="#skills"
                onClick={handleScroll}
              >
                <Typography variant="span">{t("navbar.skills")}</Typography>
              </a>
              <a
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="#contact"
                onClick={handleScroll}
              >
                <Typography variant="span">{t("navbar.contact")}</Typography>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="span-bold">
              {t("footer.linksSocial")}
            </Typography>
            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="https://www.instagram.com/luchonromero_/"
              >
                Instagram
              </a>
              <a
                target="_blank"
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="https://www.linkedin.com/in/lucianoromerosilva/"
              >
                Linkedin
              </a>
              <a
                target="_blank"
                className="cursor-pointer hover:text-secondary transition duration-150"
                href="https://github.com/Luchoromero29"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full dark:bg-dark-secondary bg-dark-secondary/30 max-w-[800px]"></div>
      <div className="flex items-center justify-center">
        <Typography variant="span">Copyright © {year}</Typography>
      </div>
    </footer>
  );
};

export default Footer;
