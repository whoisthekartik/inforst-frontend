import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/faction');
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white relative">
      {/* Background Splash Art */}
      <img
        src="/assets/graphics/titles/inforst_splash.png"
        alt="Splash Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
      />

      {/* Overlay Content */}
      <div className="z-10 flex flex-col items-center justify-center">
        <img
          src="/assets/graphics/titles/logo.png"
          alt="Inforst Logo"
          className="w-[400px] h-auto mb-10"
        />

        <button
          onClick={handleStart}
          className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-xl hover:bg-gray-300 transition-all duration-200"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
