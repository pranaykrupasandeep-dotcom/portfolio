import React, { useRef, useState } from 'react';
import heroVideo from '../assets/hero video/herovideo.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Switches audio states cleanly
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);

      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Studio Gradient: Left side text super clear ga kanipistundi, Pranay face ni touch cheyadhu */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 px-6 md:px-14 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center w-full h-full pt-28 md:pt-16">
        
        {/* Left Side: Controlled Width so it never clashes with Pranay */}
        <div className="flex flex-col items-start text-left max-w-sm sm:max-w-md lg:max-w-lg">
          
          {/* Subtle Tag */}
          <div className="inline-block px-3.5 py-1 mb-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[11px] font-mono tracking-widest uppercase">
            // AI & ML Portfolio
          </div>

          {/* Clean Editorial Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-[1.1] drop-shadow-lg">
            Hi, I’m Pranay <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/85">
              AI / ML Student
            </span>
          </h1>

          {/* Polished Subheading */}
          <p className="text-white/85 text-xs sm:text-sm md:text-base font-normal mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow">
            Passionate Artificial Intelligence & Machine Learning student focused on building real-time Computer Vision pipelines, YOLOv5 detection models, and Generative AI applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 inline-block text-center"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm rounded-full bg-black/30 border border-white/60 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md shadow-xl transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Sleek Glassmorphic Sound Controller */}
        <div 
          className="mt-8 md:mt-0 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto"
          onClick={toggleMute}
        >
          <div className="w-13 h-13 md:w-16 md:h-16 rounded-full border border-white/30 bg-black/30 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white transition-all duration-300 shadow-2xl">
            {isMuted ? (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            {isMuted ? "Unmute Reel" : "Mute Sound"}
          </span>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;