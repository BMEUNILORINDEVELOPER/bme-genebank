import React from "react";
import imagee1 from "../images/dorb.png";
import imagee2 from "../images/dorc.png";
import imagee3 from "../images/dor.png";
import SimpleImageSlider from "react-simple-image-slider";
const Slider = () => {
  const sliderImages = [
    imagee1,
    imagee2,
    imagee3,
  ];

  return (
    <div className="my-mother">
      <SimpleImageSlider
        width="100%"
        height={570}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        bgColor="black"
      />
    </div>
  );
};

export default Slider;
