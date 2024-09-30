<template>
  <main class="min-h-screen bg-slate-100 grid place-items-center p-6">
    <!-- wrapper -->
    <section v-if="products" class="w-12/4 grid grid-cols-5 gap-3">
      <template v-for="product in products " :key="product.id">
        <CardProduk class="col-span-1" :product="product"/>
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
import CardProduk from './components/CardProduk.vue';

const products = ref([]);

onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  products.value = data;
});
</script>
