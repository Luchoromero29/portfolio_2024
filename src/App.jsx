
import Projects from './components/Projects'
import Header from './components/Header'
import Presentation from './components/Presentation'

//estilos
import './Style.css'

//componentes
import { Suspense } from 'react'


function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <div className='h-full dark:bg-dark-primary w-full flex justify-center'>
        <Header></Header>

        <div className='flex flex-col justify-center items-center h-full w-full pt-[72px] max-w-[800px] mx-2'>

          <Presentation></Presentation>
          <Projects></Projects>


        </div>
      </div>
    </Suspense>
  )
}

export default App
