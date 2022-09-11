<template>
    <div class="slider">
        <div class="slider__wrapper">
            <ul v-bind:style="styleList" class="slider__list">
                <li class="slider__item" v-for="article in articles" :key="article.id">
                    <router-link :to="{ path: 'articles/'+article.id , params: { articleId: article.id }}" class="slider__link">
                        <div class="slider__info">
                            <p class="slider__date">{{article.date}}</p>
                            <h2 class="slider__title">{{article.name}}</h2>
                            <p class="slider__description">{{article.shortDesc}}</p>
                        </div>
                        <img :src="article.preview_image" alt="Slider Item Cover" class="slider__image">
                    </router-link>
                </li>
                <!-- <li class="slider__item">
                    <router-link to="/articles" class="slider__link slider__link_end">Далее <svg style="transform:rotate(180deg)" enable-background="new 0 0 50 50" height="20px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="20" width="20"/><polyline fill="none" points="29.44,35.961   14.04,35.961 14.041,20.56 " stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="36.628" x2="14.495" y1="13.373" y2="35.505"/></svg></router-link>
                </li> -->
            </ul>
        </div>
        <div class="slider__action">
            <button class="slider__button" id="sliderButtonLeft" @click="sliderStapLeft" :disabled="this.buttonLeftDisabled">
                <svg class="slider__icon slider__icon" id="arrowLeft" :class="{toggled: isToggled}" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M10.354,12.646l-0.707,0.707L4.293,8l5.354-5.354  l0.707,0.707L5.707,8L10.354,12.646z"/></svg>
            </button>
            <button class="slider__button" id="sliderButtonRight" @click="sliderStapRight" :disabled="this.buttonRightDisabled">
                <svg class="slider__icon slider__icon" id="arrowRight" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M6.354,13.354l-0.707-0.707L10.293,8L5.646,3.354  l0.707-0.707L11.707,8L6.354,13.354z"/></svg>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'HomeSliderComponent',
    data(){
        return {
            articles: [],
            sliderStap: 380,
            sliderKey: 0,
            sliderNum: 0,
            styleList: {
                listStyle: 'none',
                display: 'flex',
                transition: 'all 1s ease 0s',
                transform: 'translateX(0)',
            },
            buttonLeftDisabled: 0,
            buttonRightDisabled: 0,
        }
    },
    methods: {
        addData() {
            this.sliderNum = Math.max(1,parseInt(document.querySelector(".slider__wrapper").offsetWidth/380))
            axios.get('articles.json')
            .then((response) => { 
                // this.articles = response.data;
                for (let i=0; i<response.data.length; i++) {
                    if (response.data[i].slider == true) {
                        this.articles.push(response.data[i])
                    }
                }
            })
            .catch((error) => {
                throw error.response.data;
            });
            if (this.sliderKey >= 0){
                this.buttonLeftDisabled = 1
            } else {
                this.buttonLeftDisabled = 0
            }
        },
        sliderStapLeft(){
            this.sliderKey += this.sliderStap;
            this.sliderNum -= 1;
            this.styleList.transform = 'translateX('+this.sliderKey+'px)';
            if (this.sliderKey >= 0){
                this.buttonLeftDisabled = 1
            } else {
                this.buttonLeftDisabled = 0
            }
            if (this.sliderKey >= this.articles.length*this.sliderStap*-1){
                this.buttonRightDisabled = 0
            }
        },
        sliderStapRight(){
            this.sliderKey -= this.sliderStap;
            this.sliderNum += 1;
            this.styleList.transform = 'translateX('+this.sliderKey+'px)';
            if (this.sliderNum < this.articles.length){
                this.buttonRightDisabled = 0
            } else {
                this.buttonRightDisabled = 1
            }
            if (this.sliderKey >= 0){
                this.buttonLeftDisabled = 1
            } else {
                this.buttonLeftDisabled = 0
            }
        }
    },
    mounted() {
        this.addData();
    }
}
</script>

<style scoped>
</style>
