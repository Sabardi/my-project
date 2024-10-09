<template>
    <section v-if="products" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
                <template v-for="product in products " :key="product.id">
                    <div class="w-full p-4 pt-10 lg:w-1/4 md:w-1/2">
                        <ProductCard :product="product"  />
                    </div>
                </template>
            </div>
        </div>
    </section>

    <p v-else>
        loading...
    </p>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../components/ProductCard .vue';
import { useBookmarkStore } from '../stores/bookmark';

// initials
// const bookmarkStore = useBookmarkStore()

const products = ref([]);

onMounted(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    products.value = data;
});
</script>