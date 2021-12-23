
import axios from "axios"

export default function putToAxios(uri, data){

    return new Promise((resolve, reject) => {
        axios
        .put(uri, data)
        .then(response => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error)
        })
    });
}

