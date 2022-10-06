<script>
export default {
    name: 'LayoutHeader',
    props: ['className'],
}
</script>

<template>
    <header class="header" :class="className">
        <div class="header__container">
            <router-link class="header__logo" to="/">Emre Asik</router-link>
            <nav class="header__navigation">
                <!-- <router-link class="header__navigation__item header__navigation__item--active" to="/">Home</router-link> -->
                <router-link class="header__navigation__item" to="/aboutme">About Me</router-link>
                <router-link class="header__navigation__item" to="/posts">Posts</router-link>
                <router-link class="header__navigation__item" to="/posts">Contact</router-link>
            </nav>
        </div>
    </header>
</template>
    
<style lang="scss">
$bg-black: rgba(21, 25, 32, .9);

.header {
    background-color: $bg-black;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__logo {
        font-size: 18px;
        font-weight: 700;
        color: #f8f9fa;
        text-decoration: none;
    }

    &__container {
        display: grid;
        grid-template-columns: 120px 1fr;
        max-width: 1200px;
        width: 100%;
        margin-inline: auto;
        gap: 10px;
    }

    &__navigation {
        justify-self: flex-end;
        display: flex;
        flex-direction: row;
        gap: 24px;

        &__item {
            font-size: 17px;
            font-weight: 700;
            color: #ced4da;
            text-decoration: none;
            cursor: pointer;

            &:not(:first-child) {
                margin-left: 10px;
            }

            &--active {
                //color: blue;
                font-weight: 600;
            }
        }
    }
}
</style>
    