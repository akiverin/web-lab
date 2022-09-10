<template>
    <main class="article">
        <div class="article__wrapper">
            <p class="article__date">{{article.date}}</p>
            <h2 class="article__title">{{article.name}}</h2>
            <div class="article__info">
                <p class="article__text">{{article.desc}}</p>
                <img class="article__image" :src="article.full_image" alt="">
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: "ArticlePage",
    props: ["id"],
    data(){
        return {
            article: {},
        }
    },
    methods: {
        addData() {
            axios.get('../articles.json')
            .then((response) => { this.article = response.data[this.id-1]})
            .catch((error) => {
                throw error.response.data;
            });
        }
    },
    mounted() {
        this.addData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  