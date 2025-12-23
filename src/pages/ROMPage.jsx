import { useParams } from "react-router-dom";
import roms from "../data/roms.json";

export default function ROMPage() {
  const { id } = useParams();
  const rom = roms[id];

  if (!rom) {
    return (
      <div className="p-6 text-center text-red-500">
        ROM not found
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <img
        src={rom.image}
        alt={rom.title}
        className="w-full max-w-xl mx-auto rounded mb-4"
      />

      <h1 className="text-3xl font-bold mb-2 text-center">
        {rom.title}
      </h1>

      <p className="text-gray-600 text-center mb-6">
        {rom.android}
      </p>

      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Download ROM
        </button>
      </div>
    </div>
  );
}
