// See main.scss for customization instructions.

// Add code to create npm install version
const React = require('react');
const CollapsableNav = require('collapsable-nav');
module.exports = React.createClass({
	render: function() {
		return (
			// And then in here goes the JSX/HTML
		);
	}
});

// Stack Overflow link:
// http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children


// Code abouve will need to be tested

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

ReactDOM.render(<NavComponent />, document.querySelector('navbar'));
