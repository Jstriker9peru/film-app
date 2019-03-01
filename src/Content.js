import React, { Component } from 'react';
// import axios from 'axios';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Jonathan',
        }
        this.filmLoop = this.filmLoop.bind(this);
    }
   
    filmLoop() {

        let filteredData = this.props.globalState.filteredData;
       
   
        console.log(this.props.globalState);

        return filteredData.map((movie, index) => {
            
            return (
                <div className="film" key={index}>
                    <img className="poster" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="The Dark Knight poster" />
                    <div className="film-info">
                        <div className="film-title">
                            <h3>{movie.title}</h3>
                        </div>
                        <h4>{movie.tagline}</h4>
                        <div className="ratings">
                            <div className="category runtime">
                                <h5><i className="far fa-clock extra"></i> {movie.runtime} min</h5>
                            </div>
                            <div className="category">
                                <h5 className="left"><span className="extra">Imdb:</span> 7.5/10</h5>
                            </div>
                            <div className="category">
                                <h5 className="right"><span className="extra">Revenue:</span> 
                                {
                                    (movie.revenue > 1000000000) 
                                    ? ` $${(movie.revenue / 1000000000).toFixed(1)}B` 
                                    : ` $${Math.floor(movie.revenue / 1000000)}M`
                                }</h5>
                            </div>
                            <div className="category">
                                <h5 className="left"><span className="extra">Score:</span> 31.62</h5>
                            </div>
                            <div className="category">
                                <h5 className="right"><span className="extra">Language:</span><span className="language"> {movie.original_language}</span> </h5>
                            </div>
                        </div>
                    </div>
                </div>
                                
            )
        });    
    }

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
            
                {this.filmLoop()}
         
                
            </div>
        </div>
      )
    }
}