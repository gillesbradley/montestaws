import axios from "axios";

export default function deleteToAxios(uri){        
    return new Promise((resolve, reject) => {
        axios
        .delete(uri)
        .then(response => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error)
        })
    });
}