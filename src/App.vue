<template>
  <main class="grid p-6 mt-10 bg-slate-100 place-items-center">
   
    <div class="flex justify-end w-6/12 mx-6-auto mt">
      <span class="absolute">
        <i class="text-3xl fa-solid fa-bookmark"></i>
        <span
          class="relative grid w-8 h-8 text-center bg-red-600 rounded-full place-items-center text-slate-50 -top-12 -right-2">
          {{ bookmarkStore.bookmarks.length }}
        </span>
      </span>
    </div>
    
    <!-- wrapper -->
    <section v-if="products" class="grid grid-cols-5 gap-3 w-12/4">
      <template v-for="product in products " :key="product.id">
        <ProductCard class="col-span-1" :product="product" />
      </template>
    </section>

    <!-- loading state -->
    <p v-else>
      loading...
    </p>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from './components/ProductCard .vue';
import { useBookmarkStore } from './stores/bookmark';

// initials
const bookmarkStore = useBookmarkStore()

const products = ref([]);

onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  products.value = data;
});
</script>
