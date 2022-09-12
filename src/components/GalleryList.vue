<template>
    <section class="gallery__collection">
        <ul class="gallery__list">
            <li class="gallery__item" v-for="photo in photos" :key=photo.id>
                <img class="gallery__image" :src="photo.urls.regular" alt="Random Photo or Art">
                <div class="gallery__info">
                    <div class="gallery__author">
                        <img :src="photo.user.profile_image.medium" alt="" class="gallery__avatar">
                        <p class="gallery__author">{{photo.user.name}}</p>
                    </div>
                    <div class="gallery__views">
                        <svg class="gallery__icon" enable-background="new 0 0 32 32" height="16px" id="svg2" version="1.1" viewBox="0 0 32 32" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="view"><circle cx="16" cy="16" r="6"/><path d="M16,6C6,6,0,15.938,0,15.938S6,26,16,26s16-10,16-10S26,6,16,6z M16,24c-8.75,0-13.5-8-13.5-8S7.25,8,16,8s13.5,8,13.5,8   S24.75,24,16,24z"/></g></svg>
                        <p class="gallery__count">{{photo.views}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: "GalleryListComponent",
    data(){
        return {
            photos: []
        }
    },
    methods: {
        addData(){
            let api = "https://api.unsplash.com/photos/random/?client_id=6Y-6HddeA30ItWMfeImTkpU2cq2K7je05JkY8u4cQm4&count=21";
            axios.get(api)
                .then((response) => { this.photos = response.data; console.log(this.photos)})
                .catch((error) => {
                throw error.response.data;
                
            });
        }
    },
    mounted(){
        this.addData();
    }
}
</script>

<style scoped>
</style>
