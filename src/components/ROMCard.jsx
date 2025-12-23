export default function ROMCard({ rom }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={rom.image} alt={rom.title} className="w-full h-48 object-cover mb-2 rounded" />
      <h2 className="font-bold text-lg">{rom.title}</h2>
      <p>{rom.android}</p>
      <a href={rom.link} className="text-blue-500 hover:underline mt-2 block">View ROM</a>
    </div>
  );
}