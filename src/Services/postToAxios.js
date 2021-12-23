import axios from "axios"

export default function postToAxios(uri, data){

    return new Promise((resolve, reject) => {
        axios
        .post(uri, data)
        .then(response => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error)
        })
    });
}