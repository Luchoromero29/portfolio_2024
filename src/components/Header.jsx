import ButtonTheme from "./ButtonTheme";
import Typography from "./Typography";

//estilos
import '../styles/HeaderStyle.css'

//hooks
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//componentes
import ButtonLanguage from "./ButtonLanguage";

//assets
import listDark from "../assets/icons/list-dark.png";
import listLight from "../assets/icons/list-light.png";
import closeDark from "../assets/icons/close-dark.png";
import closeLight from "../assets/icons/close-light.png";

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { t } = useTranslation(["content"]);

  // Monitorear el tamaño de la ventana para activar el modo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    // Ejecutar en montaje y al redimensionar
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const listItem = document.querySelectorAll("#nav-menu li");
    const menuBackdrop = document.getElementById("menu-backdrop");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        menuBackdrop.style.setProperty("--left", `${left}px`);
        menuBackdrop.style.setProperty("--top", `${top}px`);
        menuBackdrop.style.setProperty("--width", `${width}px`);
        menuBackdrop.style.setProperty("--height", `${height}px`);

        menuBackdrop.style.opacity = "1";
        menuBackdrop.style.display = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackdrop.style.opacity = "0";
        menuBackdrop.style.display = "hidden";
      });
    });
  }, []);

  return (
    <header
      className="fixed w-full h-18 bg-light-primary/50 flex justify-center items-center border-b-[1px] border-gray-300
    dark:bg-dark-primary/60 backdrop-blur-sm dark:border-gray-700 z-50"
    >
      <div className="py-4 px-2 w-[800px] flex justify-between items-center font-nunito text-3xl dark:text-white">
        <div className="flex items-center gap-2">
          <ButtonLanguage />
          <ButtonTheme />
        </div>

        {/* Botón para menú móvil */}
        {isMobile ? (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl dark:text-white"
          >
            <img className="dark:hidden w-6" src={isMobileMenuOpen ? closeDark : listDark} />
            <img className="w-6 hidden dark:block" src={isMobileMenuOpen ? closeLight : listLight} />
          </button>
        ) : (
          <nav id="nav-menu">
            <ul className="flex items-center justify-center [&>li>a]:inline-block [&>li>a]:px-2 text-nowrap">
              <li className="relative cursor-pointer header-element">
                <a>
                  <Typography variant="h4">{t("navbar.about")}</Typography>
                  <span className="underline"></span>
                </a>
              </li>
              <li className="relative cursor-pointer header-element">
                <a>
                  <Typography variant="h4">{t("navbar.experience")}</Typography>
                  <span className="underline"></span>
                </a>
              </li>
              <li className="relative cursor-pointer header-element">
                <a>
                  <Typography variant="h4">{t("navbar.projects")}</Typography>
                  <span className="underline"></span>
                </a>
              </li>
              <li className="relative cursor-pointer header-element">
                <a>
                  <Typography variant="h4">{t("navbar.skills")}</Typography>
                  <span className="underline"></span>
                </a>
              </li>
              <li className="relative cursor-pointer header-element">
                <a>
                  <Typography variant="h4">{t("navbar.contact")}</Typography>
                  <span className="underline"></span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className="fixed top-[70px] w-full dark:text-white bg-light-primary/90 dark:bg-dark-primary/90 backdrop-blur-sm dark:border-gray-700 text-center z-50">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li className="cursor-pointer">
                <a>{t("navbar.about")}</a>
              </li>
              <li className="cursor-pointer">
                <a>{t("navbar.experience")}</a>
              </li>
              <li className="cursor-pointer">
                <a>{t("navbar.projects")}</a>
              </li>
              <li className="cursor-pointer">
                <a>{t("navbar.skills")}</a>
              </li>
              <li className="cursor-pointer">
                <a>{t("navbar.contact")}</a>
              </li>
            </ul>
        </div>
      )}

      <div
        id="menu-backdrop"
        className="absolute bg-black/5 backdrop-blur-lg rounded 
        dark:bg-gray-600/60 -z-10
        left-[var(--left)] top-[var(--top)]
        w-[var(--width)] h-[var(--height)]
        transition-all duration-300 ease-in-out opacity-0"
      ></div>
    </header>
  );
};

export default Header;
