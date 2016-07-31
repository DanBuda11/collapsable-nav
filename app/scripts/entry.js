// See main.scss for customization instructions.

import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
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