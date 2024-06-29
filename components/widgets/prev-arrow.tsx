import React from 'react';

interface PrevArrowProps {
  onClickPrev: () => void;
}

export const PrevArrow: React.FC<PrevArrowProps> = ({ onClickPrev }) => {
  return (
    <div className="absolute bottom-[8vh] sm:bottom-[25vh] md:bottom-24 lg:bottom-[20vh] xl:bottom-[25vh] 2xl:bottom-[30vh] left-4 sm:left-14 md:left-7 lg:left-8 xl:left-10 2xl:left-14 z-10 flex justify-start items-center gap-1">
      <button
        onClick={onClickPrev}
        className="font-mono w-4 h-4 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-11 lg:h-11 xl:w-10 xl:h-10 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-tl-lg rounded-bl-lg transition duration-500 hover:bg-white hover:fill-black opacity-0 animate-show-content"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-11 lg:h-11 xl:w-10 xl:h-10 2xl:w-16 2xl:h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};
