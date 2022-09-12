<template>
    <form class="comments__form" @submit.prevent="$emit('new-comment',{name, comment})" action="./" method="POST">
        <div class="comments__field">
            <label class="comments__label" for="name">Имя</label>
            <input class="comments__input" v-model="name" type="text" name="name" id="name" placeholder="Введите ваше имя или nickname" required>
        </div>
        <div class="comments__field">
            <label class="comments__label" for="comment">Комментарий</label>
            <textarea class="comments__textarea" v-model="comment" required placeholder="Ваши мысли о прочитанном..." name="comment" id="comment"></textarea>
        </div>
        <button class="comments__button" prevent type="submit">Опубликовать</button>
    </form>
</template>

<script>
export default {
    name: 'CommentsFormComponent',
    emits: ['new-comment'],
    data(){
        return {
            name: "",
            comment: "",
        }
    },
}
</script>