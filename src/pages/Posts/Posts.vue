<script>
export default {
    name: 'PostsPage',
    data() {
        return {
            items: {},
        };
    },
    created() {
        this.$store.dispatch("fetchItems");
    },
    computed: {
        posts() {
            return this.$store.getters.getPosts
        }
    },
    methods: {
        detailRoute(id) {
            this.$router.push({ path: '/postdetail/' + id })
        }
    },
}
</script>

<template>
    <div class="container">
        <h1>Posts</h1>
        <div class="posts-wrap">
            <span @click="detailRoute(post.id)" class="posts" v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p> {{ post.content }} </p>
                <div class="posts__category" v-for="category in post.categories" :key="category.id">
                    <span>{{ category.categoryName }}</span>
                </div>
            </span>
        </div>
    </div>
</template>
 
<style lang="scss">
$blue: #316be0;
$red: #a4243b;
$bg-3: #d8c99b;

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
    background-color: $bg-3;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 20px 40px;
    border: 1px solid white;
    border-radius: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    cursor: pointer;


    &__category {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
        color: $red;
    }
}
</style>