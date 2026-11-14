import StatCard from "../ui/StatCard";

export default function CustomerStats({ stats }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Customer ticket statistics">
      {stats.map((stat) => <StatCard key={stat.label} label={stat.label} value={stat.value} />)}
    </section>
  );
}
