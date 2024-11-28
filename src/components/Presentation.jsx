//estilos
import '../styles/Presentation.css'

import Aboutme from './Aboutme';
import Experiencie from './Experience';


const Presentation = () => {
    return (
        <section className="section flex sm:pt-[200px] pt-[50px] flex-col justify-center items-center h-full w-full gap-[200px]">
            <Aboutme />
            <Experiencie />
        </section>
    )
}

export default Presentation
