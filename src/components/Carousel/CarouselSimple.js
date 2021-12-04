import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "keen-slider/keen-slider.min.css";
import "./CarouselSimple.scss";

const CarouselSimple = React.memo(({ images, name, linked, initial, slug }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: initial || 0,
    loop: true,
    centered: true,
    spacing: 0,
    mode: "snap",
    slidesPerView: 1,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <div className="navigation-wrapper-simple">
        <div ref={sliderRef} className="keen-slider">
          {images.map((img, i) => (
            <GatsbyImage
              image={getImage(img)}
              key={i}
              alt=""
              className={`image_carousel_keen keen-slider__slide img_slides`}
              backgroundColor="#f8f8f8"
            />
          ))}
          <p className="carousel-name-project-simple">{name}</p>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
    </>
  );
});

function ArrowLeft(props) {
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

export default CarouselSimple;