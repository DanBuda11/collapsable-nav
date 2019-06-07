import React from 'react';
import ReactDOM from 'react-dom';
// Keep import below for scss to work correctly
import './styles/main.scss';

import Navbar from './components/App';

ReactDOM.render(<Navbar />, document.getElementById('root'));

// Keep code below for Webpack Hot Module Replacement to work correctly
if (module.hot) {
  module.hot.accept();
}
