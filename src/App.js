import React, {
	Component
} from 'react';

import BarChart from './BarChart'

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [1, 2, 3, 4, 5, 6]
		}
		this.andy = this.andy.bind(this)
	}

	andy(num) {
		this.setState(prevData => ({
			data: [...prevData.data, num]
		}))
	}


	render() {
		return (
			<div className="App">
				<h3>D3 Dashboard</h3>
				<div>
					<BarChart andy={this.andy} data={this.state.data} size={[500,500]}/>
				</div>
			</div>

		);
	}
}

export default App;