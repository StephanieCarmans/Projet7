import React, { useState } from 'react';

//import image arrow up and down
import { ReactComponent as Arrow } from '../assets/chevron.svg';

const Collapse = ({ title, content }) => {
      //Mise en place d'un composant collapse fermé qui ne s'ouvre qu'au click de l'utilisateur
      const [isOpen, setIsOpen] = useState(false);
      return (
            <div className="collapse">
                  <div
                        className="collapse__btn"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <h2 className="collapse__btn--title">{title}</h2>
                        {isOpen ? (
                              //fermeture de l'éléments collapse
                              <div className="collapse__btn--svg rotate">
                                    <Arrow />
                              </div>
                        ) : (
                              //ouverture de l'éléments collapse avec son contenu
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
