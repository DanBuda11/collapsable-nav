// Import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// Notes:
// Make different NavComponents and comment them out with instructions
// as to what each one specifically does.
// 1. Left-side hambugrer
// 2. Right-side hamburger
// 3. Slide-down for both left- and right-side hamburgers
// 4. Slide in fron the left/right for left/right hamburgers
// Add bit of template code for someone to add additional links,
// but if too many, won't look good when breakpoints expand.


const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navWide">
					<a href="#">Wide Link 1</a>
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