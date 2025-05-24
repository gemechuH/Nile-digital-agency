import React from "react";
import { imgs } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselEffect.module.css";
import { Link } from "react-router-dom";

const CarouselEffect = () => {
  const slides = [
    {
      image: imgs[0],
      greating: "WELCOME TO",
      description:
        "We help you go from brainstorming to building — fast and effectively.With the right tools, team, and mindset, your ideas become real, ready-to-use digital solutions.",
      aboutUs: "About Us",
      lang: "English",
    },
    {
      image: imgs[1],
      greating: "እንኳን በደህና መጡ",
      description:
        "ከአእምሮ ማጎልበት ወደ ግንባታ እንዲሄዱ እንረዳዎታለን - ፈጣን እና ውጤታማ። በትክክለኛ መሳሪያዎች፣ ቡድን እና አስተሳሰብ፣ ሃሳቦችዎ እውን ይሆናሉ፣ ለመጠቀም ዝግጁ የሆኑ ዲጂታል መፍትሄዎች።",
      aboutUs: "ስለ እኛ",
      lang: "Amharic",
    },
    {
      image: imgs[2],
      greating: "BAGA NAGAAN DHUFTAN",
      description:
        "Sammuu irraa gara ijaarsaatti akka deemtan isin gargaarra",
      aboutUs: "Waa'ee Keenya",
      lang: "Afaan Oromo",
    },
  ];

  return (
    <div className={classes.carousel_container}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        className={classes.carousel}
        transitionTime={500}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        useKeyboardArrows={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button
            onClick={clickHandler}
            className={`${classes.arrowButton} ${classes.prevButton}`}
            style={{ display: hasPrev ? "block" : "none" }}
          >
            ‹
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button
            onClick={clickHandler}
            className={`${classes.arrowButton} ${classes.nextButton}`}
            style={{ display: hasNext ? "block" : "none" }}
          >
            ›
          </button>
        )}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${classes.slide} min-h-[100vh] md:min-h-[80vh]`}
          >
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className={`${classes.image} object-cover w-full h-full`}
            />
            <div
              className={`${classes.overlay} flex items-center justify-center px-4 md:px-8`}
            >
              <div
                className={`${classes.content} max-w-4xl mx-auto space-y-2 md:space-y-4`}
              >
                <h3
                  className={`${classes.greeting} text-lg md:text-2xl font-semibold tracking-wider`}
                >
                  {slide.greating}
                </h3>
                <h2
                  className={`${classes.title} text-2xl md:text-4xl lg:text-5xl mt-1 md:mt-2`}
                >
                  <span className={classes.titleText}>NILE</span>{" "}
                  <span className={classes.titleText}>TECHNOLOGY</span>{" "}
                  <span className={classes.titleText}>SOLUTIONS</span>
                </h2>
                <h3 className="text-xl md:text-3xl lg:text-5xl p-2 md:p-6 font-bold mb-4 md:mb-6 text-center text-white">
                  Transforming Ideas into Digital Reality
                </h3>
                <p
                  className={`${classes.description} text-sm md:text-base lg:text-lg px-4 md:px-8 max-w-3xl mx-auto mb-8`}
                >
                  {slide.description}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center mt-4 md:mt-8">
                  <button
                    className={`${classes.aboutButton} px-6 py-2 md:py-3 text-sm md:text-base`}
                  >
                    {slide.aboutUs}
                  </button>
                  <Link to="/contact">
                    <button
                      className={`${classes.ctaButton} px-6 py-2 md:py-3 text-sm md:text-base`}
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;