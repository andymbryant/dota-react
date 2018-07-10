import React from 'react';
import './App.css'
import * as d3 from 'd3';

class BarChart extends React.Component {
	constructor(props) {
		super(props)
		this.createBarChart = this.createBarChart.bind(this)
	}
	componentDidMount() {
		this.createBarChart()
	}
	componentDidUpdate() {
		this.createBarChart()
	}
	createBarChart() {
		const node = this.node;
		const dataMax = d3.max(this.props.data);
		const yScale = d3.scaleLinear()
			.domain([0, dataMax])
			.range([
				0, this.props.size[1]
			])
		d3.select(node)
			.selectAll('rect')
			.data(this.props.data)
			.enter()
			.append('rect')

		d3.select(node)
			.selectAll('rect')
			.data(this.props.data)
			.exit()
			.remove()

		d3.select(node)
			.selectAll('rect')
			.data(this.props.data)
			.style('fill', '#fe9922')
			.attr('x', (d, i) => i * 25)
			.attr('y', d => this.props.size[1] - yScale(d))
			.attr('height', d => yScale(d))
			.attr('width', 25)
			.on('mouseover', function() {
				d3.select(this)
					.style('fill', 'red')
			})
			.on('mouseout', function() {
				d3.select(this)
					.style('fill', '#fe9922')
			})
	}

	render() {
		return (<div>
				<button value="5" onClick={ e => this.props.andy(e.target.value)}>5</button>
				<button value="7" onClick={ e => this.props.andy(e.target.value)}>7</button>
				<button value="8" onClick={ e => this.props.andy(e.target.value)}>8</button>
				<button value="3" onClick={ e => this.props.andy(e.target.value)}>3</button>
				<button value="22" onClick={ e => this.props.andy(e.target.value)}>22</button>
				<svg ref={node => this.node = node} width={500} height={500}></svg>
			</div>)
	}
}
export default BarChart