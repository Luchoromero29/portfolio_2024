import { useEffect, useState } from "react";


//Icons
import sunIcon from "../assets/icons/sun.png";
import moonIcon from "../assets/icons/moon-dark.png";


const ButtonTheme = () => {

    const [theme, setTheme] = useState(() => {
        console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
        
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }

        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };


    return (
        <div>
            <button
                className="bg-light-surface dark:bg-dark-secondary  p-1 dark:text-white px-1 rounded-full shadow-md flex justify-center items-center"
                onClick={handleChangeTheme}>
                <img src={theme === "dark" ? sunIcon : moonIcon} className="w-8"/>
            </button>
        </div>
    )
}

export default ButtonTheme