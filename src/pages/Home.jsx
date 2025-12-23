import roms from "../data/roms.json";
import ROMCard from "../components/ROMCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">NeomOS ROMs</h1>
        <p className="text-gray-400 mt-2">
          Custom ROMs • Android 16 • HyperOS
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roms.map((rom, index) => (
          <ROMCard key={index} rom={rom} index={index} />
        ))}
      </div>

    </div>
  );
}
