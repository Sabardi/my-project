<template>
  <main class="grid min-h-screen p-6 bg-slate-100 place-items-center">
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


const products = ref([]);

onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  products.value = data;
});
</script>
