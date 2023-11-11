import moment from 'moment/moment'
import Perfil from '@/components/Perfil'

import {useQuery} from 'react-query'

export default function Home() {


  const  data  = useQuery('repoData', () =>
  fetch('http://localhost:3000/api/bcra').then(res =>
    res.json()
  
  )
)

console.log(moment().format())
/* console.log(data.data[data.data.length-1]) */
/* 
const ultimaInflacion = data.data[data.data.length-1] */




  return (
  <div class = " m-2 w-full flex justify-center h-full items-center">
    
    
   <Perfil/>
<div class ="flex flex-col items-center gap-3 border p-4" >
  
  <h1>Ultimo dato de Inflacion</h1>
  {/* <div>
{<span> Dia:</span>  <span> {ultimaInflacion.d}</span></div>
<div>
  <span> {ultimaInflacion.v}</span></div> */}
  </div> 





     </div>
  )}
