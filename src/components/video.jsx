import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import backImg1 from "../assets/videoBG.png";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef(null);
  const iframeRef = useRef(null);

  const togglePlay = () => {
    if (!isPlaying) {
      gsap.to(videoContainerRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setIsPlaying(true);
          gsap.fromTo(
            iframeRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5 }
          );
        },
      });
    }
  };

  return (
    <section className="text-white mt-10 body-font h-screen relative flex justify-center items-center">
      {isPlaying ? (
        <iframe
          ref={iframeRef}
          className="w-3/4 h-2/3"        
          src="https://www.youtube.com/embed/3JABJHlY4Tw?si=hv_1FnVKyszhrCJk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          ref={videoContainerRef}
          className="w-full h-full bg-cover bg-center flex flex-col gap-16 justify-center items-center cursor-pointer relative"
          style={{ backgroundImage: `url(${backImg1})` }}
          onClick={togglePlay}
        >
          <h1 className="text-4xl">"Unveil Your Journey, let the video lead the Way!"</h1>
          <div className="bg-green-400 h-32 w-32 border-white rounded-full flex justify-center items-center relative">
            <svg
              className="w-16 h-16 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <div className="glow"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
