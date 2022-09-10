<template>
<div class="articles__news news">
    <ul class="news__list">
        <li class="news__item" v-for="article in articles" :key="article.id">
            <ArticlesItem :article="article"></ArticlesItem>
        </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
import ArticlesItem from './ArticlesItem.vue';

export default {
    name: "ArticlesListComponent",
    data() {
        return {
            articles: [],
        };
    },
    methods: {
        addData() {
            axios.get("articles.json")
                .then((response) => { this.articles = response.data; })
                .catch((error) => {
                throw error.response.data;
            });
        }
    },
    mounted() {
        this.addData();
    },
    components: { ArticlesItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
