import React, { useState } from 'react'
import { NumeroLatinARomano } from './NumeroLatinARomano'


export const AppLaR = () => {
    
    
    
    const [inputLatino, setInputLatino] = useState([])
   
    const [result, setResult] = useState([])
    
    const handleInputChange = (e) => {
       setInputLatino(e.target.value)
            

    }


    const handleSubmit = (e) => {
            e.preventDefault();
            setResult(inputLatino)
            setInputLatino([''])

          
    }
    
    
    
    
    
    
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input 
                    type="number" 
                    value = {inputLatino}
                    onChange={handleInputChange}
                    />

                    <button onClick={handleSubmit}>Convertir!</button>
                </form>
                        
                     <NumeroLatinARomano result={result}/>


        </div>
    )
}
