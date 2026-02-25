import React, { Component } from 'react';
import css from './Header.module.css';
import logo from './dogFace.png';


export class Header extends Component {
  handleImages = () => {
    const galleryArea = document.getElementById('gallery');
    galleryArea.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  handleStats = () => {
    const galleryArea = document.getElementById('stats');
    galleryArea.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    return (
      <header className={css.header}>
        <div className={css.imageWrapper}>
          <img className={css.logo} alt='Logo' src={logo} />
        </div>
        <div className={css.innerHeader}>
          <button className={css.button} onClick={this.handleImages}>
            Images
          </button>
          <h1>K9 Recognition</h1>
          <button className={css.button} onClick={this.handleStats}>
            Stats
          </button>
        </div>
      </header>
    );
  }
}

