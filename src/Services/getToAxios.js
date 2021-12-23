import axios from "axios"
import { BASE_URI_API } from "../env"

    export default function getToAxios(uri){
        
        return new Promise((resolve, reject) => {
            axios
            .get(uri)
            .then(response => {
                return resolve(response.data);
            })
            .catch((error) => {
                return reject(error)
            })
        });
    }