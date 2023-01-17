import React from "react";

//import images étoiles
import empty from "../assets/star_rate_empty.svg";
import red from "../assets/star_rate_red.svg";

const Rating = ({ rating }) => {
      //mise en place d'un tableau pour déterminer la notation sur 5 étoiles
      const stars = [1, 2, 3, 4, 5];
      return (
            <div className="rating">
                  {stars.map((star) =>
                        rating >= star ? (
                              <img
                                    key={star}
                                    className="rating__star"
                                    src={red}
                                    alt=""
                              />
                        ) : (
                              <img
                                    key={star}
                                    className="rating__star"
                                    src={empty}
                                    alt=""
                              />
                        )
                  )}
            </div>
      );
};

export default Rating;
