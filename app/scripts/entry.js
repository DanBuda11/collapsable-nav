// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navWide">
					<a href="#">WideLink 1</a>
					<a href="#">Wide Link 2</a>
					<a href="#">Wide Link 3</a>
				</div>
				<div className="navNarrow">
					<a href="#">Narrow Link 1</a>
					<a href="#">Narrow Link 2</a>
					<a href="#">Narrow Link 3</a>
				</div>
			</nav>
		);
	}
});

ReactDOM.render(<NavComponent />, document.querySelector('main'));