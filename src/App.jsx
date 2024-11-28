
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Presentation from './components/Presentation.jsx'
import Projects from './components/Projects.jsx'

//estilos
import './Style.css'

//componentes
import { Suspense } from 'react'


function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <div className='h-full dark:bg-dark-primary w-full flex flex-col justify-center items-center'>
        <Header />

        <div className='flex flex-col justify-center items-center h-full w-fullpt-[72px] max-w-[800px] mx-2 gap-[200px]'>

          <Presentation />
          <Projects />
          <Contact />

        </div>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
