import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/chevron.svg';
//import Arrow/ from './Arrow';

const Collapse = ({ title, content }) => {
      const [isOpen, setIsOpen] = useState(false);
      return (
            <div className="collapse">
                  <div
                        className="collapse__btn"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <h2 className="collapse__btn--title">{title}</h2>
                        {isOpen ? (
                              <div className="collapse__btn--svg rotate">
                                    <Arrow />
                              </div>
                        ) : (
                              <div className="collapse__btn--svg rotate-down">
                                    <Arrow />
                              </div>
                        )}
                  </div>
                  {isOpen && <div className="collapse__text">{content}</div>}
            </div>
      );
};

export default Collapse;
