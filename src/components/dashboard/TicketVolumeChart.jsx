import { useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const ticketVolumeData = {
  'Last 7 Days': [
    { date: 'Jun 10', tickets: 18 },
    { date: 'Jun 11', tickets: 24 },
    { date: 'Jun 12', tickets: 21 },
    { date: 'Jun 13', tickets: 29 },
    { date: 'Jun 14', tickets: 25 },
    { date: 'Jun 15', tickets: 32 },
    { date: 'Jun 16', tickets: 28 },
  ],
  'Last 30 Days': [
    { date: 'May 18', tickets: 16 },
    { date: 'May 19', tickets: 20 },
    { date: 'May 20', tickets: 18 },
    { date: 'May 21', tickets: 24 },
    { date: 'May 22', tickets: 22 },
    { date: 'May 23', tickets: 27 },
    { date: 'May 24', tickets: 25 },
    { date: 'May 25', tickets: 19 },
    { date: 'May 26', tickets: 23 },
    { date: 'May 27', tickets: 29 },
    { date: 'May 28', tickets: 26 },
    { date: 'May 29', tickets: 31 },
    { date: 'May 30', tickets: 28 },
    { date: 'May 31', tickets: 34 },
    { date: 'Jun 1', tickets: 30 },
    { date: 'Jun 2', tickets: 24 },
    { date: 'Jun 3', tickets: 27 },
    { date: 'Jun 4', tickets: 32 },
    { date: 'Jun 5', tickets: 29 },
    { date: 'Jun 6', tickets: 35 },
    { date: 'Jun 7', tickets: 31 },
    { date: 'Jun 8', tickets: 26 },
    { date: 'Jun 9', tickets: 30 },
    { date: 'Jun 10', tickets: 18 },
    { date: 'Jun 11', tickets: 24 },
    { date: 'Jun 12', tickets: 21 },
    { date: 'Jun 13', tickets: 29 },
    { date: 'Jun 14', tickets: 25 },
    { date: 'Jun 15', tickets: 32 },
    { date: 'Jun 16', tickets: 28 },
  ],
}

function TicketVolumeChart() {
  const [period, setPeriod] = useState('Last 7 Days')

  return (
    <section aria-labelledby="ticket-volume-title" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="ticket-volume-title" className="text-lg font-semibold tracking-tight text-slate-900">
          Ticket Volume
        </h2>
        <div className="flex items-center gap-3">
          <label htmlFor="ticket-volume-period" className="text-sm font-medium text-slate-500">
            Period
          </label>
        <select
          id="ticket-volume-period"
          value={period}
          onChange={(event) => setPeriod(event.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
        </div>
      </div>

      <div className="mt-6 h-72 w-full min-w-0 sm:h-80">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ticketVolumeData[period]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="tickets" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default TicketVolumeChart
