import node from "../assets/node_.png";
import nest from "../assets/nest__.png";
import react from "../assets/react__.png";
import javascript from "../assets/javascript__.png";
import postgreescript from "../assets/postgree__.png";
import typescript__ from "../assets/typescript__.png";

import styles from "./MySkylls.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

function MySkylls() {
  return (
    <div className={styles.MySkylls}>
      {" "}
      <h1>Habilidades</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <img src={node} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={nest} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={react} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={javascript} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={postgreescript} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={typescript__} alt="" />{" "}
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default MySkylls;
