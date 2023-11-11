import React, { useState, useEffect } from 'react'
import axios from "axios"
import {useQuery} from 'react-query'

function Perfil() {
  const [salario, setSalario] = useState(0) 
  const [salarioGuardado, setSalarioGuardado] = useState(salario)
  
  useEffect(() => {  
    const salario = localStorage.getItem('salario')
    if(salario){
      setSalarioGuardado(salario)
    }
  }, [])
  




  function GuardarSalario(){
    setSalarioGuardado(salario)
    localStorage.setItem('salario', salario);  
 
  }


  /* console.log(salario, salarioGuardado) */

  return (
    <div class = "flex flex-row  gap-5 ">
    <div class = " p-10 border border-1 flex flex-row gap-10 self-center w-96 rounded-md shadow-md">
      <div class = "flex flex-col gap-2">
      <span>Juan Pablo Rayeb</span>
      <span>Ayudante c</span>
      <span>Auditoria</span>
      </div>
      <div class = " flex flex-col gap-2">
        <span>Salario</span>
   <span >{salarioGuardado} </span>
    </div>


    </div>
 
    <div class =" flex flex-col justify-center gap-2 items-center border-1 border shadow-md rounded-md"  >
<span>Actualiza tu salario</span>

<input type="number" name="salario" id="salario"  class ="border border-1"  onChange={event=>setSalario(event.target.value)}
 />
<button class ="bg-slate-700 text-slate-100 p-1  hover:text-slate-700 hover:bg-slate-100 hover:scale-105 transition-all shadow-md rounded-md " onClick={()=>GuardarSalario()} >Guardar</button>
</div>
    <div>

 
    </div>
    </div>
  )
}

export default Perfil