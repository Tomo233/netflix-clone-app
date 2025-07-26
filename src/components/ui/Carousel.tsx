import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import type { ReactNode } from "react";

type CarouselProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

function Carousel<T>({ data, renderItem }: CarouselProps<T>) {
  return (
    <Swiper
      className="mb-56"
      loop={true}
      modules={[Navigation]}
      slidesPerView={5}
      slidesPerGroup={5}
      navigation // ✅ shows arrows
      pagination={false} // ❌ disables dots
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="mt-5">
          {renderItem(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
