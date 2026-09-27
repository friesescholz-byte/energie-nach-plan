import React from 'react';

interface SubpageHeroStageProps {
  imageSrc: string;
  imageAlt: string;
}

/**
 * Reusable Hero Stage for the 4 service landing pages.
 * Displays the hero image in the exact dynamic, organic architectural cutaway shape
 * as on the Startseite, seamlessly integrated into the green wave backdrop.
 */
export const SubpageHeroStage: React.FC<SubpageHeroStageProps> = ({ imageSrc, imageAlt }) => {
  return (
    <>
      {/* SVG ClipPath Definition (Exact matching shape as HomePage) */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
        <defs>
          <clipPath id="subpageHeroShapeRef" clipPathUnits="objectBoundingBox">
            <path d="
              M 0.22, 0.00 
              L 1.00, 0.00 
              L 1.00, 1.00 
              L 0.48, 1.00 
              Q 0.38, 1.00 0.32, 0.92 
              L 0.04, 0.49 
              Q 0.015, 0.44 0.04, 0.39 
              L 0.20, 0.04 
              Q 0.21, 0.00 0.22, 0.00 
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* RECHTE HERO-BÜHNE (Desktop) */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[55%] xl:w-[53%] 2xl:w-[51%] items-end justify-end z-10 pointer-events-none overflow-hidden pr-0">
        {/* 1. Die organische grüne Form im Hintergrund: bündig an oberer und rechter Kante */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg 
            viewBox="0 0 1000 1000" 
            preserveAspectRatio="none" 
            className="w-full h-full" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M 380, 0
                C 370, 100 460, 200 660, 250
                C 800, 285 910, 295 1000, 290
                L 1000, 1000
                L 900, 1000
                C 960, 850 1000, 600 1000, 380
                L 1000, 0
                Z
              "
              fill="#2DE054"
            />
          </svg>
        </div>

        {/* 2. Das Bild mit der originalen organischen Spitzenform der Startseite */}
        <div 
          className="relative w-full h-full max-h-[700px] flex items-end justify-end filter drop-shadow-[0_25px_50px_rgba(27,23,84,0.18)] z-10"
          style={{ clipPath: 'url(#subpageHeroShapeRef)', WebkitClipPath: 'url(#subpageHeroShapeRef)' }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
};

export const SubpageHeroMobileImage: React.FC<SubpageHeroStageProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="lg:hidden mt-8 w-full max-w-md mx-auto">
      <div 
        className="relative overflow-hidden filter drop-shadow-[0_20px_40px_rgba(27,23,84,0.18)]"
        style={{ clipPath: 'url(#subpageHeroShapeRef)', WebkitClipPath: 'url(#subpageHeroShapeRef)' }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover object-center"
          loading="eager"
        />
      </div>
    </div>
  );
};
