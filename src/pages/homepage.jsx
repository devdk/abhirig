import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Section from '../components/section';
import Feature from '../components/feature';
import Product from '../components/product';
import Pricing from '../components/pricing';
import ProductSlider from '../components/slider';
import Video from '../components/video';
import Element from '../components/element';
import Footer from '../components/footer';
import banner from '../assets/banner_round_bg.png';
import leaf from '../assets/leaf.png';

import '../../src/index.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const itemRef = useRef(null);
  const itemRef2 = useRef(null);
  const itemRef3 = useRef(null);
  const imageRef = useRef(null);
  const sideImgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const updateAnimations = () => {
      const xPosition2 =
        window.innerWidth * 0.1 - window.innerWidth * 0.05 + 240;
      const xPosition3 =
        window.innerWidth * 0.1 - window.innerWidth * 0.05 + 240;

      sideImgRefs.forEach((ref) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            scale: 1.1,
            y: 100,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 10%',
              end: 'top 40%',
              scrub: 3,
            },
          }
        );
      });

      gsap.fromTo(
        itemRef.current,
        { opacity: 0.75, scale: 0.75 },
        {
          opacity: 1,
          scale: 1.05,
          duration: 0.5,
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 55%',
            end: 'top 40%',
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        itemRef2.current,
        { opacity: 0.75, scale: 0.75 },
        {
          opacity: 1,
          scale: 0.5,
          x: -xPosition2,
          yPercent: 10,
          rotateZ: -10,
          duration: 0.5,
          scrollTrigger: {
            trigger: itemRef2.current,
            start: 'top 55%',
            end: 'top 40%',
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        itemRef3.current,
        { opacity: 0.75, scale: 0.75 },
        {
          opacity: 1,
          scale: 0.5,
          x: xPosition3,
          yPercent: 10,
          rotateZ: 10,
          duration: 0.5,
          scrollTrigger: {
            trigger: itemRef3.current,
            start: 'top 55%',
            end: 'top 40%',
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.75, y: -150 },
        { duration: 0.8, scale: 1, y: 0 }
      );
    };

    updateAnimations();
    window.addEventListener('resize', updateAnimations);

    return () => window.removeEventListener('resize', updateAnimations);
  }, []);

  return (
    <>
      <Navbar />
      <div className='relative flex flex-col justify-center items-center h-screen mt-4 p-6'>
        <div className='text-center mb-4 md:mb-12'>
          <img
            ref={sideImgRefs[0]}
            src={leaf}
            alt=''
            className='w-44 hidden md:block absolute h-44 rotate-45 left-20 top-10'
          />
          <img
            ref={sideImgRefs[1]}
            src={leaf}
            alt=''
            className='w-44 hidden md:block absolute h-44 -rotate-45 right-14 bottom-20'
          />
          <img
            ref={sideImgRefs[2]}
            src={leaf}
            alt=''
            className='w-44 hidden md:block absolute h-44 -rotate-12 left-20 bottom-60'
          />
          <img
            ref={sideImgRefs[3]}
            src={leaf}
            alt=''
            className='w-44 hidden md:block absolute h-44 -rotate-12 right-14 top-40'
          />
          <p className='text-sm font-bold lowercase text-gold-100 md:text-xl'>
            Abhirig Presents
          </p>
          <h1 className='mb-4 mt-4 text-lg font-semibold text-slate-500 md:text-2xl lg:text-3xl uppercase'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r lg:text-5xl to-green-400 from-gold-100 via-indigo-600'>
              Ayurvedic Wellness Essentials..
            </span>
            <br />
            the complete health companion
          </h1>
        </div>
        <Link to='/shop' className='z-10 mb-3 px-5 py-2.5'>
          <button
            type='button'
            className='text-white border-2 mb-3 border-white bg-gold-100 hover:bg-darkGreen focus:outline-none w-36 h-12 font-medium rounded-full text-sm px-5 py-2.5 z-10 text-center transition duration-300 ease-in-out'
          >
            Explore Now
          </button>
        </Link>
        <img
          ref={imageRef}
          src={banner}
          alt='Banner'
          id='banner'
          className='w-full max-w-screen-lg'
        />
        <div className='w-screen flex items-center justify-center'>
          <img
            ref={itemRef}
            src='https://themegenix.net/html/suxnix-preview/suxnix/assets/img/products/features_product01.png'
            title='SKU1'
            id='sku1'
            alt='P1'
            className='absolute transform -translate-x-1/2 top-1/2 left-1/2 md:h-3/6 h-32 mt-10 md:mt-0 cursor-pointer'
          />
          <img
            ref={itemRef2}
            src='https://themegenix.net/html/suxnix-preview/suxnix/assets/img/products/features_product01.png'
            title='SKU2'
            id='sku2'
            alt='P2'
            className='absolute transform -translate-x-1/2 top-1/2 left-1/2 md:h-3/6 hidden md:block md:mt-0 cursor-pointer'
          />
          <img
            ref={itemRef3}
            src='https://themegenix.net/html/suxnix-preview/suxnix/assets/img/products/features_product01.png'
            title='SKU3'
            id='sku3'
            alt='P3'
            className='absolute transform -translate-x-1/2 top-1/2 left-1/2 md:h-3/6 hidden md:block md:mt-0 cursor-pointer'
          />
        </div>
      </div>
      <Section />
      <Product />
      <ProductSlider />
      <Video />
      <Pricing />
      <Element />
      <Feature />
      <Footer />
    </>
  );
};

export default HomePage;
