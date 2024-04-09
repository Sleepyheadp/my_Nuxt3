export default defineNuxtPlugin({
	name: "hello",
	setup() {
		return {
			provide: {
				sayHello: (msg: string) => `Hello ${msg}!`,
			},
		};
	},
});
