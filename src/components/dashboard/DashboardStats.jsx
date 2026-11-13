import StatCard from '../ui/StatCard.jsx'

const defaultStats = [
  { label: 'Total Tickets', value: 128 },
  { label: 'Open Tickets', value: 34 },
  { label: 'Pending Tickets', value: 21 },
  { label: 'Resolved Tickets', value: 73 },
]

function DashboardStats({ stats = defaultStats }) {
  return (
    <section aria-labelledby="ticket-statistics-title" className="space-y-5">
      <h2 id="ticket-statistics-title" className="text-lg font-semibold tracking-tight text-slate-900">
        Ticket Statistics
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  )
}

export default DashboardStats
