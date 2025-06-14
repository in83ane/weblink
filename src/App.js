import React, { useState, useRef, useEffect } from 'react';
import LinkCard from './components/LinkCard';


import tipme from './assets/logos/tipme.png';
import youtubeLogo from './assets/logos/youtube.png';
import githubLogo from './assets/logos/GitHub.png';
import igLogo from './assets/logos/ig.png';
import tiktokLogo from './assets/logos/tiktok.png';
import spotifyLogo from './assets/logos/spotify.png';
import twitchLogo from './assets/logos/twitch.png';
import muteLogo from './assets/logos/mute.png';
import speakerLogo from './assets/logos/speaker.png';
import ezdontatelogo from './assets/logos/ezdonatelogo.png'; 

import thisTimeAudio from './assets/audio/ThisTime.mp3';

const App = () => {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const links = [
    { id: 1, title: 'easydonate', url: 'https://ezdn.app/in83ane', logo: ezdontatelogo },
    { id: 8, title: 'tipme', url: 'https://tipme.in.th/eda9a3279926adf604ce2b25', logo: tipme },
    { id: 2, title: 'youtube', url: 'https://www.youtube.com/@in83ane', logo: youtubeLogo },
    { id: 3, title: 'github', url: 'https://github.com/in83ane', logo: githubLogo },
    { id: 4, title: 'instagram', url: 'https://www.instagram.com/in83ane/', logo: igLogo },
    { id: 5, title: 'tiktok', url: 'https://www.tiktok.com/@in83ane', logo: tiktokLogo },
    { id: 6, title: 'spotify', url: 'https://open.spotify.com/user/31c5oe2txqvbj5obvr7h4nmg3rfi', logo: spotifyLogo },
    { id: 7, title: 'twitch', url: 'https://twitch.com/in83ane', logo: twitchLogo },
  ];

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
      setVolume(audioRef.current.muted ? 0 : audioRef.current.volume);
    }
  };

  const adjustVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      const shouldMute = newVolume === 0;
      audioRef.current.muted = shouldMute;
      setIsMuted(shouldMute);
    }
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, []);

  const getLayoutClass = () => {
    const totalLinks = links.length;
    // หน้าจอเล็ก: 2 คอลัมน์, หน้าจอกลาง: 3 คอลัมน์, หน้าจอใหญ่: 4 คอลัมน์
    if (totalLinks <= 2) return 'grid-cols-1 sm:grid-cols-2';
    if (totalLinks <= 3) return 'grid-cols-2 sm:grid-cols-1 lg:grid-cols-2';
    if (totalLinks <= 6) return 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 relative">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-800 tracking-wider">IN83ANE</h1>

      <audio ref={audioRef} autoPlay loop className="hidden">
        <source src={thisTimeAudio} type="audio/mp3" />
      </audio>

      <div className="absolute top-4 left-4 flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
        <button onClick={toggleMute} className="p-1 hover:scale-110 transition-transform">
          {isMuted ? (
            <img src={muteLogo} alt="Mute" className="w-6 h-6" />
          ) : (
            <img src={speakerLogo} alt="Speaker" className="w-6 h-6" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={adjustVolume}
          className="w-28 sm:w-32"
        />
      </div>

      <div className={`grid gap-4 mt-8 max-w-4xl w-full px-4 ${getLayoutClass()}`}>
        {links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
};

export default App;