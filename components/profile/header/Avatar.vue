<script setup></script>
<template>
	<div>
		<div class="title">I am profile's avatar</div>
		<!-- 引入icons -->
		<IconsBell></IconsBell>
		<!-- 引入assets中的资源 -->
		<img src="@/assets/1.jpg" alt="" class="avatar" />
		<!-- 引入public中的资源 -->
		<img src="/2.jpg" alt="" class="avatar" />
		<!-- 如果要使用svg的话,要安装插件进行转译 : vite-svg-loader -->
	</div>
</template>

<style lang="scss" scoped>
.avatar {
	width: 100px;
	height: 100px;
}
</style>
