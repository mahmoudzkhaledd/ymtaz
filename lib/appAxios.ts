import axios from "axios";
axios.defaults.baseURL = "https://ymtaz.sa/api/client/";
axios.interceptors.request.use(req => {
    req.headers.set("Authorization", `Bearer ${process.env.AUTH_TOKEN}`);
    return req;
});

export const appAxios = axios;