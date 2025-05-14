import { useNavigate } from 'react-router-dom';

export default function FactionSelect() {
  const navigate = useNavigate();

  const chooseFaction = (faction) => {
    localStorage.setItem('faction', faction);
    navigate('/map'); // or '/city1' later
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-900 to-red-900 flex items-center justify-center text-white">
      <div className="flex gap-20">
        {/* Frostborn Side */}
        <div
          className="p-8 bg-blue-800 bg-opacity-60 rounded-xl hover:scale-105 transition cursor-pointer"
          onClick={() => chooseFaction('Frostborn')}
        >
          <h2 className="text-3xl font-bold mb-2">The Frostborn</h2>
          <img src="/assets/graphics/factions/frostborn.png" alt="Frostborn" className="w-40 h-40" />
        </div>

        {/* Infernos Side */}
        <div
          className="p-8 bg-red-800 bg-opacity-60 rounded-xl hover:scale-105 transition cursor-pointer"
          onClick={() => chooseFaction('Infernos')}
        >
          <h2 className="text-3xl font-bold mb-2">The Infernos</h2>
          <img src="/assets/graphics/factions/infernos.png" alt="Infernos" className="w-40 h-40" />
        </div>
      </div>
    </div>
  );
}