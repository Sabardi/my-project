<template>


    <RouterLink :to="`/products/${product.id}`">
            <a class="relative block overflow-hidden rounded h-96">
                <img :alt=product.title class="object-cover object-center " width="300" height="300" :src="product.image" >
            </a>
            <div class="mt-4">
                <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">{{ product.category }}</h3>
                <h2 class="text-lg font-medium text-gray-900 title-font">{{ product.title }}</h2>
                <p class="mt-1">${{ product.price }}</p>
                <span class="mt-1">star
                    {{ product.rating.rate}}
                </span>
            </div>

    </RouterLink>
</template>

<script setup>
import { useBookmarkStore } from '../stores/bookmark.js';
// import { useBookmarkStore } from '@/stores/bookmark.js'; pake ini tidk bisa

const props = defineProps({
    product: Object
});

// Menggunakan state dari store
const { addBookmark, isBookmarked } = useBookmarkStore();

// Fungsi untuk toggle bookmark
const toggleBookmark = (product) => {
    addBookmark(product);
};
</script>
