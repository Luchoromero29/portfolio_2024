import { useTranslation } from "react-i18next";
import ItemExperience from "./ItemExperience"
import Typography from "./Typography";
import TitleSection from "./TitleSection";
import { useState } from "react";

const Experiencie = () => {


    //const weightLine = 1;
    const { t } = useTranslation(["content"]);

    const [viewMore, setViewMore] = useState(false);

    const handleViewMore = () => {
        setViewMore(!viewMore);
    }

    return (
        <section id="experience" className='flex gap-10  flex-col relative' >
            <header className='dark:text-white w-full text-center '>
                <TitleSection title={t("education.title")} />
            </header>
            <main className="flex flex-col">

                <section className='flex  gap-8 relative'>
                    <div className='flex sm:w-[45%]' >

                    </div>
                    <div className='' >
                        <div className=' line-education-color line-education rounded-b-md'>
                            <div className='container-date-ball'>
                                <div className='date-ball'>
                                    <Typography variant="span">2024</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  sm:w-[45%] flex-col gap-4' >
                        <ItemExperience
                            title={t("education.freelance.title")}
                            description={t("education.freelance.description")}
                            institution={t("education.freelance.institution")}
                        />
                        <ItemExperience
                            title={t("education.bootcamp.title")}
                            description={t("education.bootcamp.description")}
                            institution={t("education.bootcamp.institution")}
                        />
                    </div>
                </section>
                <section className="flex justify-center items-center flex-col px-8 sm:hidden">
                    <div className="flex items-center justify-start w-full">
                        <div className={`w-1  h-6 line-education-color line-education-color`}></div>
                    </div>
                    <div className={`h-1 w-full  rounded-bl-md rounded-tr-md line-education-color line-education-color`}>
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <div className={`w-1  h-6 line-education-color line-education-color`}></div>
                    </div>
                </section>
                <section className='flex   gap-8 relative'>
                    <div className='flex sm:w-[45%] flex-col gap-4' >
                        <ItemExperience
                            title={t("education.javascript-course.title")}
                            description={t("education.javascript-course.description")}
                            institution={t("education.javascript-course.institution")}
                        />
                        <ItemExperience
                            title={t("education.ing-sistemas.title")}
                            description={t("education.ing-sistemas.description")}
                            institution={t("education.ing-sistemas.institution")}
                        />
                    </div>
                    <div className='' >
                        <div className=' line-education-color line-education '>
                            <div className='container-date-ball'>
                                <div className='date-ball'>
                                    <Typography variant="span">2023</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  sm:w-[45%]'>

                    </div>
                </section>




                <section className="flex justify-center items-center flex-col px-8 sm:hidden">
                    <div className="flex items-center justify-end w-full">
                        <div className={`w-1 h-6 line-education-color line-education-color`}></div>
                    </div>
                    <div className={`h-1 w-full rounded-tl-md rounded-br-md line-education-color line-education-color`}>
                    </div>
                    <div className="flex items-center justify-start w-full">
                        <div className={`w-1  h-6 line-education-color line-education-color`}></div>
                    </div>
                </section>
                <div className={`${viewMore ? "block" : "hidden"}`}>

                    <section className='flex   gap-8 relative'>
                        <div className='flex sm:w-[45%]' >
                        </div>
                        <div>
                            <div className=' line-education-color line-education'>
                                <div className='container-date-ball'>
                                    <div className='date-ball'>
                                        <Typography variant="span">2022</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex  sm:w-[45%]'>
                            <ItemExperience
                                title={t("education.ing-civil.title")}
                                description={t("education.ing-civil.description")}
                                institution={t("education.ing-civil.institution")}
                            />
                        </div>
                    </section>



                    <section className="flex justify-center items-center flex-col px-8 sm:hidden">
                        <div className="flex items-center justify-start w-full">
                            <div className={`w-1  h-6 line-education-color line-education-color`}></div>
                        </div>
                        <div className={`h-1 w-full  rounded-bl-md rounded-tr-md line-education-color line-education-color`}>
                        </div>
                        <div className="flex items-center justify-end w-full">
                            <div className={`w-1  h-6 line-education-color line-education-color`}></div>
                        </div>
                    </section>


                    <section className='flex   gap-8 relative'>
                        <div className='flex w-[90%] sm:w-[45%]' >
                            <ItemExperience
                                title={t("education.fullstack-java-course.title")}
                                description={t("education.fullstack-java-course.description")}
                                institution={t("education.fullstack-java-course.institution")}
                            />
                        </div>
                        <div className='' >
                            <div className='line-education-color line-education rounded-t-md'>
                                <div className='container-date-ball'>
                                    <div className='date-ball'>
                                        <Typography variant="span">2021</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex  sm:w-[45%]'>

                        </div>
                    </section>
                </div>

                <section
                    className={`dark:text-white flex justify-center items-center h-16 
                            bg-gradient-blur backdrop-blur-sm absolute bottom-[-10px] w-full
                            bg-gradient-to-b from-transparent to-primary/60 dark:to-dark-primary
                            ${viewMore ? 'hidden' : ''} border-t-2 border-primary
                        `}
                >
                    <button onClick={handleViewMore} className="">
                        <Typography variant="h4">{t("viewmore")}</Typography>
                    </button>
                </section>
            </main>
        </section>
    )
}

export default Experiencie