import React from 'react';

//gestion des éléments constituants les vignettes
const Thumb = ({ image, title }) => {
      return (
            <div className="thumb">
                  <img src={image} alt="" className="thumb__img" />
                  <h2 className="thumb__title">{title}</h2>
            </div>
      );
};

export default Thumb;
