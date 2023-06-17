import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from "../../../src/assets/banner.png";
import caro from "../../../src/assets/caro.jpg";
import caro1 from "../../../src/assets/caro1.jpg";

function LandingPage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Set the desired interval (in milliseconds)
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    // Start the automatic transition when the component mounts
    sliderRef.current.slickPlay();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img src={banner} alt="banner" className="w-full  object-cover" />
      </div>
      <div className="w-full md:w-1/2">
        <Slider ref={sliderRef} {...carouselSettings}>
          <div>
            <img src={caro} alt="Slide 1" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={caro1} alt="Slide 2" className="w-full h-full object-cover" />
          </div>
          
        </Slider>
      </div>
    </div>
  );
}

export default LandingPage;
