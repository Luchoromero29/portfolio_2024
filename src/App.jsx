
import Header from './components/Header'
import Presentation from './components/Presentation'

//estilos
import './Style.css'

//componentes
import { Suspense } from 'react'


function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <div className='h-full dark:bg-dark-primary w-full'>
        <Header></Header>

        <div className='flex flex-col justify-center items-center h-full w-screen pt-[72px]'>

          <Presentation></Presentation>


        </div>
      </div>
    </Suspense>
  )
}

export default App
