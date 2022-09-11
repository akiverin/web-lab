<template>
    <h1 class="home__title">Добро пожаловать!</h1>
    <h2 class="home__subtitle">Читайте самые актуальные новости на нашем сайте.</h2>
    <router-link to="/articles" class="home__link">Перейти к статьям</router-link>
    <HomeSlider></HomeSlider>
</template>

<script>
import HomeSlider from './HomeSlider.vue';

export default {
    name: "HomeHeroComponent",
    components: { HomeSlider }
}
</script>

<style scoped>
</style>
