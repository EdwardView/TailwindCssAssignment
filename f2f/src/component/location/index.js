import React from "react";
import CarouselEl from "react-multi-carousel";
import { BrandImages } from "../../constant/images";
import { Heading } from "../common/heading";

export const Location = () => {
  const LocationCard = (brandImage) => {
    return (
      <div className="w-56 h-40 bg-white rounded-lg shadow-lg">
        <img
          className="rounded-t-lg w-56 h-20"
          src={brandImage.src}
          alt={brandImage.alt}
        />
        <div className="px-4 py-4">
          <div class="text-black-700">indiranagar</div>
          <div class="text-red-700 py-2">22 restaurant</div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-5">
      <Heading title="locations" count="7" />
      <div>
        <CarouselEl
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 0 },
              items: 4,
              dots: true,
              partialVisibilityGutter: 20,
            },
          }}
          ssr={true}
          arrow={false}
          autoPlaySpeed={1000}
          partialVisible
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {BrandImages.map((brandImage) => LocationCard(brandImage))}
        </CarouselEl>
      </div>
    </div>
  );
};

export default Location;
