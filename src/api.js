import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:2020",
});

export const bubbleSort = async (value) => {
	return api.post("/bubble", { value });
};
export const radixSort = async (value) => {
	return api.post("/radix", { value });
};
export const countingSort = async (value) => {
	return api.post("/counting", { value });
};
