<template>
  <section class="home">
    <div class="home__wrapper">
        <h1 class="home__title">Добро пожаловать!</h1>
        <h2 class="home__subtitle">Читайте самые актуальные новости на нашем сайте.</h2>
        <router-link to="/articles" class="home__link">Перейти к статьям</router-link>
        <HomeSlider></HomeSlider>
    </div>
  </section>
</template>

<script>
import HomeSlider from '@/components/HomeSlider.vue';
export default {
    name: "HomePage",
    components: { HomeSlider }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
