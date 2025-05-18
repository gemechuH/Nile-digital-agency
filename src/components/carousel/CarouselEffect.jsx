import React from "react";
import { imgs } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselEffect.module.css";

const CarouselEffect = () => {
  const slides = [
    {
      image: imgs[0],
      greating: "WELCOME TO",
      description:
        "Digitalize your business with internationally validated solutions designed not only for efficiency and sustainability of operational processes, but also for scalability, growth, and alignment with your business priorities. Stop adapting to software, let the software adapt to you.",
      aboutUs: "About Us",
      lang: "English",
    },
    {
      image: imgs[1],
      greating: "እንኳን በደህና መጡ",
      description:
        "በአለም አቀፍ ደረጃ በተረጋገጡ መፍትሄዎች የንግድዎን ዲጂታላይዝ ያድርጉ፣ የተነደፉት ለስራ ሂደቶች ብቻ ሳይሆን ለእድገት፣ ለማስፋፋት እና ከንግድዎ ቅድሚያዎች ጋር ለማጣጣም ነው። ለሶፍትዌር መላመድ ያቁሙ፣ ሶፍትዌሩ ለእርስዎ ይላመድ።",
      aboutUs: "ስለ እኛ",
      lang: "Amharic",
    },
    {
      image: imgs[2],
      greating: "BAGA NAGAAN DHUFTAN",
      description:
        "Daldalaa keessan furtuuwwan idil-addunyaatti mirkanaawaniin diijitaalaayizii godhaa, kan dizaayinii isaanii kan hojii adeemsa qofaaf osoo hin taane, guddina, bal'ina fi sagantaa daldala keessanii waliin wal simsiisuu dha. Softweeriif of madaqsuun dhaabaa, softweerin isin haa madaqu.",
      aboutUs: "Waa'ee Keenya",
      lang: "Afaan Oromo",
    },
  ];

  return (
    <div className={classes.carousel_container}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        className={classes.carousel}
        transitionTime={500}
      >
        {slides.map((slide, index) => (
          <div key={index} className={classes.slide}>
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className={classes.image}
            />
            <div className={classes.overlay}>
              <div className={classes.content}>
                <h2 className={classes.greeting}>{slide.greating}</h2>
                <h2 className={classes.title}>
                  <span className={classes.titleText}>NILE</span>{" "}
                  <span className={classes.titleText}>TECHNOLOGY</span>{" "}
                  <span className={classes.titleText}>SOLUTIONS</span>
                </h2>
                <p className={classes.description}>{slide.description}</p>
                <button className={classes.aboutButton}>{slide.aboutUs}</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;