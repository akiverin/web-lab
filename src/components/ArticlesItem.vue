<template>
    <div class="news__head">
        <h3 class="news__title">{{article.name}}</h3>
        <p class="news__date">{{article.date}}</p>
    </div>
    <div class="news__info">
        <p class="news__description">{{article.shortDesc}}</p>
        <router-link :to="{name: 'article', params: {id: article.id}}" class="news__link">Читать далее</router-link>
    </div>
    <img :src="article.preview_image" alt="Cover for article" class="news__image">
</template>

<script>

export default {
    name: 'ArticlesItemComponent',
    props: ['article']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
