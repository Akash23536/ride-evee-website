import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

const Banner = () => {
  const [banImg, setBanImg] = useState([]);

  useEffect(() => {
    fetch("banners.json")
      .then((res) => res.json())
      .then((data) => {
        setBanImg(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="w-full">
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        className="my-swiper">
        {banImg.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[500px]  "
              src={banner.imglink}
              alt={`Banner ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
