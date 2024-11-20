//hooks
import { useTranslation } from 'react-i18next';

//icons
import language_dark from "../assets/icons/language-dark.png"
import language_light from "../assets/icons/language-light.png"
const ButtonLanguage = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Cambia el idioma
    };




    return (
        <div>
            <button className="bg-light-surface dark:bg-dark-secondary p-2 rounded-full flex items-center justify-center shadow-md">
                <img
                    src={language_dark} // Imagen por defecto (tema oscuro)
                    className="w-6 dark:hidden" // Ocultar esta imagen en tema oscuro
                    alt="Cambiar idioma"
                    onClick={() => changeLanguage(i18n.language === "es" ? "en" : "es")}
                />
                <img
                    src={language_light} // Imagen para tema claro
                    className="w-6 hidden dark:block" // Mostrar solo en tema oscuro
                    alt="Cambiar idioma"
                    onClick={() => changeLanguage(i18n.language === "es" ? "en" : "es")}
                />
            </button>
        </div>
    )
}

export default ButtonLanguage