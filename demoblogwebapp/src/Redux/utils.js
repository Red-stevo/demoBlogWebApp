import axios from "axios";

export const resources = axios.create({
    baseURL:"https://json-placeholder.mock.beeceptor.com",
    headers:{
        "Content-Type":"application/json",
    }
});