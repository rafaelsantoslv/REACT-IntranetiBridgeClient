import { default as axios } from "axios";
;
const api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
        Authorization: `jwt ${localStorage.getItem('token')}`
    }

})




export default api