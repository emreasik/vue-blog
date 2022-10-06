<template>
    <div class="container">
        <h1>Posts</h1>
        <div class="posts-wrap">
            <span class="posts" v-for="post in items.data" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p> {{ post.content }} </p>
                <div class="posts__category" v-for="category in post.categories" :key="category.id">
                    <span>{{ category.categoryName }}</span>
                </div>
            </span>
        </div>
    </div>
</template>
 
<script>
import ApiService from "../../services/ApiService";

export default {
    name: 'PostsPage',
    data() {
        return {
            items: {},
        };
    },
    async created() {
        try {
            const postsResponse = await ApiService.GetPosts();
            console.log(postsResponse);
            this.items = postsResponse;
            console.log("asd");
            console.log(this.items);
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
</script>

<style lang="scss">
.container {
    & h1 {
        font-size: 3rem;

    }
}

.posts-wrap {
    flex-direction: column;
    gap: 30px;
    margin-top: 24px;
    display: grid;
    grid-template-columns: auto auto auto;
}

.posts {
    border: 1px solid white;
    padding: 20px;
    border-radius: 25px;

    &__category {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }
}
</style>