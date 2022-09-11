<template>
  <main>
    <section class="home">
      <div class="home__wrapper">
          <HomeHero></HomeHero>
      </div>
    </section>
  </main>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
export default {
    name: "HomePage",
    components: { HomeHero }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
