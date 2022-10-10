<script>
export default {
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch("fetchItemById", id);
    },
    computed: {
        postDetail() {
            return this.$store.getters.getPostById;
        }
    }
}
</script>

<template>
    <div class="container-post-detail">
        <div class="container-post-detail__item container-post-detail__item--title"> {{ postDetail.title}} </div>
        <div class="container-post-detail__item container-post-detail__item--content"> {{ postDetail.content}} </div>
        <div class="container-post-detail__item container-post-detail__item--author"> {{ postDetail.author}}
        </div>
    </div>
</template>

<style lang="scss">
$gray: #dee2e6;

.container-post-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &__item {
        &--title {
            color: $gray;
            font-size: 2rem;
            font-weight: 700;
        }

        &--content {
            font-size: 1.5rem;
        }

        &--author {
            font-size: 1.3rem;
            color: $gray;
        }
    }
}
</style>