<template>
    <main>
        <section class="article">
            <div class="article__wrapper">
                <p class="article__date">{{article.date}}</p>
                <h2 class="article__title">{{article.name}}</h2>
                <div class="article__info">
                    <div class="article__text">
                        <p v-for="paragraph in this.article.desc" :key="paragraph.id" class="article__paragraph">{{paragraph}}<br><br></p>
                    </div>
                    <img class="article__image" :src="article.full_image" alt="">
                </div>
            </div>
        </section>
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
            .then((response) => { 
                this.article = response.data[this.id-1];
                this.article.desc = this.article.desc.split('\n');
                }
                )
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
  