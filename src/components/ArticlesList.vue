<template>
<div class="articles__news news">
    <v-text-field outlined prepend-inner-icon="mdi-magnify" clearable label="Поиск по новостям" placeholder="Начните вводить название или текст статьи" v-model="search">
    </v-text-field>
    <ul class="news__list">
        <li class="news__item" v-for="article in filteredArticles" :key="article.id">
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
            search: "",
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
    components: { ArticlesItem }
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
</style>
