import Navbar from "../components/Navbar";
import ROMCard from "../components/ROMCard";
import roms from "../data/roms.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="text-center py-24">
        <h1 className="text-5xl font-extrabold">
          NeomOSPremium
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Custom ROMs for Android 16 & HyperOS Builds
        </p>
      </div>

      {/* Grid للكروت */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roms.map((rom, index) => (
          <ROMCard key={index} rom={rom} index={index} />
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#0d1117] text-gray-500 text-center py-4 mt-12">
        © NeomOS
      </footer>
    </div>
  );
}
