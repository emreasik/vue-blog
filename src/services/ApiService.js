import axios from "axios";

const fetcher = axios.create({
    baseURL: "http://localhost:3000",
    //baseURL: "https://jsonplaceholder.Emre Aşık.com"
});

export default class ApiService {
    static GetPosts(page = 1, limit = 10) {
        return fetcher.get("/posts", {
            _page: page,
            _limit: limit,
        });
    }
    static async GetPostsBySize(limit = 6) {
        const data = await fetcher.get("/posts");
        return data.data.slice(0, limit);
    }
    static async GetPostsByCategory(category) {
        const data = await fetcher.get("/posts");
        console.log(data);
        return data.data.filter(item => {
            for (const c of item.categories) {
                if (c.categoryName === category)
                    return true
            }
            return false;
        })
    }
}