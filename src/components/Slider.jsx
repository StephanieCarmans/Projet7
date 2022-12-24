import React, { useState } from 'react';

//import des chevrons gauche et droite
import { ReactComponent as ArrowLeft } from '../assets/Chevron-left.svg';
import { ReactComponent as ArrowRight } from '../assets/Chevron-right.svg';

const Slider = ({ slides }) => {
      //permet de determiner position de images pour le carousel
      const [currentIndex, setCurrentIndex] = useState(0);
      //calcul grandeur du tableau picture
      const length = slides.length;
      //vers suivant
      const goToNext = () => {
            setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
      };
      //vers précédent
      const goToPrevious = () => {
            setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
      };

      return (
            <section className="slider">
                  {slides.map((picture, id) => {
                        return (
                              <div key={id}>
                                    {id === currentIndex && (
                                          <img
                                                src={picture}
                                                alt=""
                                                className="slider__image"
                                          />
                                    )}
                              </div>
                        );
                  })}

                  {/* mise en place du défilement */}
                  {length > 1 ? (
                        <>
                              <div
                                    className="slider__previous"
                                    onClick={goToPrevious}
                              >
                                    <ArrowLeft />
                              </div>
                              <div className="slider__next" onClick={goToNext}>
                                    <ArrowRight />
                              </div>
                              {/* pagination des images */}
                  <div className="slider__count">
                        {currentIndex + 1}/{length}{' '}
                  </div>
                        </>
                  ) : null}
                  
            </section>
      );
};

export default Slider;

/*${currentIndex + 1}/${data.length}*/
