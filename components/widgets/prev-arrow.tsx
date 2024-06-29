import React from 'react';

interface PrevArrowProps {
  onClickPrev: () => void;
}

export const PrevArrow: React.FC<PrevArrowProps> = ({ onClickPrev }) => {
  return (
    <div className="absolute bottom-[20vh] left-14 z-10 flex justify-start items-center gap-1">
      <button
        onClick={onClickPrev}
        className="bg-[#eee5] fill-white font-mono w-10 h-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg transition duration-500 hover:bg-white hover:fill-black opacity-0 animate-show-content"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
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
