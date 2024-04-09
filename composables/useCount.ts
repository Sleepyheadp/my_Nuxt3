export const useCount = () => {
	// name , callbackFunc
	return useState("counter", () => Math.ceil(Math.random() * 100));
};
