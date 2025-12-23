import roms from "../../public/data/roms.json";

export default function ROMPage({ match }) {
  const index = Number(match.params.id);
  const rom = roms[index];

  if (!rom) return <div className="text-white text-center py-24">ROM not found</div>;

  return (
    <div className="p-6 bg-[#0b0b0b] text-white">
      <h1 className="text-3xl font-bold">{rom.name}</h1>
      <p className="text-gray-400">{rom.version}</p>
      <p className="mt-2">{rom.android}</p>

      <a
        href={rom.download}
        target="_blank"
        className="block mt-6 text-center bg-green-600 px-6 py-2 rounded text-white"
      >
        Download ROM
      </a>

      <div className="mt-6">
        <h2 className="font-bold">Notes</h2>
        <ul className="list-disc list-inside text-gray-300">
          {rom.notes.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </div>
    </div>
  );
}
