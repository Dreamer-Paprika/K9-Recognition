import React, { Component } from 'react';
//import css from "./Styles.module.css";
import { fetchImages } from '../API/api';
import { loadSrch } from '../API/api';
import { Header } from '../Header/Header';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import Notiflix from 'notiflix';


export class App extends Component {
  state = {
    searchResults: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchImages()
      .then(images => {
        const response = images;
        this.setState({
          searchResults: response,
        });
        setTimeout(() => {
          this.setState({ isLoading: false }); 
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        this.setState({ isLoading: false });
        console.error(`Error message ${error}`);
      });
  }


  handleButtonPress = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);
    const { searchTerm } = this.state;
    const { pageItems } = this.state;
    //const { searchResults } = this.state;
    const { resultsAmount } = this.state;
    let storageVar = pageItems;
    storageVar += 12;
    if (storageVar >= resultsAmount) {
       Notiflix.Notify.warning(
         "We're sorry, but you've reached the end of search results."
       );
      //evt.target.style.display = 'none';
      this.setState({ fewResponse: true });
    }
    this.setState({ isLoading: true });
    loadSrch(searchTerm, storageVar)
      .then(users => {
        const response = users.hits;
        this.setState({
          searchResults: response,
          pageItems: storageVar,
        });
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        this.setState({ isLoading: false });
        console.error(`Error message ${error}`);
      });
  };

  handleImageClick = evt => {
    const value = evt.target.name;
    const altValue = evt.target.alt;
    console.log(altValue);
    this.setState({
      fullImage: value,
      imageAlt: altValue,
    });
  };

  handleClose = evt => {
    this.setState({
      fullImage: undefined
    });
  };
  

  render() {
    const { searchResults } = this.state;
    const { didUserSearch } = this.state;
    const { fewResponse } = this.state;
    const { isLoading } = this.state;
    const { fullImage, imageAlt } = this.state;

    return (
      <div>
        <Header/>
        <ImageGallery gallery={searchResults}>
          <ImageGalleryItem
            results={searchResults}
            imageClick={this.handleImageClick}
          />
        </ImageGallery>
        <Loader isLoading={isLoading} />
        <Modal imgSrc={fullImage} altSrc={imageAlt} close={this.handleClose} />
        <Button
          results={searchResults}
          ifUserSearched={didUserSearch}
          onPress={this.handleButtonPress}
          iflessResponse={fewResponse}
        />
      </div>
    );
  }
}
