import React from "react";
import { useEffect, useState } from "react";

//import lien redirection vers les logements
import { Link } from "react-router-dom";

//import image banner
import image from "../assets/homeBanner.png";

//import composants de la page Home
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";

//import json infos des logements
import products from "../data/data.json";

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
