import React from 'react';
import MainCarousel from '../../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../../data';

const CarouselSection = () => (
  <div className="h-[400px] xl:h-[600px]" id='IndexSection'>
     <div className="object-cover w-[100%] h-[400px] xl:h-[500px]" >
      <MainCarousel data={mainCarouselData} />
     </div>
  </div>
);

export default CarouselSection;
