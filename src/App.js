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
      movieDetails: [],
      filteredData: [],
      genreSearch: '',
      genreList: [],
    }
    this.performSearch = this.performSearch.bind(this);
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.getGenres = this.getGenres.bind(this);
    
  }
  componentDidMount() {
    this.performSearch();
    this.getGenres();
  }

  performSearch() {
    const urlString = "https://api.themoviedb.org/3/movie/popular?api_key=6db3cd67e35336927891a72c05c595cc&language=en-US&page=1";
    axios.get(urlString)
      .then(res => {
    
        const results = res.data.results
        
        return Promise.all(results.map((movie) => {
          return axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=6db3cd67e35336927891a72c05c595cc&language=en-US`)
          .then(res => {
            return res.data
          })
          .catch(function (error) {
            console.log(error);
          });

        }));    
      })
      .then(res => {
            //console.log(res);
            this.setState({
              movieDetails: res,
              filteredData: res
            })
            //console.log(this.state)        
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  change(event) {
    let name = event.target.name;
    let value = 
      (event.target.type === 'checkbox')
      ? event.target.checked 
      : event.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      this.filteredData();
    })
  }

  getGenres() {
    const urlString = " https://api.themoviedb.org/3/genre/movie/list?api_key=6db3cd67e35336927891a72c05c595cc&language=en-US";
    axios.get(urlString)
    .then(res => {
      let genreList = res.data.genres.map(genre => {
        return genre.name;
      })
      this.setState({
        genreList: genreList
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  filteredData() {
    let newData = this.state.movieDetails;
    let genreList = this.state.genreList;

    genreList.forEach(genre => {
      if (this.state[genre] === true) {
          newData = this.state.filteredData.filter((item) => {
            return item.genres.some(genreAv => genreAv.name === genre);
          });
      }
    })


    this.setState({
      filteredData: newData
    })
  }

  populateForms() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter globalState={this.state} change={this.change} />
          <Content globalState={this.state} />
        </section>
      </div>
    );
  }
}

export default App;
