import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Scrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const assetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const info1Ref = useRef<HTMLDivElement>(null);
  const info2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const initVideoScrub = () => {
      if (!video.duration) return;
      
      gsap.to(video, {
        currentTime: video.duration,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: true,
        },
      });
    };

    // Ensure metadata is loaded before starting ScrollTrigger for video
    video.onloadedmetadata = () => {
      initVideoScrub();
    };

    // Fallback if metadata is already loaded
    if (video.readyState >= 1) {
      initVideoScrub();
    }

    // Main Timeline for Layout and Text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // 3 full scrolls
        pin: true,
        scrub: 1,
      },
    });

    // Act 1: Initial State (Asset Right, Info 1 Left)
    tl.set(assetRef.current, { xPercent: 50, scale: 1 });
    tl.set(info1Ref.current, { opacity: 1, x: 0 });
    tl.set(info2Ref.current, { opacity: 0, x: 50 });

    // Act 2: Asset slides Left, Info 1 fades out, Info 2 fades in Right
    tl.to(assetRef.current, {
      xPercent: -50,
      duration: 1,
      ease: 'power2.inOut',
    }, 1);

    tl.to(info1Ref.current, {
      opacity: 0,
      x: -50,
      duration: 0.5,
    }, 1);

    tl.to(info2Ref.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.2,
    }, 1);

    // Act 3: Asset slides to Center, scales up, text fades out
    tl.to(assetRef.current, {
      xPercent: 0,
      scale: 1.5,
      duration: 1,
      ease: 'power2.inOut',
    }, 2);

    tl.to(info2Ref.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
    }, 2);

    // Act 4: Show the 3 Model Info Boxes
    tl.from(".model-box", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.5,
    }, 2.5);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center px-12 md:px-24">
        
        {/* Central Animation Asset (Video) */}
        <div 
          ref={assetRef}
          className="absolute w-full max-w-xl aspect-square z-20 flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src="/Video_Loop_Request_Fulfilled.mp4" 
            muted
            loop
            playsInline
            className="w-full h-full object-contain mix-blend-multiply"
            style={{ filter: 'contrast(1.1) brightness(1.02)' }}
          />
        </div>

        {/* Info Blocks Container */}
        <div className="relative w-full h-full flex items-center justify-between pointer-events-none">
          
          {/* Info Block 1 (Left) */}
          <div 
            ref={info1Ref}
            className="w-1/2 max-w-md space-y-6 opacity-100"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Fluid Integration
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              Experience the seamless blend of technology and art. Our platform provides 
              unparalleled flexibility for your digital assets.
            </p>
            <div className="h-1 w-20 bg-slate-900" />
          </div>

          {/* Info Block 2 (Right) */}
          <div 
            ref={info2Ref}
            className="w-1/2 max-w-md space-y-6 ml-auto text-right flex flex-col items-end opacity-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Dynamic Scaling
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              Scale your vision without limits. Fedvell adapts to your needs, 
              providing a robust foundation for growth and innovation.
            </p>
            <div className="h-1 w-20 bg-slate-900" />
          </div>

        </div>

        {/* The 3 Model Info Boxes (Act 4) */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 px-12 z-30 pointer-events-none">
          <div className="model-box bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Subject</span>
            <span className="text-sm font-medium text-slate-900">3D Watercolor Room</span>
          </div>
          <div className="model-box bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Motion</span>
            <span className="text-sm font-medium text-slate-900">Zoom out, Pan Left</span>
          </div>
          <div className="model-box bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Environment</span>
            <span className="text-sm font-medium text-slate-900">Clean White Background</span>
          </div>
        </div>
      </div>
    </div>
  );
};


