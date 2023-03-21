import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg nav-style">
          <a className="navbar-brand" href="#">
            Pokemon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav-style" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pokemon Search
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
