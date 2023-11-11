import axios from "axios"
import {useQuery} from 'react-query'
import moment from 'moment/moment'



export default async function handler(req, res) {
  
 /*  const boca = localStorage.getItem('lastApiCall')
 */

  const guardadoApi = moment();
  const lastApiCall = moment().subtract(1, 'days').isAfter(guardadoApi)

 
  





  try {



/*  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAyNTI3ODYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJqdWFtcGkucmF5ZWJAZ21haWwuY29tIn0.Aql2Vzwked9Z2Fm0jKRneNlu5M5nT2tF8VfFarhL6uLhT0nXHSPtMqbe1H4NvKlok8RoOqmw5UJc7TxJoagsrQ"

    const response = await axios.get('https://api.estadisticasbcra.com/inflacion_mensual_oficial', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
 */
    res.status(response).json({lastloguin:lastApiCall})

    if (response.status === 200) {
     
      res.status(200).json(response.data);
    } else {
      
      res.status(response.status).json({ error: 'Error en la solicitud a la API', lastloguin:lastApiCall }
      
      );
    }
  } catch (error) {
   
    console.error('Error en la solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor', lastloguin:`${lastApiCall}` } );
  }
}













/* dolar blue */
/* "https://www.dolarsi.com/api/api.php?type=valoresprincipales" */




