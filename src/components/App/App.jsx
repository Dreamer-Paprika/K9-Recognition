import React, { Component } from 'react';
//import css from "./Styles.module.css";
import { fetchImages, fetchDetails, fetchFacts, fetchBreeds } from '../API/api';
import { nextFetch } from '../API/api';
import { Header } from '../Header/Header';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { InnerLoader } from '../InnerLoader/InnerLoader';
import { Modal } from '../Modal/Modal';
import Notiflix from 'notiflix';


export class App extends Component {
  state = {
    searchResults: [],
    isLoading: false,
    areDetailsLoading: false,
    fullImage: null,
    imageAlt: "Dog",
    detailsResults: {},
    page: 0,
    isBig: false,
    Breeds: [],
    Facts: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchImages()
      .then(images => {
        const response = images;
        console.log(response);
        this.setState({
          searchResults: response,
        });
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        this.setState({ isLoading: false });
        console.error(`Error message ${error}`);
      });
    
    fetchBreeds()
      .then(breeds => {
        const response = breeds;
        console.log(response);
        this.setState({
          Breeds: response,
        });
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
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
  
    const { page } = this.state;
    let store = page;
    store ++;
    this.setState({ isLoading: true });
    nextFetch(store)
      .then(images => {
        const response = images;
        this.setState({
          searchResults: response,
          page: store,
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
    this.setState({ areDetailsLoading: true });
    const value = evt.target.name;
    const altValue = evt.target.alt;
    this.setState({
      fullImage: value,
      imageAlt: altValue,
    });
    fetchDetails(altValue)
      .then(image => {
        console.log(image);
        const response = image;
        this.setState({
          detailsResults: response,
          isBig: true
        });
        setTimeout(() => {
          this.setState({ areDetailsLoading: false });
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        this.setState({ areDetailsLoading: false });
        console.error(`Error message ${error}`);
      });
      
      ;
  };

  handleClose = evt => {
    this.setState({
      fullImage: null,
      imageAlt: null,
      detailsResults: null,
      isBig: false
    });
  };

  render() {
    const { searchResults } = this.state;
    const { isLoading } = this.state;
    const { fullImage, imageAlt, areDetailsLoading, detailsResults, isBig } = this.state;

    return (
      <div>
        <Header />
        <ImageGallery gallery={searchResults}>
          <ImageGalleryItem
            results={searchResults}
            imageClick={this.handleImageClick}
          />
        </ImageGallery>
        <Loader isLoading={isLoading} />
        <InnerLoader areDetailsLoading={areDetailsLoading} />
        <Modal
          imgSrc={fullImage}
          altSrc={imageAlt}
          close={this.handleClose}
          info={detailsResults}
          ifBig={isBig}
        />
        <Button results={searchResults} onPress={this.handleButtonPress} />
      </div>
    );
  }
}
