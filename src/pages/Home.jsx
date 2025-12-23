import ROMCard from "../components/ROMCard";
import roms from "../data/roms.json";

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {roms.map((rom, index) => (
        <ROMCard key={index} rom={rom} index={index} />
      ))}
    </div>
  );
}
