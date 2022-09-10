<template>
    <header class="header">
        <div class="header__wrapper">
            <a href="/" class="header__logo">
                Logo
            </a>
            <nav class="header__navigate navigate">
                <ul class="navigate__list">
                    <li class="navigate__item">
                        <router-link to="/" class="navigate__link">Главная</router-link>
                    </li>
                    <li class="navigate__item">
                        <router-link to="/articles" class="navigate__link">Новости</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'TheHeader',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  