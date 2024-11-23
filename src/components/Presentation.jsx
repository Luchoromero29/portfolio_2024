//estilos
import '../styles/Presentation.css'

import Aboutme from './Aboutme';
import Education from './Education';

const Presentation = () => {
    return (
        <section className="section flex flex-col justify-center items-center h-full w-full gap-8">
            <Aboutme />
            <Education />
        </section>
    )
}

export default Presentation
