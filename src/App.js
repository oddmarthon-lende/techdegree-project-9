import React, { Component } from 'react';
import { Provider } from './Context';
import axios from 'axios';
import {SearchForm} from './searchform';
import {MainNav} from './mainnav';
import {PhotoList} from './photolist';
import {NotFound} from './notfound';
import {apiKey} from './.config';

class App extends Component {

  state = {
    searchText: this.props.match ? (this.props.match.tags || "") : "",
    defaultTags: [
      "Apples",
      "Plums",
      "Potatoes"
    ],
    photos: [],
    loading: false
  }

  componentDidMount() {
    if(this.props.match) {
      const tags = this.props.match.params.tags;
      tags && this.search(tags);
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.tags !== prevProps.match.params.tags) {
      this.search(this.props.match.params.tags);
    }
  }

  search = (text) => {

    const path = "/search/"+text;

    this.setState(prevState => ({
      searchText: text,
      loading: true
    }));

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${text}`)
    .then(response => this.setState(prevstate => ({
      photos: response.data.photos.photo.map(
        photo => ({
          title: photo.title,
          src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`
        })),
        loading: false
    })));

    if(path !== this.props.location.pathname)
      this.props.history.push(path);

  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        search: this.search
      }}>
        <SearchForm />
        <MainNav />
        {this.state.loading ? (<h1>Loading...</h1>) : (!this.state.photos.length && this.state.searchText ? <NotFound /> : <PhotoList />)}
      </Provider>
    );
  }
}

export default App;
