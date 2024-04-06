<script setup></script>
<template>
	<div>
		<!-- 给所有默认的布局添加 header and footer -->
		<AppHeader></AppHeader>
		<slot></slot>
		<AppFooter></AppFooter>
	</div>
</template>

<style scoped></style>
