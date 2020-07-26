import React from 'react';
import './Slider.scss';
import StoryTellingImg from '../../assets/img/story_telling.png';
// import Swiper core and required components
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import SliderItem from './SliderItem';

// install Swiper components
SwiperCore.use([Autoplay, Pagination, A11y]);

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SliderItem src={StoryTellingImg} title="Marcenas mattis egestas">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src={StoryTellingImg} title="Marcenas mattis egestas">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src={StoryTellingImg} title="Marcenas mattis egestas">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src={StoryTellingImg} title="Marcenas mattis egestas">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </SliderItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;