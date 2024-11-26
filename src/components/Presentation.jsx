//estilos
import '../styles/Presentation.css'

import Aboutme from './Aboutme';
import Experiencie from './Experience';


const Presentation = () => {
    return (
        <section className="section flex flex-col justify-center items-center h-full w-full gap-8">
            <Aboutme />
            <Experiencie />
        </section>
    )
}

export default Presentation
