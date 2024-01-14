 import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import banner4 from "../assets/images/banner-4.jpg";

const CarouselItem = () => {
  return (
       <div >
         <Carousel   className="text-center" >
                <div>
                    <img   src={banner1} />
                </div>
                <div>
                    <img   src={banner2} />
                </div>
                <div>
                    <img   src={banner3} />
                </div>
                <div>
                    <img   src={banner4} />
                </div>
               
            </Carousel>
       </div>
  );
};

export default CarouselItem;