import { useParams, Link } from "react-router-dom";
import roms from "../data/roms.json";

export default function ROMPage() {
  const { id } = useParams();
  const rom = roms[id];

  if (!rom) return <div className="text-center text-white py-24">ROM not found</div>;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4">
      <Link to="/" className="text-blue-500 mt-4 inline-block">← Back to Home</Link>
      <h1 className="text-4xl font-bold mt-4">{rom.name}</h1>
      <p className="text-gray-400">{rom.version} | {rom.android}</p>
      <img src={rom.image} alt={rom.name} className="mt-4 w-full max-w-lg rounded-xl"/>
      <div className="mt-6 text-gray-300">
        {rom.notes?.map((note, idx) => <p key={idx}>• {note}</p>)}
      </div>
    </div>
  );
}
