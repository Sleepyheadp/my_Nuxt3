<script setup>
const route = useRoute();
const nuxtapp = useNuxtApp();
// console.log("route", route, "nuxtapp", nuxtapp);
</script>
<template>
	<div>posts id: {{ route.params.id }}</div>
</template>

<style scoped></style>
