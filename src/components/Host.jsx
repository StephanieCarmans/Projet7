import React from 'react';

const Host = ({ image, name }) => {
      return (
            <div className="host">
                <h2 className="host__name">{name}</h2>
                  <img src={image} alt="" className="host__image" />
                  
            </div>
      );
};

export default Host;
