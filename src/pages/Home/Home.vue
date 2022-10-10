<script>
export default {
    name: 'HomePage',
    data() {
        return {
            items: {},
        };
    },
    created() {
        this.$store.dispatch("fetchItemsBySize");
    },
    computed: {
        posts() {
            return this.$store.getters.getPostsBySize
        }
    },
    methods: {
        detailPageRoute(id) {
            this.$router.push({ path: '/postdetail/' + id })
        },
        categoryPageRoute(category) {
            this.$router.push({ path: '/posts/' + category })
        }
    }
}
</script>

<template>
    <div class="home-page">
        <h1 class="home-page__text">Welcome my Blog!</h1>
        <div class="home-page__posts-header">
            <h2 class="home-page__posts-header__text">Last Posts</h2>
            <div>
                <router-link class="header__navigation__item" to="/posts">View All</router-link>
            </div>
        </div>
        <div class="posts-wrap">
            <span class="posts-home" v-for="post in posts" :key="post.id">
                <span class="posts-home__date"> {{ post.date }} </span>
                <h3 class="posts-home__title" @click="detailPageRoute(post.id)"> {{ post.title }} </h3>
                <div class="posts-home__category" v-for="category in post.categories" :key="category.id">
                    <span class="posts-home__category__item" @click="categoryPageRoute(category.categoryName)">{{ category.categoryName }}</span>
                </div>
            </span>
        </div>
    </div>
</template>
  
<style lang="scss">
$bg-1: #e4e3eb;
$bg-2: #d9e6f1;
$black: #273244;
$bg-black: rgba(21, 25, 32, .9);
$gray: #dee2e6;
$blue: #316be0;
$red: #a4243b;
$bg-3: #d8c99b;

* {
    margin: 0;
}

body {
    background-color: $black;
}

.home-page {
    &__text {
        color: white;
        font-size: 2.5rem;
    }

    &__posts-header {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;

        &__text {
            color: $gray;
            font-size: 1.7rem;
        }

        & a {
            border: 2px solid $red;
            border-radius: 4px;
            padding: 8px;
            cursor: pointer;
        }
    }
}

.posts-wrap {
    flex-direction: column;
    gap: 30px;
    margin-top: 24px;
    display: grid;
    grid-template-columns: auto auto auto;
}

.posts-home {
    background-color: $bg-3;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 20px 40px;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    gap: 10px;

    &__date {
        font-size: 1.1rem;
        color: $blue;
        font-weight: 600;
    }

    &__title {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    &__category {
        &__item {
            color: $red;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.main-wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>
  