import { Link } from "react-router-dom";

export default function ROMCard({ rom, index }) {
  return (
    <div className="bg-[#111] text-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
      
      <img
        src={rom.image}
        alt={rom.name}
        className="w-full h-44 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{rom.name}</h2>

        <p className="text-sm text-gray-400">
          {rom.version}
        </p>

        <p className="text-sm">
          {rom.android}
        </p>

        <div className="flex justify-between items-center mt-3">
          <Link
            to={`/rom/${index}`}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
          >
            View
          </Link>

          <a
            href={rom.download}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-green-400 hover:underline"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
