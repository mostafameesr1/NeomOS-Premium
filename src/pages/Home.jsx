import Navbar from "../components/Navbar";
import ROMCard from "../components/ROMCard";
import roms from "../../public/data/roms.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <div className="text-center py-20">
        <h1 className="text-5xl font-extrabold">NeomOS ROMs</h1>
        <p className="text-gray-400 mt-3 text-lg">
          Custom ROMs for Android 16 & HyperOS Builds
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roms.map((rom, index) => (
          <ROMCard key={index} rom={rom} index={index} />
        ))}
      </div>
    </div>
  );
}
