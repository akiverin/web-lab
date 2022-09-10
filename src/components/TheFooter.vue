<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__functions">
                <a href="/" class="header__logo">
                    Logo
                </a>
                <nav class="footer__navigate navigate">
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
            <div class="footer__info">
                <p class="footer__author">
                    Разработано студентом<br><a href="/" class="footer__subtext">Московского Политеха</a><br> группы 211-321<br>Кивериным Андреем
                </p>
            </div>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  