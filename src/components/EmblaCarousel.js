import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mediaByIndex from "../assets/index";
import "../css/embla.css";

const EmblaCarousel = ({ slides, options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 2500, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );


  const [ emblaRef ] = useEmblaCarousel(options, [autoplay.current]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt="software badgets"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
