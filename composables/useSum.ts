export const useSum = () => {
	const count = useCount();
	const num = ref(1);
	return count.value + num.value;
};
