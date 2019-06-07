import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="toggle" onClick={this.toggle}>
          <i className="toggle fa fa-bars fa-3x"></i>
        </div>
        <div className="links">
          <a href="#" onClick={this.toggle}>
            Link 1
          </a>
          <a href="#" onClick={this.toggle}>
            Link 2
          </a>
          <a href="#" onClick={this.toggle}>
            Link 3
          </a>
        </div>
      </React.Fragment>
    );
  }

  toggle() {
    if (window.innerWidth < 351) {
      document.querySelector('.links').classList.toggle('open');
    }
  }
}
