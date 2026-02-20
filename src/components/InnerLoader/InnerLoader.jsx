import React, { Component } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import css from './InnerLoader.module.css';
import PropTypes from 'prop-types';
import dogApiLogo from './thedogapi-logo.svg';

export class InnerLoader extends Component{


    render() {
        const { areDetailsLoading } = this.props;

    
        
        return (
          <>
            {areDetailsLoading && (
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

InnerLoader.propTypes = {
  areDetailsLoading: PropTypes.bool.isRequired,
};