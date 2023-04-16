//this file is JSX that means you can use HTML in JavaScript
import './App.css';

function App() {
	const textInput = <input type="text" />
	return (
		<div className="App">
			<header className="App-header">
				<h4>My-cafe</h4>
				<div className="header-right">
					<h4>login</h4>
					<h4>register</h4>
				</div>
			</header>
			<div className="App-grid">
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
				<div>
					123456 123456 123456 123456 123456 123456 123456 123456
				</div>
			</div>
		</div>
	);
}

export default App;
