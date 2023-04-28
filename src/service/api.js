import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:2020",
});

//Acessar o servidor pelas rotas criadas nele

//Rotas para os algoritmos de Sorting
export const bubbleSort = async (value) => {
	return api.post("/bubble", { value });
};
export const radixSort = async (value) => {
	return api.post("/radix", { value });
};
export const selectionSort = async (value) => {
	return api.post("/selection", { value });
};

//Rotas para os algoritmos de Searching
export const binarySearch = async (value, target) => {
	return api.post("/binary", {
		value: parseInt(value),
		target: parseInt(target),
	});
};
export const linearSearch = async (value, target) => {
	return api.post("/linear", {
		value: parseInt(value),
		target: parseInt(target),
	});
};

//TESTE
