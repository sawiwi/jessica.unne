import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';
import { Fade } from 'react-awesome-reveal';


const MainCarousel = ({ data }) => {
  return (
    <AwesomeSlider
      bullets={false}
      mobileTouch={true}
      organicArrows={true}
      infinite={true}
      className="awsBtn"
    >
      {data?.length > 0
        ? data.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.img}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[400px] xl:h-[600px]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />

              <div className=" absolute top-0 left-0 items-center xl:w-[700px] h-full  xl:p-2 xl:pl-4 bg-black bg-opacity-40">
                  <Fade delay={100} direction='left' triggerOnce='false'>
                    <div className="grid grid-cols-1 mx-auto p-10 ">
                      <img src={slide.imgMe} className='rounded-full w-36 h-36 xl:w-56 xl:h-56 object-cover my-3 mx-auto xl:my-6 xl:mx-56'></img>
                      <h2 className="text-xl font-bold xl:text-2xl text-center pb-2 text-white drop-shadow-lg xl:my-3 xl:mx-10 w-full">
                        {slide.title}
                      </h2>
                      <div className='mx-4 xl:mx-56'>
                        <a href='#AboutSectionScroll'  type='button' className='inline-flex items-center drop-shadow-lg p-10 py-2 w-52 m-2 text-center  xl:w-52 xl:h-12 text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg'>Más sobre mí</a>
                      </div>  
                    </div>
                  </Fade>

                </div>
              
              {/*<div className="absolute inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32 bg-black bg-opacity-25">
                 <div className="d-flex flex-col w-2/3 xl:w-1/3 ">
                  <h2 className="text-2xl font-bold xl:text-4xl pb-2 text-white drop-shadow-lg border-b-2">
                    {slide.title}
                  </h2>
                  <p className="text-md xl:text-xl text-white">{slide.desc}</p>
                </div> 
              </div>*/}
            </div>
          ))
        : null}
    </AwesomeSlider>
  );
};

export default MainCarousel;
