import React from 'react';
import { useParams } from 'react-router-dom';

import Slider from '../components/Slider';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';

import products from '../data/data.json';

const Product = () => {
      const params = useParams();
      const product = products.find((product) => product.id === params.id);
      console.log({ product });

      return (
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
