import { Link } from "react-router-dom";

export default function ROMCard({ rom, index }) {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:scale-[1.02] transition">
      
      <div className="relative">
        <img
          src={rom.image}
          className="w-full h-40 object-cover"
          alt={rom.name}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold">{rom.name}</h2>
        <p className="text-xs text-gray-400">{rom.version}</p>
        <div className="mt-2 text-sm text-gray-300">{rom.android}</div>

        <Link
          to={`/rom/${index}`}
          className="w-full text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm block mt-4"
        >
          View ROM
        </Link>
      </div>
    </div>
  );
}
