import { Link } from "react-router-dom";

export default function ROMCard({ rom, index }) {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:scale-[1.03] transition-all duration-300">
      <img
        src={rom.image}
        alt={rom.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{rom.name}</h2>
        <p className="text-gray-400 mt-1">{rom.android}</p>
        <Link
          to={`/#/rom/${index}`}
          className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
        >
          View ROM
        </Link>
      </div>
    </div>
  );
}
