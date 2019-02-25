import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
      return (
        <div className="content">
            <div className="results-sort">
                <h3>24 results found in 4ms</h3>
                <select>
                    <option>
                        Sort by Revenue (High to Low)
                    </option>
                    <option>
                        Sort by Popularity (High to Low)
                    </option>
                    <option>
                        Sort by Ratings (High to Low)
                    </option>
                    <option>
                        Sort by Title (A-Z)
                    </option>
                </select>
            </div>
            <div className="films-container">
                <div className="film">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51k98elC6mL.jpg" alt="The Dark Knight poster" />
                    <div className="film-info">
                        <div>
                            <h3>The Dark Knight Rises</h3>
                        </div>
                        <h4>The Legend Ends</h4>
                        <div></div>
                    </div>
                </div>
                
                
            </div>
        </div>
      )
    }
}