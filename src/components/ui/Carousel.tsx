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
  const slideCount = data?.length || 0;
  const slidesToShow = Math.min(slideCount, 5);

  return (
    <Swiper
      loop={slideCount >= 5}
      slidesPerView={slidesToShow}
      slidesPerGroup={slidesToShow}
      modules={[Navigation]}
      navigation // ✅ shows arrows
      pagination={false} // ❌ disables dots
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
