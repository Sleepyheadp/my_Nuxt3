<script setup>
const foo = useFoo();
const count = useCount();
const sum = useSum();
</script>
<template>
	<div class="content">
		<div class="title">home page</div>
		<button><NuxtLink to="/profile">to Profile</NuxtLink></button>
		<button><NuxtLink to="/posts/1">to posts 1</NuxtLink></button>
		<button><NuxtLink to="/posts/2">to posts 2</NuxtLink></button>
		<!-- 使用组件(已自动引入) -->
		<AppAlert> This is an auto-imported component. </AppAlert>
		<!-- composables -->
		<p>foo : {{ foo }}</p>
		<p>conte : {{ count }}</p>
		<p>sum(count++): {{ sum }}</p>
	</div>
</template>
<style lang="scss">
.content {
	background-color: rgb(152, 152, 220);
}
</style>
