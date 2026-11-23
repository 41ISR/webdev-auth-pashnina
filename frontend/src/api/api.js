import axios from "axios";

const BASE_URL=import.meta.env.VITE_API_URL + "/api" || "https://api.kitek-pg.ru/api/feedback"

const apiInstance = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
    },
})

const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const signinUser = async (user) => {
    const res = await apiInstance.post("/auth/login", user)
    return res
}


export const api = {registerUser, signinUser}