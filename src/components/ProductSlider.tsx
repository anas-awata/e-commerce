import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import images correctly
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";

const images = [poster2, poster3, poster4, poster5];

const ProductSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true }} // Enables dots navigation
        navigation={true} // Enables arrows navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true} // Enables infinite scrolling
        modules={[Pagination, Navigation, Autoplay]} // Ensure all modules are included
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex justify-center items-center">
              <img
                src={image}
                alt={`Poster ${index + 1}`}
                className="w-full h-[500px] object-fill" // Make image full width & fixed height
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
