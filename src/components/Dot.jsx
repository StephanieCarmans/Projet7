import React from 'react';

const Dot = ({ activeIndex, onclick, sliderImage }) => {
      return (
            <div className="all-dots">
                  {sliderImage.map((slide, index) => (
                        <span
                              key={index}
                              className={`${
                                    activeIndex === index
                                          ? 'dot active-dot'
                                          : 'dot'
                              }`}
                              onClick={() => onclick(index)}
                        >
                              ●
                        </span>
                  ))}
            </div>
      );
};

export default Dot;
