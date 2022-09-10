<template>
  <TheHeader></TheHeader>
  <main>
    <router-view></router-view>
  </main>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: 'App',
  components: { TheHeader, TheFooter }
}
</script>

<style>
</style>
