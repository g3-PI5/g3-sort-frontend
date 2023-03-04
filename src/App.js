import React, { useState } from "react";
import "./App.css";

function App() {
	const [algorithm, setAlgorithm] = useState("");
	const [search, setSearch] = useState(0);
	const [value, setValue] = useState(0);
	const handleTime = async () => {
		console.log(algorithm);
	};

	return (
		<div className="App">
			<select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
				<option value="radix">Radix Sort</option>
				<option value="counting">Counting Sort</option>
				<option value="bubble">Bubble Sort</option>

				<option value="binary">Binary Search</option>
				<option value="linear">Linear Search</option>
			</select>

			<div className="actions">
				<input
					type="text"
					placeholder="Insira o tamanho do array"
					onChange={(e) => setValue(e.target.value)}
				></input>
			</div>
			<div className="actions" disable={true}>
				<input
					type="text"
					placeholder="Insira o numero que deseja buscar"
					onChange={(e) => setValue(e.target.value)}
				></input>

				<h1>{value}</h1>
			</div>

			<div className="actions">
				<button onClick={handleTime}>Entrar</button>
			</div>
		</div>
	);
}

export default App;
