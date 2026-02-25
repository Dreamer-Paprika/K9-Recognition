import React, { Component } from 'react';
import css from './Stats.module.css';
import sadDog from './sadDog.png'

export class Stats extends Component{


    render() {
        const {
          BreedsVar,
          StatsVar,
          handleSelect,
          handleScroll,
          hasSelected
        } = this.props;

    
        
        return (
          <>
            <div className={css.statsArea} id="stats">
              <h2 className={css.statsAreaHeading}>Stats</h2>
              <div className={css.selectorWrapper}>
                <select onChange={handleSelect} id="breedSelector">
                  <option value="" selected disabled>
                    Select a Dog Breed
                  </option>
                  {BreedsVar.map(breed => {
                    return (
                      <option value={breed.name} key={breed.id}>
                        {breed.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={css.stats}>
                {StatsVar.length === 0 && hasSelected === false && (
                  <button className={css.button} onClick={handleScroll}>
                    Select a breed
                  </button>
                )}
                {StatsVar.length === 0 && hasSelected === true && (
                  <div className={css.emptyMessage}>
                    <div>
                      <img
                        className={css.messageIllustration}
                        src={sadDog}
                        alt="sad dog"
                      />
                    </div>
                    <div>No Breed Data Available !!!</div>
                  </div>
                )}
                {StatsVar.length !== 0 && hasSelected === true && (
                  <div className={css.statsWrapper}>
                    {
                      StatsVar.map((breed) => {
                        return (
                          <div className={css.breedWrapper}>
                            <div className={css.statsImageWrapper}>
                              <img
                                className={css.statsImage}
                                src={breed.image_link}
                                alt="Dog"
                              />
                            </div>
                            <div className={css.statsDetailsWrapper}>
                              <h3 className={css.nameStat}>{breed.name}</h3>
                              <div className={css.statItem}>
                                Barking: {breed.barking}/5
                              </div>
                              <div className={css.statItem}>
                                Coat Length: {breed.coat_length}/5
                              </div>
                              <div className={css.statItem}>
                                Drooling: {breed.drooling}/5
                              </div>
                              <div className={css.statItem}>
                                Energy: {breed.energy}/5
                              </div>
                              <div className={css.statItem}>
                                Good With children: {breed.good_with_children}/5
                              </div>
                              <div className={css.statItem}>
                                Good With other Dogs:{' '}
                                {breed.good_with_other_dogs}/5
                              </div>
                              <div className={css.statItem}>
                                Good With Strangers: {breed.good_with_strangers}
                                /5
                              </div>
                              <div className={css.statItem}>
                                Grooming: {breed.grooming}/5
                              </div>
                              <div className={css.statItem}>
                                Max Height Female: {breed.max_height_female}/5
                              </div>
                              <div className={css.statItem}>
                                Min Height Female: {breed.min_height_female}
                              </div>
                              <div className={css.statItem}>
                                Max Height Male: {breed.max_height_male}
                              </div>
                              <div className={css.statItem}>
                                Min Height Male: {breed.min_height_male}
                              </div>
                              <div className={css.statItem}>
                                Max Weight Female: {breed.max_weight_female}
                              </div>
                              <div className={css.statItem}>
                                Min Weight Female: {breed.min_weight_female}
                              </div>
                              <div className={css.statItem}>
                                Max Weight Male: {breed.max_weight_male}
                              </div>
                              <div className={css.statItem}>
                                Min Weight Male: {breed.min_weight_male}
                              </div>
                              <div className={css.statItem}>
                                Max Life Expectancy: {breed.max_life_expectancy}
                              </div>
                              <div className={css.statItem}>
                                Min Life Expectancy: {breed.min_life_expectancy}
                              </div>
                              <div className={css.statItem}>
                                Playfulness: {breed.playfulness}/5
                              </div>
                              <div className={css.statItem}>
                                Protectiveness: {breed.protectiveness}/5
                              </div>
                              <div className={css.statItem}>
                                Shedding: {breed.shedding}/5
                              </div>
                              <div className={css.statItem}>
                                Trainability: {breed.trainability}/5
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                )}
              </div>
            </div>
          </>
        );
    }
}
