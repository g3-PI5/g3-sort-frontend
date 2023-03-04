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
export const countingSort = async (value) => {
	return api.post("/counting", { value });
};

//Rotas para os algoritmos de Searching
export const binarySearch = async (value, search) => {
	return api.post("/counting", { value, search });
};
export const linearSearch = async (value, search) => {
	return api.post("/counting", { value, search });
};
