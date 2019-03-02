import React, { Component } from 'react';

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.genreLoop = this.genreLoop.bind(this);
  }
  genreLoop() {
    let genreList = this.props.globalState.genreList;

    return genreList.map((genre, index) => {
      return (
        <label htmlFor={genre} key={index}>
          <input className="checkbox" type="checkbox" name={genre} onChange={this.props.change}/>
          {genre}
        </label>
      )
    })
  }
  render() {
    return (
      <div className="fil-container">
        <div className="filter-section">
          <div className="genres">
            <h1>Genres</h1>
            <input type="text" name="genreSearch" placeholder="Search for a Genre" onChange={this.props.change} />
            <div className="genre-container">
              <div className="genre-name">
                <label htmlFor="genre">
                  <input className="checkbox" type="checkbox" name="allGenres" onChange={this.props.change}/>
                  All Genres
                </label>
                {this.genreLoop()}
                
              </div>
            </div>
          </div>
          <hr/>

          <div className="revenue">
            <h1>Revenue</h1>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="All" />
              All
            </label>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="20" />
              Less than 20M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="100" />
              20M-100M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="250" />
              100M-250M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="500" />
              250M-500M
            </label>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="1B" />
              500M-1B
            </label>
            <label>
              <input className="radio" type="radio" name="rev" onChange={this.props.change} value="1B+" />
              Greater than 1B
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
              <input type="date" placeholder="Start date"></input>
              <input type="text" placeholder="End date"></input>
            </div>
          </div>
          
        </div>
      </div>

    )
  }
}