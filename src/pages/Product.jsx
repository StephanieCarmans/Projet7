import React from 'react';

//import pour la gestion d'erreur d'id et la sélection d'un id particulier
import { Navigate, useParams } from 'react-router-dom';

//import composants de la page Product
import Slider from '../components/Slider';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';

//import json infos des logements
import products from '../data/data.json';

const Product = () => {
      //selection d'un id particulier pour rediriger vers les bonnes infos de manière dynamique
      const params = useParams();
      const product = products.find((product) => product.id === params.id);
      console.log({ product });

      //gestion de l'erreur d'id
      return !product ? (
            <Navigate to="/NotFound" />
      ) : (
            //Affichage des éléments de la page produit
            <div className="product">
                  <section>
                        <Slider slides={product.pictures} />
                  </section>

                  <section className="product__display">
                        <div className="location">
                              <h1 className="location__title">
                                    {product.title}
                              </h1>
                              <h2 className="location__sub">
                                    {product.location}
                              </h2>
                              <article className="location__tag">
                                    {product.tags.map((tags, id) => {
                                          return (
                                                <div key={id}>
                                                      <Tags tags={tags} />
                                                </div>
                                          );
                                    })}
                              </article>
                        </div>

                        <div className="info">
                              <Host
                                    image={product.host.picture}
                                    name={product.host.name}
                              />

                              <Rating rating={product.rating} />
                        </div>
                  </section>
                  <section className="product__collapsible">
                        <Collapse
                              title="Description"
                              content={<p>{product.description}</p>}
                        />
                        <Collapse
                              title="Équipements"
                              content={product.equipments.map((content, id) => {
                                    return <p key={id}>{content}</p>;
                              })}
                        />
                  </section>
            </div>
      );
};
export default Product;
