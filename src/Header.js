import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>Movie Search App</div>
                <nav>
                    <li className="link">Home</li>
                    <li className="link">Little</li>
                    <li className="link">Big</li>
                </nav>
            </header>

        )
    }
}