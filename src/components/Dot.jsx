import React from "react";

//Mise en place des élements du Dot avec couleur changeante en fonction de l'activation de l'image
const Dot = ({ activeIndex, onclick, sliderImage }) => {
      return (
            <div className="all-dots">
                  {sliderImage.map((slide, id) => (
                        <span
                              key={id}
                              className={`${
                                    activeIndex === id
                                          ? "dot active-dot"
                                          : "dot"
                              }`}
                              onClick={() => onclick(id)}
                        >
                              ●
                        </span>
                  ))}
            </div>
      );
};

export default Dot;
