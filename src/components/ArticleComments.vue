<template>
    <div class="comments">
        <h3 class="comments__title">Комментарии</h3>
        <ul class="comments__list">
            <li class="comments__item" v-for="comment in comments" :key="comment.id">
                <div class="comments__author">
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png?w=1060&t=st=1663004331~exp=1663004931~hmac=2eea0c330fda559d2effd70b02efa45e0d457249f3e78aa2b7dd071ab54edd72" alt="User avatar" width="64px" height="64px" class="comments__avatar">
                    <h4 class="comments__author-name">{{comment.name}}</h4>
                </div>
                <p class="comments__text">{{comment.comment}}</p>
            </li>
        </ul>
        <CommentsForm @new-comment="newComment"></CommentsForm>
    </div>
</template>

<script>
import axios from 'axios'
import CommentsForm from './CommentsForm.vue'

export default {
    name: "ArticleCommentsComponent",
    data() {
        return {
            comments: [],
        };
    },
    methods: {
        addData() {
            axios.get("myComments.json")
                .then((response) => { this.comments = response.data; })
                .catch((error) => {
                throw error.response.data;
            });
        },
        newComment(comment){
            this.comments.push(comment);
        }
    },
    mounted() {
        this.addData();
    },
    components: { CommentsForm }
}
</script>