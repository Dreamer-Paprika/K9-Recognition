import React, { Component } from 'react';
import css from './Facts.module.css';
import PropTypes from 'prop-types';
import dogApiLogo from './thedogapi-logo.svg';

export class Loader extends Component{


    render() {
        const { isLoading, areDetailsLoading } = this.props;

    
        
        return (
          <>
            {(isLoading || areDetailsLoading) && (
              <div className={css.backDrop}>
                <div className={css.loaderWrapper}>
                  <div className={css.loaderContainer}>
                    <p>
                      <i>Powered by</i>
                    </p>
                    <img
                      src={dogApiLogo}
                      alt="Dog API logo"
                      className={css.loader}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        );
    }
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };