import React, { useState } from "react";
import "./App.css";
import {
	binarySearch,
	bubbleSort,
	countingSort,
	linearSearch,
	radixSort,
} from "./service/api";

function App() {
	const [algorithm, setAlgorithm] = useState("radix");
	const [search, setSearch] = useState(0);
	const [time, setTime] = useState("Tempo necessário para execução");
	const [value, setValue] = useState(0);
	const [loading, isLoading] = useState(false);

	const [check, isChecked] = useState(true);

	const handleTime = async (option) => {
		isLoading(true);
		var response;
		console.log(option);
		switch (option) {
			case "radix":
				response = await radixSort(value);
				if (!response.data.time) setTime("Tamanho Inválido");
				else setTime(response.data.time + " ms");
				break;
			case "counting":
				response = await countingSort(value);
				if (!response.data.time) setTime("Tamanho Inválido");
				else setTime(response.data.time + " ms");
				break;
			case "bubble":
				response = await bubbleSort(value);
				if (!response.data.time) setTime("Tamanho Inválido");
				else setTime(response.data.time + " ms");
				break;

			case "binary":
				response = await binarySearch(value, search);
				if (!response.status === 200) setTime("Tamanho Inválido");
				else
					setTime(
						response.data.time + " ms"
					);
				break;
			case "linear":
				response = await linearSearch(value, search);
				if (!response.status === 200) setTime("Tamanho Inválido");
				else
					setTime(
						response.data.time + " ms"
					);
				break;
			default:
				setTime("Internal Server Error");
		}
		console.log(response);
		isLoading(false);
	};

	return (
		<div className="App">
			<select
				className="options"
				value={algorithm}
				onChange={(e) => setAlgorithm(e.target.value)}
			>
				<option value="radix">Radix Sort</option>
				<option value="counting">Counting Sort</option>
				<option value="bubble">Bubble Sort</option>

				<option value="binary">Binary Search</option>
				<option value="linear">Linear Search</option>
			</select>

			<div className="teste">
				<input
					type="text"
					placeholder="Insira o tamanho do array"
					onChange={(e) => setValue(e.target.value)}
				></input>
			</div>
			<div className="actions">
				<input
					id="input-num"
					disabled={check}
					type="text"
					placeholder="Insira o numero que deseja buscar"
					onChange={(e) => setSearch(e.target.value)}
				></input>
				<input
					type="checkbox"
					checked={!check}
					onChange={() => isChecked(!check)}
					value="Searching ? "
				></input>

				<h1>{time}</h1>
			</div>

			<div className="button">
				<button onClick={() => handleTime(algorithm)}>Enter</button>
			</div>
			<div className="loader"> {loading && <div className="c-loader"></div>}</div>
		</div>
	);
}

export default App;
