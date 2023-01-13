import React from 'react';

//import lien redirection vers la page accueuil Home
import { Link } from 'react-router-dom';

const Notfound = () => {
      return (
            <div className="error">
                  <h1 className="error__title">404</h1>
                  <p className="error__text">
                        Oups ! La page que vous demandez n'existe pas.
                  </p>

                  <Link to={`/`} className="error__link">
                        Retourner sur la page d'accueil
                  </Link>
            </div>
      );
};
export default Notfound;
