import React from 'react';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import image from '../assets/homeBanner.png';

import Banner from '../components/Banner';
import Thumb from '../components/Thumb';

import products from '../data/data.json';

const Home = () => {
      const [houses, setHouses] = useState([]);
      useEffect(() => {
            setHouses(products);
            //console.log(houses)
      }, [houses]);
      return (
            <div className="home">
                  <Banner
                        image={image}
                        title="Chez vous, partout et ailleurs"
                  />
                  <section className="home__products">
                        {houses.map((product, id) => {
                              return (
                                    <article key={id}>
                                          <Link to={`/products/${product.id}`}>
                                                <Thumb
                                                      image={product.cover}
                                                      title={product.title}
                                                />
                                          </Link>
                                    </article>
                              );
                        })}
                  </section>
            </div>
      );
};
export default Home;

/*
{data.map((post, index) => (<Card key={index} post={post} />))}
                            */

/*{
      products.map((product) => {
            return (
                  <article key={product.id}>
                        <Link to={`/products/${product.id}`}>
                              <Thumbnails
                                    image={product.cover}
                                    title={product.title}
                              />
                        </Link>
                  </article>
            );
      });
}*/
