import React, { useState, useContext } from "react";
import "./App.css";

function App() {
	const [algorithm, setAlgorithm] = useState('')
	const handleTime = async () => {
		console.log(algorithm)
	}

	return (
		<div className="App">
			<select value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
				<option value="radix">Radix Sort</option>
				<option value="counting">Counting Sort</option>
				<option value="bubble">Bubble Sort</option>

				<option value="binary">Binary Search</option>
				<option value="linear">Linear Search</option>
			</select>
			<div className="actions">
				<button onClick={handleTime}>Entrar</button>
			</div>
		</div>
	);
}

export default App;
