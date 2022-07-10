import React from 'react'

export const NumeroLatinARomano = ({result}) => {
  
  function convertToRoman(num) {
  
  
    let myFunc = num => Number(num);
    let newArray = Array.from(String(num), myFunc)
    newArray.reverse()
    
    
    function convertirUnidades(arr) {
    
      switch(arr[0]) {
    
        case 0: 
          arr[0] = ""
        break
        case 1:
          arr[0] = "I"
        break
        case 2:
          arr[0] = "II"
        break
    
        case 3:
          arr[0] = "III"
        break
    
        case 4:
          arr[0] = "IV"
        break
    
        case 5:
          arr[0] = "V"
        break
        case 6:
          arr[0] = "VI"
        break
    
        case 7:
          arr[0] = "VII"
        break
    
        case 8:
          arr[0] = "VIII"
        break
    
        case 9:
          arr[0] = "IX"
        break
    
    
      }
    
    }
  
  
  
  
    function convertirDecenas(arr) {
    
        switch(arr[1]) {
      
          case 0: 
            arr[1] = ""
          break
          case 1:
            arr[1] = "X"
          break
          case 2:
            arr[1] = "XX"
          break
      
          case 3:
            arr[1] = "XXX"
          break
      
          case 4:
            arr[1] = "XL"
          break
      
          case 5:
            arr[1] = "L"
          break
          case 6:
            arr[1] = "LX"
          break
      
          case 7:
            arr[1] = "LXX"
          break
      
          case 8:
            arr[1] = "LXXX"
          break
      
          case 9:
            arr[1] = "XC"
          break
      
      
        }
      
      }
  
  
      function convertirCentenas(arr) {
    
        switch(arr[2]) {
      
          case 0: 
            arr[2] = ""
          break
          case 1:
            arr[2] = "C"
          break
          case 2:
            arr[2] = "CC"
          break
      
          case 3:
            arr[2] = "CCC"
          break
      
          case 4:
            arr[2] = "CD"
          break
      
          case 5:
            arr[2] = "D"
          break
          case 6:
            arr[2] = "DC"
          break
      
          case 7:
            arr[2] = "DCC"
          break
      
          case 8:
            arr[2] = "DCCC"
          break
      
          case 9:
            arr[2] = "CM"
          break
      
      
        }
      
      }
  
      function convertirMiles(arr) {
    
        switch(arr[3]) {
      
          case 0: 
            arr[3] = ""
          break
          case 1:
            arr[3] = "M"
          break
          case 2:
            arr[3] = "MM"
          break
      
          case 3:
            arr[3] = "MMM"
          break
      
          case 4:
            arr[3] = "MMMM"
          break

          case 5:
            arr[3] = "V"
          break
  
          case 6:
            arr[3] = "VM"
          break
      
          case 7:
            arr[3] = "VMM"
          break

          case 8:
            arr[3] = "VMMM"
          break

          case 9:
            arr[3] = "IX"
          break
        }
      
      }
  
  
      function conversorMegaFantiastico(arr) {
  
        switch(arr.length){
  
            case 1:
                convertirUnidades(arr)
            break
  
            case 2:
                convertirUnidades(arr)
                convertirDecenas(arr)
            break
  
            case 3:
                convertirUnidades(arr)
                convertirDecenas(arr)
                convertirCentenas(arr)
            break
  
            case 4:
                convertirUnidades(arr)
                convertirDecenas(arr)
                convertirCentenas(arr)
                convertirMiles(arr)
            break


  
  
        }
  
  
      }
  
  
      if (newArray.length > 4) {
        return "Todavia no soportamos ese valor :("
      }
      else {
        conversorMegaFantiastico(newArray)
        newArray.reverse()
      }
  

  
    
    
    
  
  

     return newArray.join("");
     
    }
  
  
  
  
  
  
  
  
  return (
    <div>
        <p id='result'>{convertToRoman(result)}</p>
    </div>
  )
}
