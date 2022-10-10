<script>
export default {
    name: 'LayoutFooter',
    props: ['className'],
}

</script>


<template>
    <footer class="footer" :class="className">
        <a href="https://www.linkedin.com/in/emre-asik/">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/Emre Aşık">
            <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a href="mailto:asik.emre@outlook.com">
            <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
        <span class="footer__copyright">&copy; 2022</span>
    </footer>
</template>
    
<style lang="scss">
$bg-1: #e4e3eb;
$white: #d9e6f1;
$black: #273244;
$bg-black: #212529;

.footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: $bg-black;
    color: $white;
    height: 50px;
    font-size: 1.2em;
    gap: 15px;

    &__copyright {
        font-weight: 700;
    }

    & a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
    }
}
</style>
    