import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div className="fil-container">
        <div className="filter-section">
          <div className="genres">
            <h1>Genres</h1>
            <input type="text" placeholder="Search for a Genre" />
            <div className="genre-container">
              <div className="genre-name">
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  All Genres
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Action
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Adventure
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Biopic
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Comedy
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Horror
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Romance
                </label>
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="genre"/>
                  Sci-fi
                </label>
                
              </div>
            </div>
          </div>
          <hr/>

          <div className="revenue">
            <h1>Revenue</h1>
            <label>
              <input className="radio" type="radio" name="rev" />
              1M-10M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" />
              1M-10M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" />
              1M-10M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" />
              1M-10M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" />
              1M-10M
            </label>
              
          </div>
          <hr/>

          <div className="languages">
            <h1>Languages</h1>
            <input type="text" placeholder="Search for a Language" />
            <div className="languages-container">
              <div className="language">
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                <label htmlFor="language">
                  <input type="checkbox" name="language"/>
                  English
                </label>
                
              </div>
            </div>
          </div>
          <hr/>

          <div className="release-date">
            <h1>Release Date</h1>
            <div className="release-container">
              <input type="text" placeholder="Start date"></input>
              <input type="text" placeholder="End date"></input>
            </div>
          </div>
          
        </div>
      </div>

    )
  }
}