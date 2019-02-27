import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './Header.js';
import Filter from './Filter.js';
import Content from './Content.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieRows: [],
      ids: [],
    }
    this.performSearch = this.performSearch.bind(this);
    
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch() {
    const urlString = "https://api.themoviedb.org/3/movie/popular?api_key=6db3cd67e35336927891a72c05c595cc&language=en-US&page=1";

    axios.get(urlString)
      .then(res => {
        console.log("got the data");

        const results = res.data.results
        let movieRows = [];
        let ids = [];
        
        results.forEach((movie) => {
          // console.log(movie.title);
          movieRows.push(movie);
          ids.push(movie.id);
        });
        this.setState({
          movieRows: movieRows,
          ids: ids
        })
        
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(this.state.ids);
  }



  render() {
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter globalState={this.state}/>
          <Content globalState={this.state} />
        </section>
      </div>
    );
  }
}

export default App;
