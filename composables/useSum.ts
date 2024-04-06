export const useSum = () => {
	const counter = useCounter();
	const num = ref(1);
	return counter.value + num.value;
};
