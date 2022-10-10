<script>
export default {
    created() {
        const category = this.$route.params.category;
        this.$store.dispatch("fetchItemsByCategory", category);
    },
    computed: {
        posts() {
            return this.$store.getters.getItemsByCategory;
        }
    },
    methods: {
        detailPageRoute(id) {
            this.$router.push({ path: '/postdetail/' + id })
        },
    }
}
</script>

<template>
    <div class="posts-category-wrap" v-for="post in posts" :key="post.id" @click="detailPageRoute(post.id)">
        <div class="posts-category-wrap__title">
            {{ post.title }}
        </div>
        <div class="posts-category-wrap__content">
            {{ post.content }}
        </div>
    </div>
</template>

<style lang="scss">
$blue: #316be0;
$red: #a4243b;
$bg-3: #d8c99b;

.posts-category-wrap {
    display: grid;
    border: 1px solid white;
    gap: 10px;
    padding: 20px;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    margin-bottom: 20px;
    background-color: $bg-3;
    cursor: pointer;

    &__title {
        font-size: 1.7rem;
        color: $red;
    }
}
</style>