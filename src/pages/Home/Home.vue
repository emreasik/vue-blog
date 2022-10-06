<script>
import ApiService from "../../services/ApiService";

export default {
    name: 'HomePage',
    data() {
        return {
            items: {},
        };
    },
    async created() {
        try {
            const postsResponse = await ApiService.GetPosts(1);
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

<template>
    <div class="home-page">
        <h1 class="home-page__text">Hello, I'm Emre Aşık</h1>
        <div class="home-page__posts-header">
            <h2 class="home-page__posts-header__text" >Last Posts</h2>
            <div>
                <router-link class="header__navigation__item" to="/posts">View All</router-link>
            </div>
        </div>
        <div class="posts-wrap">
            <span class="posts" v-for="post in items.data" :key="post.id">
                <span> {{ post.date }} </span>
                <h3> {{ post.title }} </h3>
                <div class="posts__category" v-for="category in post.categories" :key="category.id">
                    <span>{{ category.categoryName }}</span>
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

* {
    margin: 0;
}

body {
    background-color: $black;
}

.home-page {
    &__text {
        color: white;
    }

    &__posts-header {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        
        &__text{
            font-size: 1.7rem;
        }

        & a {
            border: 2px solid $gray;
            border-radius: 4px;
            padding: 8px;
            cursor: pointer;
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

.post-wrap {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 30px;
    border: 4px solid $bg-2;
    padding: 15px 30px;
    cursor: pointer;
    width: 40%;
    overflow: hidden;

    &-meta {
        //background-color: teal;

        &__category {
            float: left;
            //background-color: bisque;
        }

        &__date {
            float: right;
        }
    }
}
</style>
  