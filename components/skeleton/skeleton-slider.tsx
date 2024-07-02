import React from 'react'

export const SkeletonSlider = () => {
  return (
    <div className="animate-pulse">
      <div className="h-[20vh] relative shadow-md shadow-gray-400 rounded-b-lg sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] bg-gray-300">
        <ul className="flex space-x-4">
          <li className="w-full h-full bg-gray-400 rounded"></li>
          <li className="w-full h-full bg-gray-400 rounded"></li>
          <li className="w-full h-full bg-gray-400 rounded"></li>
          <li className="w-full h-full bg-gray-400 rounded"></li>
          <li className="w-full h-full bg-gray-400 rounded"></li>
          <li className="w-full h-full bg-gray-400 rounded"></li>
        </ul>
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2 p-2 bg-gray-400 rounded-tl-lg rounded-bl-lg">
          {/* Prev Arrow Placeholder */}
          <div className="w-8 h-8 bg-gray-500 rounded"></div>
        </div>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 p-2 bg-gray-400 rounded-tr-lg rounded-br-lg">
          {/* Next Arrow Placeholder */}
          <div className="w-8 h-8 bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  );
};
