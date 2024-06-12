import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';
import gsap from "gsap";

export default function Abouthero() {
  const typedRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 0.75, opacity: 0 },
      { scale: 1.1, opacity: 1, duration: 1.5, ease: "power3.out" }
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
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-lg lg:w-full mb-10 lg:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://as1.ftcdn.net/v2/jpg/05/23/31/80/1000_F_523318060_08vbmfUWxuMNtXpzU1g2LvcA6Sdv0sBm.jpg"
              />
            </div>
            <div className="lg:flex-grow  lg:pl-24 text-center lg:text-left">
              <h1 className="text-transparent font-semibold mb-8 bg-clip-text bg-gradient-to-r lg:text-5xl text-xl to-gold-100 from-yellow-400 via-lightGreen animate-fadeIn">
                Empower yourself with <span className="auto-type"></span>
              </h1>
              <p className="md:mb-8 leading-relaxed about-content md:text-2xl opacity-0 text-justify md:text-left">
                Discover the ancient wisdom of Ayurveda with our curated collection of wellness solutions. Our mission is to offer holistic wellness experiences tailored to your unique needs. From herbal remedies to mindful practices, we're dedicated to helping you achieve harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-2xl md:text-4xl mb-4 font-medium uppercase text-gray-900">
              Our Vision.. Our Passion
            </h1>
            <p className="mb-4 md:text-xl text-md leading-relaxed text-justify">
              At AbhiRig, our mission is to provide holistic wellness solutions rooted in the ancient wisdom of Ayurveda. We curate packages of health-promoting products designed to support your journey towards balance and vitality. Each package is thoughtfully crafted to address specific wellness goals, whether it's boosting immunity, promoting relaxation, or enhancing overall well-being.
            </p>
            <p className="text-md italic">"Mind-body harmony through Ayurveda" ~ AbhiRig</p>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-10 lg:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.gettyimages.com/id/1280324222/vector/mortar-and-herbs-drawing.jpg?s=612x612&w=gi&k=20&c=NKgnnAvHvSL--ezA49xyww8k3HkYx9-1ugbkhlmS6m4="
            />
          </div>
        </div>
      </section>
    </>
  );
}
