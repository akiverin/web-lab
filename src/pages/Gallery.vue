<template>
    <main class="gallery">
        <div class="gallery__wrapper">
            <GalleryHero></GalleryHero>
            <GalleryList></GalleryList>
        </div>
    </main>
</template>

  <script>
import GalleryHero from '@/components/GalleryHero.vue';
import GalleryList from '@/components/GalleryList.vue';

export default {
    name: "GalleryPage",
    components: { GalleryHero, GalleryList }
}
</script>