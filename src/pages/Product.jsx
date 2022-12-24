import React from 'react';
import { useParams } from 'react-router-dom';

import Slider from '../components/Slider';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';

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
                  <h2>{product.title}</h2>
                  <h3>{product.location}</h3>
                  <Tags key={product} tags={product.tags} />
                  <Collapse title="Description" content={product.description} />
                  <Collapse title="Équipements" content={product.equipments} />
            </div>
      );
};
export default Product;
