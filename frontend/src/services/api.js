import axios from 'axios'

const baseAPI = (baseUrl)=>{
   const api = axios.create({baseUrl})
   return api
}

export default  baseAPI