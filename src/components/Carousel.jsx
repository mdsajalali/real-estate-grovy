import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from '../data';

const CarouselItem = () => {
  return (
    <div>
      <Carousel className="text-center">
        {img.map((imgSrc, index) => (
          <div key={index} className="xl:h-[700px]">
            <img
              src={imgSrc}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
