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
	const [selected, setSelected] = useState(true);
	const [time, setTime] = useState(-1);

	const [value, setValue] = useState(0);

	const handleTime = async (option) => {
		var response;
		console.log(option);
		switch (option) {
			case "radix":
				response = await radixSort(value);
				setTime(response.data.time + " ms");
				break;
			case "counting":
				response = await countingSort(value);
				setTime(response.data.time + " ms");
				break;
			case "bubble":
				response = await bubbleSort(value);
				setTime(response.data.time + " ms");
				break;
			case "binary":
				response = await binarySearch(value, search);
				setTime(response.data.time + " ms");
				break;
			case "linear":
				response = await linearSearch(value, search);
				setTime(response.data.time + " ms");
				break;
		}
		console.log(response);
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
					disabled={selected}
					type="text"
					placeholder="Insira o numero que deseja buscar"
					onChange={(e) => setValue(e.target.value)}
				></input>
				<input
					type="button"
					onClick={() => {
						setSelected(!selected);
					}}
					value="Search Algorithm"
				></input>

				<h1>{time}</h1>
			</div>

			<div className="button">
				<button onClick={() => handleTime(algorithm)}>Entrar</button>
			</div>
		</div>
	);
}

export default App;
