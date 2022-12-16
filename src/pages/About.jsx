import React from 'react';
import abouts from '../data/about.json';

import Banner from '../components/Banner';
import Collapse from '../components/Collapse';


import image from '../assets/kalen-emsley.png';


const About = () => {
      return (
            <div className='home'>
                  <Banner
                        image={image}
                        title=""
                  />
                  <section>
                        {abouts.map((about) => {
                              return (
                                    <article key={about.id}>
                                          <Collapse
                                                title={about.title}
                                                content={about.content}
                                          />
                                    </article>
                              );
                              })}
                             
                  </section>
            </div>
      );
};
export default About;
