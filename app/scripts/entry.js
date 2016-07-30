// Import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Notes:
// 2. Right-side hamburger
// Use the variables file to make some preset color schemes for the nav background
// color, icons, and links
// will need to adjust the % width of the links down if add more links & vice versa

// Why do I need to add a margin to the burger & links when I put them on
// the right side of the navbar?

const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Link 1</a>
					</div>
					<div className="wideDiv">
						<a href="#">Link 2</a>
					</div>
					<div className="wideDiv">
						<a href="#">Link 3</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>Link 1</a>
						<a href="#" onClick={this.burgerToggle}>Link 2</a>
						<a href="#" onClick={this.burgerToggle}>Link 3</a>
					</div>
				</div>
			</nav>
		);
	},
	burgerToggle: function() {
		$('.narrowLinks').toggle();
	}
});

ReactDOM.render(<NavComponent />, document.querySelector('main'));