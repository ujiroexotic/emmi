import axios from 'axios';

const token = localStorage.getItem('token')
//console.log(token)
export default axios.create(
    {
        // baseURL: 'http://localhost:8000'
        baseURL: 'https://emmi-softwaretrack.online/api/',
        
        headers : {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${token}`
        }
    }
)