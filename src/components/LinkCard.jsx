import React from 'react';

const LinkCard = ({ title, url, logo }) => (
  <div className="text-center w-28 sm:w-32">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-black hover:text-gray-700 transition-colors duration-300"
    >
      <img
        src={logo}
        alt={title}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
      />
      <p className="mt-2 text-sm sm:text-base font-medium">{title}</p>
    </a>
  </div>
);

export default LinkCard;