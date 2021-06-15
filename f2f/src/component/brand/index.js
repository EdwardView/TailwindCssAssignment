import React from "react";
import CarouselEl from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BrandImages } from "../../constant/images";
import { Heading } from "../common/heading";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 7,
    dots: true,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export const Brand = () => {
  const BrandCard = (brandImage) => {
    return (
      <div className="w-32 h-36 g-black rounded-lg shadow-md">
        <img
          className="rounded-lg w-32 h-36"
          src={brandImage.src}
          alt={brandImage.alt}
        />
      </div>
    );
  };

  return (
    <section class="flex items-center text-gray-600 colors.customBg.bg">
      <div class="container px-5 py-5 mx-auto">
        <Heading title="brands" count="19" />
        <CarouselEl
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          arrows={false}
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {BrandImages.map((brandImage) => BrandCard(brandImage))}
        </CarouselEl>
      </div>
    </section>
  );
};

export default Brand;
