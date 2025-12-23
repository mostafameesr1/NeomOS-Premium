import { useParams } from "react-router-dom";
import roms from "../data/roms.json";

export default function ROMPage() {
  const { id } = useParams();
  const rom = roms[id];

  if (!rom) return <div className="p-10 text-white">ROM not found</div>;

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">

        <img src={rom.image} className="rounded-xl mb-6" />

        <h1 className="text-3xl font-bold">{rom.name}</h1>
        <p className="text-gray-400 mt-1">{rom.version}</p>
        <p className="mt-2">{rom.android}</p>

        <a
          href={rom.download}
          target="_blank"
          className="inline-block mt-6 bg-green-600 px-6 py-3 rounded font-semibold"
        >
          Download ROM
        </a>

        {/* Notes */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Notes</h2>
          <ul className="list-disc list-inside text-gray-300">
            {rom.notes.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        </div>

        {/* Bugs */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2 text-red-400">Bugs</h2>
          <ul className="list-disc list-inside text-gray-300">
            {rom.bugs.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        {/* Credits */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Credits</h2>
          <ul className="list-disc list-inside text-gray-300">
            {rom.credits.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>

      </div>
    </div>
  );
}
