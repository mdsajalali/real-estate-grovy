import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselImg } from "../data";

const CarouselItem = () => {
  return (
    <div>
      <Carousel className="text-center">
        {carouselImg.map((imgSrc, index) => (
          <div key={index} className="xl:h-[700px]">
            <img
              src={imgSrc}
              alt={`Banner ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
