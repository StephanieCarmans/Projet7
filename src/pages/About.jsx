import React from "react";

//import json infos de la page About
import abouts from "../data/about.json";

//import composants de la page About
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

//import image banner
import image from "../assets/kalen-emsley.png";

const About = () => {
      return (
            <div className="about">
                  <Banner image={image} title="" />
                  <section className="about__collapse">
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
