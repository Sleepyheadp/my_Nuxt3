<script setup lang="ts">
const { $sayHello } = useNuxtApp();
</script>
<template>
	<div>{{ $sayHello("Nuxt.js 3.x") }}</div>
</template>

<style scoped></style>
