<template>
    <main>
        <section class="articles">
            <div class="articles__wrapper">
                <ArticlesHero></ArticlesHero>
                <ArticlesList></ArticlesList>
            </div>
        </section>
    </main>
</template>

<script>
import ArticlesList from '@/components/ArticlesList.vue';
import ArticlesHero from '@/components/ArticlesHero.vue';
export default {
    name: "ArticlesPage",
    components: { ArticlesList, ArticlesHero }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  