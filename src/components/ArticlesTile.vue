<template>
    <router-link :to="{name: 'article', params: {id: article.id}}" >
        <div class="news__head_tile">
            <p class="news__date">{{article.date}}</p>
            <h3 class="news__title">{{article.name}}</h3>
        </div>
        <img :src="article.preview_image" alt="Cover for article" class="news__image_tile">
    </router-link>
</template>

<script>

export default {
    name: 'ArticlesTileComponent',
    props: ['article']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
