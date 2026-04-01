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

    const syncVideo = () => {
      if (!video.duration || video.duration === 0) return;
      
      // Video Scrubbing - Direct mapping from scroll to video time
      gsap.to(video, {
        currentTime: video.duration - 0.01,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%', // Significantly reduced to match short video duration
          scrub: true,
          onUpdate: (self) => {
            // Force currentTime to be within bounds to avoid "stuck" frames
            if (video.duration) {
              const targetTime = self.progress * (video.duration - 0.01);
              video.currentTime = Math.min(targetTime, video.duration - 0.01);
            }
          }
        },
      });

      // Layout & Text Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          onRefresh: () => {
            // Ensure video metadata is fresh
            if (video.duration) {
              ScrollTrigger.refresh();
            }
          }
        },
      });

      // Act 1: Initial Setup
      tl.set(assetRef.current, { xPercent: 40, scale: 0.8, opacity: 0 });
      tl.set(info1Ref.current, { opacity: 0, x: -30 });
      tl.set(info2Ref.current, { opacity: 0, x: 30 });

      // Act 2: Entrance
      tl.to(assetRef.current, { opacity: 1, scale: 1, duration: 1 }, 0);
      tl.to(info1Ref.current, { opacity: 1, x: 0, duration: 1 }, 0.2);

      // Act 3: Shift (Show Info 2)
      tl.to(assetRef.current, {
        xPercent: -40,
        duration: 1.5,
        ease: 'power2.inOut',
      }, 1.5);

      tl.to(info1Ref.current, {
        opacity: 0,
        x: -50,
        filter: 'blur(10px)',
        duration: 0.8,
      }, 1.5);

      tl.to(info2Ref.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
      }, 1.8);

      // Act 4: Center (Hero Moment)
      tl.to(assetRef.current, {
        xPercent: 0,
        scale: 1.3,
        duration: 1.5,
        ease: 'power3.inOut',
      }, 3);

      tl.to(info2Ref.current, {
        opacity: 0,
        y: -50,
        filter: 'blur(10px)',
        duration: 0.8,
      }, 3);

      // Act 5: Model Boxes
      tl.fromTo(".model-box", 
        { opacity: 0, y: 40, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, 3.5);

      ScrollTrigger.refresh();
    };

    // Metadata & Loaded state handling
    video.addEventListener('loadedmetadata', syncVideo);
    if (video.readyState >= 1) syncVideo();

    return () => {
      video.removeEventListener('loadedmetadata', syncVideo);
    };

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#fdfcf9]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center px-8 md:px-24">
        
        {/* Scrolly Video Asset - Seamless Watercolor Integration */}
        <div 
          ref={assetRef}
          className="absolute w-full max-w-2xl aspect-square z-20 flex items-center justify-center drop-shadow-2xl"
        >
          <video
            ref={videoRef}
            src="/Video_Loop_Request_Fulfilled.mp4" 
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-contain mix-blend-multiply transition-all duration-700"
            style={{ filter: 'contrast(1.05) brightness(1.02)' }}
          />
        </div>

        {/* Info Blocks */}
        <div className="relative w-full h-full flex items-center justify-between pointer-events-none">
          
          <div 
            ref={info1Ref}
            className="w-1/2 max-w-sm space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Fluid <br/> Integration
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Experience the seamless blend of technology and art. Our platform provides 
              unparalleled flexibility for your digital assets.
            </p>
            <div className="h-0.5 w-16 bg-slate-900/10" />
          </div>

          <div 
            ref={info2Ref}
            className="w-1/2 max-w-sm space-y-6 ml-auto text-right flex flex-col items-end"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Dynamic <br/> Scaling
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Scale your vision without limits. Fedvell adapts to your needs, 
              providing a robust foundation for growth.
            </p>
            <div className="h-0.5 w-16 bg-slate-900/10" />
          </div>

        </div>

        {/* Floating Detail Boxes */}
        <div className="absolute bottom-12 left-0 w-full flex justify-center gap-6 px-12 z-30 pointer-events-none">
          {[
            { label: 'Subject', value: '3D Watercolor Room' },
            { label: 'Motion', value: 'Cinematic Pan' },
            { label: 'Env', value: 'Studio White' }
          ].map((item, i) => (
            <div key={i} className="model-box bg-white/60 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-1 min-w-[140px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{item.label}</span>
              <span className="text-sm font-semibold text-slate-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


