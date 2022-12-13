import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import "keen-slider/keen-slider.min.css";
import "./CarouselDots.scss";

const CarouselDots = ( {images, name, linked, initial, slug, link } ) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: initial || 0,
    loop: true,
    centered: true,
    spacing: 0,
    mode: "snap",
    drag: true,
    slidesPerView: 1,
    slideChanged(slider) {
      setCurrentSlide(slider.details().relativeSlide)
    },
  })

 /* function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  } */

  return (
    <>
      <div className="navigation-wrapper-simple">
      {link === undefined ? (
        <div ref={sliderRef} className="keen-slider">
          {images?.map((img, i) => (
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
        ) : (
                <Link to={`restaurantes/${link}`}>
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
                </Link>
        )
      }
        {/* { instanceRef && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef?.next()
              }
              disabled={
                currentSlide ===
                instanceRef?.track?.details?.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
      { instanceRef && (
        <div className="dots">
          {[
            ...Array(instanceRef?.details().size)].map((idx, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  instanceRef?.moveToSlide(i)
                }}
                className={"dot" + (currentSlide === i ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default CarouselDots;