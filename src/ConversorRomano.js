import React from 'react'
import { AppLaR } from './calculos/LatinoARomano/AppLaR'



export const ConversorRomano = () => {
   
     return (
        
            <div id="principalCard">

                    <h1>¡Bienvenido a mi conversor de numeros romanos!</h1>

                        <span>Esta maquina super poderosa se encargara de transformar aquel numero que siempre quisiste ver su equivalente  en numeros romanos</span>
                            <code>(siempre y cuando no sea mayor a 3999)</code>
                        
                        <AppLaR />
                        

                <code>¡Gracias por visitar mis primeros proyectos!</code>
                

                <a id='gitLogo' href='https://github.com/iFaaka'><box-icon type='logo' name='github'></box-icon></a>
            </div>
        
    )
}



export default ConversorRomano