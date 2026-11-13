import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const priorityData = [
  { priority: 'Urgent', tickets: 12, color: '#dc2626' },
  { priority: 'High', tickets: 28, color: '#f97316' },
  { priority: 'Medium', tickets: 46, color: '#eab308' },
  { priority: 'Low', tickets: 42, color: '#22c55e' },
]

const totalTickets = priorityData.reduce((total, item) => total + item.tickets, 0)

function TicketPriorityChart() {
  return (
    <section aria-labelledby="ticket-priority-title" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 id="ticket-priority-title" className="text-lg font-semibold tracking-tight text-slate-900">
        Ticket Priority Distribution
      </h2>

      <div className="mt-4 h-72 w-full min-w-0 sm:h-80">
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={priorityData}
            dataKey="tickets"
            nameKey="priority"
            innerRadius={75}
            outerRadius={105}
            paddingAngle={3}
          >
            {priorityData.map((item) => (
              <Cell key={item.priority} fill={item.color} />
            ))}
          </Pie>
          <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 text-2xl font-semibold">
            {totalTickets}
          </text>
          <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 text-xs">
            Total Tickets
          </text>
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
      </div>

      <ul aria-label="Ticket priority legend" className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
        {priorityData.map((item) => (
          <li key={item.priority} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-slate-600">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 rounded-full ${item.priority === 'Urgent' ? 'bg-red-600' : item.priority === 'High' ? 'bg-orange-500' : item.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}
              />
              {item.priority}
            </span>
            <span className="font-semibold text-slate-900">{item.tickets}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TicketPriorityChart
