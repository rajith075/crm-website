export default function StatsCards() {
  const stats = [
    { title: "Income", value: "$32,064", change: "+25.8%" },
    { title: "Activity Sales", value: "$24,758", change: "+32.5%" },
    { title: "Total Deals", value: "927", change: "-19.6%" },
    { title: "Reply Rate", value: "86,7%", change: "+15.2%" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="
premium-card rounded-2xl p-6
p-6
backdrop-blur-xl
shadow-[0_10px_40px_rgba(0,0,0,0.6)]
hover:shadow-[0_15px_60px_rgba(255,140,0,0.08)]
transition-all duration-300
"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10 pointer-events-none" />

          <p className="text-sm text-gray-400">{item.title}</p>
          <h2 className="text-2xl font-semibold mt-3">{item.value}</h2>
          <div className="mt-3 text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full inline-block">
            {item.change}
          </div>
        </div>
      ))}
    </div>
  );
}