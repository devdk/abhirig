import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backImg1 from "../assets/videoBG.png";
import {
  RiArrowLeftFill,
  RiArrowRightFill,
  RiStarFill,
} from "@remixicon/react";

const testimonials = [
  {
    id: 1,
    content:
      "This Ayurvedic product has changed my life! I feel healthier and more energetic than ever.",
    name: "John Doe",
    location: "New York, USA",
    stars: 5, 
  },
  {
    id: 2,
    content:
      "I love the natural ingredients and the amazing results. Highly recommend to everyone!",
    name: "Jane Smith",
    location: "London, UK",
    stars: 4, 
  },
  {
    id: 3,
    content:
      "Best Ayurvedic products I've ever used. Excellent quality and great customer service.",
    name: "Alice Johnson",
    location: "Sydney, Australia",
    stars: 3, 
  },
];

const TestimonialSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${backImg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const sliderRef = useRef(null);

  return (
    <section
      className="text-white body-font relative h-screen flex items-center justify-center"
      style={sectionStyle}
    >
      <div className="container mx-auto px-5">
        <div className="relative">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center mb-6">
                <div className="flex justify-center gap-2 items-center m-4">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <RiStarFill className="w-8 h-8" color="orange" />
                  ))}
                </div>
                <p className="text-lg md:text-3xl italic mx-auto max-w-2xl">
                  "{testimonial.content}"
                </p>
                <h3 className="m-4 text-xl md:text-2xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm md:text-lg">
                  {testimonial.location}
                </p>
              </div>
            ))}
          </Slider>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              className="bg-orange-400 opacity-85 text-white rounded-full p-3"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <RiArrowLeftFill className="w-12 h-12" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              className="bg-orange-400 opacity-85 text-white rounded-full p-3"
              onClick={() => sliderRef.current.slickNext()}
            >
              <RiArrowRightFill className="w-12 h-12" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
