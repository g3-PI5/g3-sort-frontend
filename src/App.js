import React, { useState } from "react";
import "./App.css";
import {
	binarySearch,
	bubbleSort,
	selectionSort,
	linearSearch,
	radixSort,
} from "./service/api";
import Table from "./Components/Table";


function App() {
	const [algorithm, setAlgorithm] = useState("radix");
	const [search, setSearch] = useState(0);
	const [time, setTime] = useState("Tempo necessário para execução");
	const [value, setValue] = useState(0);
	const [loading, isLoading] = useState(false);

	const [selection, setSelection] = useState([])
	const [radix, setRadix] = useState([])
	const [bubble, setBubble] = useState([])
	const [binary, setBinary] = useState([])
	const [linear, setLinear] = useState([])

	const [check, isChecked] = useState(true);

	const handleTime = async (option) => {
		isLoading(true);
		var response;
		switch (option) {
			case "radix":
				response = await radixSort(value);
				if (!response.data.time) setTime("Tamanho Inválido");
				else {
					setTime(response.data.time + " ms");
					radix.push(response.data.time)
				}
				break;
			case "selection":
				response = await selectionSort(value);
				if (!response.data.time) setTime("Tamanho Inválido");
				else {
					setTime(response.data.time + " ms");
					selection.push(response.data.time)
				}
				break;
			case "bubble":
				response = await bubbleSort(value);
				if (!response.data.time) setTime("Tamanho Inválido");
				else {
					setTime(response.data.time + " ms");
					bubble.push(response.data.time)
				}
				break;

			case "binary":
				response = await binarySearch(value, search);
				if (!response.status === 200) setTime("Tamanho Inválido");
				else {
					setTime(response.data.time + " ms");
					binary.push(response.data.time)
				}
				break;
			case "linear":
				response = await linearSearch(value, search);
				if (!response.status === 200) setTime("Tamanho Inválido");
				else {
					setTime(
						response.data.time + " ms"
					);
					linear.push(response.data.time)
				}
				break;
			default:
				setTime("Internal Server Error");
		}
		console.log(response.data);
		isLoading(false);
	};
	if (loading) {

		return <div className="loader"> <div className="c-loader"></div></div>
	}

	return (
		<div className="App">
			<div className="inputs">
				<select
					className="options"
					value={algorithm}
					onChange={(e) => setAlgorithm(e.target.value)}
				>
					<option value="radix">Radix Sort</option>
					<option value="selection">Selection Sort</option>
					<option value="bubble">Bubble Sort</option>

					<option value="binary">Binary Search</option>
					<option value="linear">Linear Search</option>
				</select>

				<div className="teste">
					<input
						type="text"
						id="tamarray"
						placeholder="Tamanho do Conjunto"
						onChange={(e) => setValue(e.target.value)}
					></input>
				</div>
				<div className="actions">
					<input
						id="input-num"
						disabled={check}
						type="text"
						placeholder="Valor Para Buscar"
						onChange={(e) => setSearch(e.target.value)}
					></input>
					<input
						type="checkbox"
						checked={!check}
						onChange={() => isChecked(!check)}
					></input>

					<h1>{time}</h1>
				</div>

				<div className="button">
					<button id="buttonn" disabled={(algorithm == "binary" && search < 20) || (algorithm == "binary" && search > 2000000)} onClick={() => handleTime(algorithm)}>Enter</button>
				</div>

			</div>
			<div id="tablestyle">
				<Table selection={selection} radix={radix} bubble={bubble} binary={binary} linear={linear} />
			</div>
		</div>
	);
}

export default App;
