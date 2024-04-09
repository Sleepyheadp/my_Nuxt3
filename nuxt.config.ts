// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		assets: "/<rootDir>/assets",
	},
	css: ["~/assets/css/main.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@vueuse/nuxt"],
	// 在子目录中添加插件
	plugins: [
		// "~/plugins/bar/baz",
		// "~/plugins/bar/foz",
		// "~/plugins/01.foo",
		// "~/plugins/02.obj",
		// "~/plugins/depending-on-my-plugin",
		"~/plugins/hello-object-syntax",
		"~/plugins/hello",
		// "~/plugins/my-plugin",
	],
});
