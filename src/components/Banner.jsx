import React from 'react';

const Banner = ({ image, title }) => {
      return (
            <div className="banner">
                  <img src={image} alt="" className="banner__img" />
                  <h2 className="banner__title">{title}</h2>
            </div>
      );
};

export default Banner;
