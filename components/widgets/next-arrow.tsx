import React from 'react';

interface NextArrowProps {
  onClickNext: () => void;
}

export const NextArrow: React.FC<NextArrowProps> = ({ onClickNext }) => {
  return (
    <div className="absolute bottom-[20vh] right-14 z-10 flex justify-start items-center gap-1">
      <button
        onClick={onClickNext}
        className="bg-[#eee5] fill-white font-mono w-10 h-10 flex items-center justify-center rounded-tr-lg rounded-br-lg transition duration-500 hover:bg-white hover:fill-black opacity-0 animate-show-content"
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};
