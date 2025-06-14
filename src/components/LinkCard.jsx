import React from 'react';

const LinkCard = ({ title, url, logo }) => {
  // กำหนดสีตาม platform
  const getCardStyle = (title) => {
    const styles = {
      easydonate: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      tipme: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      youtube: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      github: 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900',
      instagram: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
      tiktok: 'bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black',
      spotify: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      twitch: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      default: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
    };
    return styles[title.toLowerCase()] || styles.default;
  };

  return (
    <div className="w-full sm:w-auto">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 ${getCardStyle(title)} hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl px-4 py-3 min-w-[160px] group text-white`}
      >
        <img
          src={logo}
          alt={title}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 ease-in-out flex-shrink-0 bg-white/10 p-1"
        />
        <span className="font-medium text-sm sm:text-base capitalize group-hover:text-gray-100 transition-colors duration-300 text-center">
          {title}
        </span>
      </a>
    </div>
  );
};

export default LinkCard;