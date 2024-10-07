<template>
    <section class="bg-white">
        <button class="flex justify-end w-full p-2" @click="toggleBookmark(product)">
            <span v-if="isBookmarked(product.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-dash-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
</svg></span>
            <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
            </span>
        </button>

        <a :href="product.id">
            <img :src="product.image" class="w-full h-1/2">
            <section class="p-6 text-center uppercase">
                <h1 class="text-xl font-bold">{{ product.title }}</h1>
            </section>
        </a>
    </section>
</template>

<script setup>
import { useBookmarkStore } from '../stores/bookmark.js';



const props = defineProps({
    product: Object
});

const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();

// Fungsi untuk menambah atau menghapus bookmark
const toggleBookmark = (product) => {
    if (isBookmarked(product.id)) {
        removeBookmark(product.id);  // Jika sudah dibookmark, hapus
    } else {
        addBookmark(product);  // Jika belum, tambahkan
    }
};
</script>
