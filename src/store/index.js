import { createStore } from "vuex";
import ApiService from "../services/ApiService";


export default createStore({
    state: {
        itemsBySize: [],
        items: [],
        itemById: [],
        itemsByCategory: [],
    },
    mutations: {
        setItemsBySize(state, items) {
            state.itemsBySize = items;
        },
        setItems(state, items) {
            state.items = items;
        },
        setItemsById(state, item) {
            state.itemById = item;
        },
        setItemsByCategory(state, items) {
            state.itemsByCategory = items;
        }
    },
    actions: {
        fetchItems(context) {
            ApiService.GetPosts().then((res) => {
                context.commit("setItems", res.data)
            });
        },
        fetchItemById(context, id) {
            ApiService.GetPosts().then((res) => {
                console.log(res);
                return res.data.filter((item) => {
                    return item.id === parseInt(id);
                });
            }).then((item) => {
                console.log(item);
                context.commit("setItemsById", item[0]);
            });
        },
        fetchItemsBySize(context, limit) {
            ApiService.GetPostsBySize(limit).then((res) => {
                context.commit("setItemsBySize", res)
            });
        },
        fetchItemsByCategory(context, category) {
            ApiService.GetPostsByCategory(category).then((res) => {
                console.log(res);
                context.commit("setItemsByCategory", res)
            });
        }
    },
    getters: {
        getPosts(state) {
            return state.items;
        },
        getPostById(state) {
            return state.itemById;
        },
        getPostsBySize(state) {
            return state.itemsBySize;
        },
        getItemsByCategory(state) {
            return state.itemsByCategory;
        }
    },
});