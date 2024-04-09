export default defineNuxtPlugin((nuxtApp) => {
	// 使用composabled
	// const foo = useFoo();
	return {
		provide: {
			saySth: (msg: string) => `say sth : ${msg}!`,
		},
	};
});
