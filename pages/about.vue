<script setup lang="ts">
const { x, y } = useMouse();
</script>
<template>
	<div>
		<h1>about page</h1>
		<div>pos: {{ x }}, {{ y }}</div>
		<Hello></Hello>
	</div>
</template>

<style scoped></style>
