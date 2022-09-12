<template>
    <div class="news__head">
        <h3 class="news__title">{{article.name}}</h3>
        <p class="news__date">{{article.date}}</p>
    </div>
    <div class="news__info">
        <p class="news__description">{{article.shortDesc}}</p>
        <router-link :to="{name: 'article', params: {id: article.id}}" class="news__link">Читать далее
            <svg class="news__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Share"><path d="M20 20H4V4h8V2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9h-2z" style="fill:black"/><path d="M14 2v2h4.586L8.293 14.293a1 1 0 0 0 1.414 1.414L20 5.414V10h2V2z" style="fill:black"/></g></svg>        </router-link>
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
