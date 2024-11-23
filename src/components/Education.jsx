import { useTranslation } from "react-i18next";
import ItemEducation from "./ItemEducation"
import Typography from "./Typography";

const Education = () => {



    const { t } = useTranslation(["content"]);

    return (
        <div className='flex  flex-col ' >
            <header className='dark:text-white w-full text-center '>
                <Typography variant="h2">{t("education.title")}</Typography>
            </header>
            <section className='flex   gap-8 relative'>
                <div className='flex w-[45%]' >
                    <ItemEducation
                        title={t("education.fullstack-java-course.title")}
                        description={t("education.fullstack-java-course.description")}
                        institution={t("education.fullstack-java-course.institution")}
                    />
                </div>
                <div className='' >
                    <div className='line-education'>
                        <div className='container-date-ball'>
                            <div className='date-ball'>
                                <Typography variant="span">2021</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  w-[45%]'>

                </div>
            </section>

            <section className='flex   gap-8 relative'>
                <div className='flex w-[45%]' >
                </div>
                <div>
                    <div className=' line-education'>
                        <div className='container-date-ball'>
                            <div className='date-ball'>
                                <Typography variant="span">2022</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  w-[45%]'>
                    <ItemEducation
                        title={t("education.ing-civil.title")}
                        description={t("education.ing-civil.description")}
                        institution={t("education.ing-civil.institution")}
                    />
                </div>
            </section>

            <section className='flex   gap-8 relative'>
                <div className='flex w-[45%] flex-col gap-4' >
                    <ItemEducation
                        title={t("education.ing-sistemas.title")}
                        description={t("education.ing-sistemas.description")}
                        institution={t("education.ing-sistemas.institution")}
                    />
                    <ItemEducation
                        title={t("education.javascript-course.title")}
                        description={t("education.javascript-course.description")}
                        institution={t("education.javascript-course.institution")}
                    />
                </div>
                <div className='' >
                    <div className=' line-education'>
                        <div className='container-date-ball'>
                            <div className='date-ball'>
                                <Typography variant="span">2023</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  w-[45%]'>

                </div>
            </section>

            <section className='flex  gap-8 relative'>
                <div className='flex w-[45%]' >

                </div>
                <div className='' >
                    <div className=' line-education'>
                        <div className='container-date-ball'>
                            <div className='date-ball'>
                                <Typography variant="span">2024</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  w-[45%] flex-col gap-4' >
                    <ItemEducation
                        title={t("education.bootcamp.title")}
                        description={t("education.bootcamp.description")}
                        institution={t("education.bootcamp.institution")}
                    />
                    <ItemEducation
                        title={t("education.freelance.title")}
                        description={t("education.freelance.description")}
                        institution={t("education.freelance.institution")}
                    />
                </div>
            </section>
        </div>
    )
}

export default Education