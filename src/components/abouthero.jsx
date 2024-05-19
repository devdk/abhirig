import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';
import gsap from "gsap";
import logo from '../assets/logo.png'
export default function Abouthero() {
  const typedRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 0.75, opacity: 0 }, // Start state: scale 75% and opacity 0
      { scale: 1.1, opacity: 1, duration: 1.5, ease: "power3.out" } // End state: scale 110% and opacity 1
    );

    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
    );

    typedRef.current = new Typed('.auto-type', {
      strings: ["Activeness", "Hope", "Relax", "AbhiRig"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      smartBackspace: true,
      backDelay: 1000,
      startDelay: 1000,
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 md:py-24 items-center justify-center flex-col">
          <img 
            ref={logoRef}
            className="lg:w-2/6 md:w-3/6 w-4/6 mb-10 mt-6 object-cover object-center rounded" 
            alt="Abhirig" 
            src={logo}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-transparent font-semibold mb-8 bg-clip-text bg-gradient-to-r lg:text-4xl text-xl  to-gold-100 from-yellow-400 via-lightGreen">
              Empower yourself with <span className="auto-type"></span>
            </h1>
            <p className="md:mb-8  leading-relaxed about-content md:text-2xl opacity-0 text-justify md:text-center">Discover the ancient wisdom of Ayurveda with our curated collection of wellness solutions. Our mission is to offer holistic wellness experiences tailored to your unique needs. From herbal remedies to mindful practices, we're dedicated to helping you achieve  harmony.</p>
          </div>
        </div>
      </section>
    </>
  );
}
