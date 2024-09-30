<template>
    <section class="bg-white">
        <a :href="product.id">
            <!-- image -->
            <img :src="product.image" class="w-full h-1/2">
            <!-- footer -->
            <section class="p-6 uppercase text-center">
                <h1 class="text-xl font-bold">{{ product.title }}</h1>
            </section>
        </a>
    </section>
</template>

<script setup>
const props = defineProps({
    product: Object
});
</script>
