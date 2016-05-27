// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();

const TestComponent = React.createClass({
	render: function() {
		return <h1>Test~</h1>;
	}
});

ReactDOM.render(<TestComponent />, document.querySelector('main'));