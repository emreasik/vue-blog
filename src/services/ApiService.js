import axios from "axios";

const fetcher = axios.create({
    baseURL: "http://localhost:5174",
    //baseURL: "https://jsonplaceholder.typicode.com"
});

export default class ApiService {
    static async GetPosts(page = 1, limit = 10) {
        return await fetcher.get("/posts", {
            _page: page,
            _limit: limit,
        });
    }
}