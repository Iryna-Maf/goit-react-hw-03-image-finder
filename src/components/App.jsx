import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };

  hendleFormSearchSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName } = this.state;
    return (
      <>
        <ToastContainer position="top-left" autoClose={2000} />
        <SearchBar onSubmit={this.hendleFormSearchSubmit} />
        <ImageGallery imageName={imageName} />
      </>
    );
  }
}
export default App;
