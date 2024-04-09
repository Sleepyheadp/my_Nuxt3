export default defineNuxtPlugin({
	name: "depends-on-my-plugin",
	dependsOn: ["my-plugin"],
	async setup(nuxtApp) {
		// this plugin will wait for the end of `my-plugin`'s execution before it runs
	},
});
