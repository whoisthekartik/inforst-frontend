// Screens/SplashScreen.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mainmenu'); // Go to main menu after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <img src="/assets/graphics/logo.png" alt="Game Logo" className="w-64 h-auto" />
    </div>
  );
}