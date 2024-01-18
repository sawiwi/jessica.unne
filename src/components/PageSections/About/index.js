import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { ImgDataMe } from '../../../data/dataUser';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../../../assets/styles/components/ImgAbout/imgAbout.css';
import { Fade } from 'react-awesome-reveal';


const AboutComponent = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Section>
      <Fade delay={300} direction="right">
  
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-1 py-5">
          <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-6">
            <h2 className="text-5xl  text-center  text-primary font-bold">
                Sobre mí
              </h2>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
              <div className="col-span-1 h-[600px] w-full mx-2 md:mx-44 xl:mx-0 xl:col-span-1">
              <AutoplaySlider
                  bullets={false}
                  mobileTouch={true}
                  // organicArrows={false}
                  // infinite={true}
                  // startupScreen={3000}
                  // startup={true}
                  // transitionDelay={1000}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={3000}
                  className="awsBtn"
                >
                        {ImgDataMe?.length  > 0 ?  
                            ImgDataMe.map((item) =>
                            <div key={item.id}>
                              <img
                                src={item.img}
                                alt="slide-1"
                                // className="rounded-full h-[260px] w-[100%] mt-10 object-[center-center] object-cover  md:mx-2 xl:w-full xl:h-full xl:mt-1 xl:mx-2 "
                                // className='rounded-full bg-center w-[200px] h-[210px]  xl:h-[310px] object-cover'
                                className='rounded-full h-full w-56 mt-10  md:mx-2 md:w-[300px] md:h-[300px] xl:w-[360px] xl:h-[360px] md:mt-24 xl:mt-20 xl:mx-2'
                              />
                            </div>
                        ) : null}
                </AutoplaySlider>
              </div>
              <div className="col-span-2 xl:col-span-1 ">
                <p className="text-base xl:text-lg text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
                  Con un historial cercano a los 2 años y medio de actividad, respaldado por una sólida experiencia acumulada a lo largo de varios años en el sector de las ventas, me enorgullezco de ofrecer mis servicios como corredora de propiedades. Mi área de operación abarca tanto Algarrobo como Santiago, y mi enfoque se centra en brindar un servicio integral en el proceso de corretaje.
                  <br />
                  <br />
                  Ofrezco una gama de servicios que incluye la intermediación en la compra y venta de propiedades, arriendos de casas, departamentos y terrenos urbanizados. Mi compromiso es asegurarme de que los clientes no tengan necesidad de enfrentar a las aristas asociadas al proceso que esto implica, proporcionando soluciones efectivas y una atención de alta calidad. A lo largo de mi trayectoria, he logrado resultados exitosos que han fortalecido las relaciones fluidas y de confianza a largo plazo.
                  <br />
                </p>
                <p className="text-base xl:text-lg text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
                  Jessica Avilés.
                </p>
                <p className="text-base xl:text-lg text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
                  Fundadora y Gerente General.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
          <MeetingForm 
                title="Contacto corredor"
                subtitle="Enviar mensaje"
              />
          </div>

          {/* 
            <div className="pt-10">
              <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
                “Un largo camino
                <br />
                se inicia con un solo paso...”
              </h2>
            </div> */}
        </div>
        
      </Fade> 
    </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
