import React, { useState } from 'react';

//import des chevrons gauche et droite
import ArrowLeft from '../assets/Chevron-left.svg';
import ArrowRight from '../assets/Chevron-right.svg';

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
      const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
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
                                    <img
                                          className="slider__previous--arrow"
                                          src={ArrowLeft}
                                          alt=""
                                    />
                              </div>
                              <div className="slider__next" onClick={goToNext}>
                                    <img
                                          className="slider__next--arrow"
                                          src={ArrowRight}
                                          alt=""
                                    />
                              </div>
                              {/* pagination des images */}
                              {/*  <div className="slider__count">
                                    {currentIndex + 1}/{length}
                              </div>*/}
                              {/* dot */}
                              <div className="slider__dot">
                                    {slides.map((slide, slideIndex) => (
                                          <div
                                                className="slider__dot--style"
                                                key={slideIndex}
                                                onClick={() =>
                                                      goToSlide(slideIndex)
                                                }
                                          >
                                                ●
                                          </div>
                                    ))}
                              </div>
                        </>
                  ) : null}
            </section>
      );
};

export default Slider;

/*${currentIndex + 1}/${data.length}*/
