<template>
<div class="articles__news news">
    <div class="news__navigate">
        <v-text-field outlined  :append-icon="!tileActive ? 'mdi-grid' : 'mdi-view-agenda-outline'" @click:append="onTile" prepend-inner-icon="mdi-magnify" clearable label="Поиск по новостям" placeholder="Начните вводить название или текст статьи" v-model="search">
        </v-text-field> 
    </div>
    <ul class="news__list" v-if="!this.tileActive">
        <li class="news__item" v-for="article in filteredArticles" :key="article.id">
            <ArticlesItem :article="article"></ArticlesItem>
        </li>
    </ul>
    <ul class="news__list_tile" v-if="this.tileActive">
        <li class="news__item_tile" v-for="article in filteredArticles" :key="article.id">
            <ArticlesTile :article="article"></ArticlesTile>
        </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
import ArticlesItem from './ArticlesItem.vue';
import ArticlesTile from './ArticlesTile.vue';

export default {
    name: "ArticlesListComponent",
    data() {
        return {
            articles: [],
            search: "",
            tileActive: false,
        };
    },
    methods: {
        addData() {
            axios.get("articles.json")
                .then((response) => { this.articles = response.data; console.log(this.filteredArticles)})
                .catch((error) => {
                throw error.response.data;
                
            });
        },
        onTile(){
            this.tileActive = !this.tileActive;
        }
    },
    mounted() {
        this.addData();
    },
    computed: {
        filteredArticles() {
            return this.articles.filter(article =>
                article.desc.toLowerCase().includes(this.search.toLowerCase()) ||
                article.name.toLowerCase().includes(this.search.toLowerCase()) ||
                article.shortDesc.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    components: { ArticlesItem, ArticlesTile }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .v-label {
        font-size: 1.6rem;
    }
    .v-input__details {
        min-height: 0;
        padding: 0;
    }
    .v-messages {
        min-height: 0px;
    }
    .v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before {
        border-style: none;
    }
    .v-field--variant-filled .v-field__outline::after, .v-field--variant-underlined .v-field__outline::after {
        border-style: none;
    }
    .v-input__append {
        font-size: 1.8rem;
    }
</style>
