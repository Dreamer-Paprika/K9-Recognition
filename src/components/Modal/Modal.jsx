import React, { Component } from 'react';
import css from './Modal.module.css';
import svg from "./icons.svg";
import PropTypes from 'prop-types';

export class Modal extends Component {

  render() {
    const { imgSrc } = this.props;
    const { altSrc } = this.props;
    const { close } = this.props;
    const { info, ifBig } = this.props;
    return (
      <>
        {imgSrc !== null && (
          <div className={css.overlay}>
            <button className={css.closeModal} onClick={close}>
              <svg width="20px" height="20px" className={css.modalIcon}>
                <use href={`${svg}#icon-close`}></use>
              </svg>
            </button>
            <div className={css.modal}>
              {Object.keys(info ?? {}).length > 0 ? (
                <div
                  className={css.info}
                  style={{
                    transform: `${ifBig && 'scale(5)'}`,
                  }}
                >
                  <table
                    style={{
                      color: 'black',
                      borderCollapse: 'collapse',
                      fontSize: '3px',
                    }}
                  >
                    <caption
                      className={css.caption}
                      style={{
                        padding: '1px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        fontWeight: '700',
                        fontSize: '4px',
                      }}
                    >
                      Image Details
                    </caption>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                        }}
                      >
                        BREED NAME:
                      </th>
                      <td
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                          padding: '1px',
                        }}
                      >
                        {info?.breeds?.[0]?.name ? info.breeds[0].name : 'Null'}
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                        }}
                      >
                        ORIGIN:
                      </th>
                      <td
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                          padding: '1px',
                        }}
                      >
                        {info?.breeds?.[0]?.origin
                          ? info.breeds[0].origin
                          : 'Null'}
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                        }}
                      >
                        LIFE SPAN:
                      </th>
                      <td
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                          padding: '1px',
                        }}
                      >
                        {info?.breeds?.[0]?.life_span
                          ? `${info.breeds[0].life_span} years`
                          : 'Null'}
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                        }}
                      >
                        BREED GROUP:
                      </th>
                      <td
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                          padding: '1px',
                        }}
                      >
                        {info?.breeds?.[0]?.breed_group
                          ? info.breeds[0].breed_group
                          : 'Null'}
                      </td>
                    </tr>
                  </table>
                </div>
              ) : (
                <div className={css.loading}>Loading...</div>
              )}
              <img
                className={css.modalImage}
                src={imgSrc}
                alt={altSrc}
                style={{
                  transform: `${
                    Object.keys(info ?? {}).length > 0 && 'scale(0.4)'
                  }`,
                }}
              />
              {Object.keys(info ?? {}).length > 0 ? (
                <div
                  className={css.info}
                  style={{
                    transform: `${ifBig && 'scale(5)'}`,
                  }}
                >
                  <table
                    style={{
                      color: 'black',
                      borderCollapse: 'collapse',
                      fontSize: '3px',
                    }}
                  >
                    <caption
                      className={css.caption}
                      style={{
                        padding: '1px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        fontWeight: '700',
                        fontSize: '4px',
                      }}
                    >
                      Image Details
                    </caption>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                        }}
                      >
                        DESCRIPTION:
                      </th>
                      <td
                        style={{
                          textAlign: 'left',
                          border: '1px solid black',
                          padding: '1px',
                        }}
                      >
                        {info?.breeds?.[0]?.description ? `${info.breeds[0].description}` : 'Null'}
                      </td>
                    </tr>                  
                  </table>
                </div>
              ) : (
                <div className={css.loading}>Loading...</div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};