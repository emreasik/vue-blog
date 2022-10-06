<script>
import LayoutHeader from "./LayoutHeader.vue";
import LayoutFooter from "./LayoutFooter.vue";

export default {
    name: 'HomePage',
    components: {
        LayoutHeader,
        LayoutFooter
    },
    props: ['className'],
}

</script>
    
<template>
    <main class="layout" :class="className">
        <LayoutHeader className="layout__header" />
        <section class="layout__content">
            <slot></slot>
        </section>
        <LayoutFooter class="layout__footer" />
    </main>
</template>
    
<style lang="scss">
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__header {
        margin-bottom: 60px;
    }

    &__content {
        max-width: 1232px;
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
        width: 100%;
        margin-inline: auto;
        flex: 1;
    }

    &__footer {
        margin-top: 60px;
    }
}
</style>
    