import axios from "axios"
import { BASE_URI_API } from "../env"

export const Axios = class {
    get(uri){
        
        return new Promise((resolve, reject) => {
            axios
            .get(uri)
            .then(response => {
                return resolve(response);
            })
            .catch((error) => {
                return reject(error)
            })
        });
    }

    post(uri, data){

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

    put(uri, data){

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

    delete(uri){        
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
}