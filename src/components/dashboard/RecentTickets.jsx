const recentTickets = [
  {
    id: 'RF-1042',
    customer: 'Olivia Martin',
    subject: 'Unable to update billing information',
    priority: 'Urgent',
    status: 'Open',
    createdAt: 'Jun 16, 2026',
  },
  {
    id: 'RF-1041',
    customer: 'Liam Johnson',
    subject: 'Question about account permissions',
    priority: 'High',
    status: 'Pending',
    createdAt: 'Jun 16, 2026',
  },
  {
    id: 'RF-1040',
    customer: 'Emma Williams',
    subject: 'Exported report has missing data',
    priority: 'Medium',
    status: 'Open',
    createdAt: 'Jun 15, 2026',
  },
  {
    id: 'RF-1039',
    customer: 'Noah Brown',
    subject: 'Password reset email not received',
    priority: 'High',
    status: 'Resolved',
    createdAt: 'Jun 15, 2026',
  },
  {
    id: 'RF-1038',
    customer: 'Sophia Davis',
    subject: 'How do I change my notification settings?',
    priority: 'Low',
    status: 'Resolved',
    createdAt: 'Jun 14, 2026',
  },
]

function RecentTickets() {
  return (
    <section aria-labelledby="recent-tickets-title" className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <h2 id="recent-tickets-title" className="text-lg font-semibold tracking-tight text-slate-900">Recent Tickets</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left text-sm">
        <caption className="sr-only">Five most recent support tickets</caption>
        <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium sm:px-6">Ticket ID</th>
            <th scope="col" className="px-5 py-3 font-medium sm:px-6">Customer</th>
            <th scope="col" className="px-5 py-3 font-medium sm:px-6">Subject</th>
            <th scope="col" className="px-5 py-3 font-medium sm:px-6">Priority</th>
            <th scope="col" className="px-5 py-3 font-medium sm:px-6">Status</th>
            <th scope="col" className="px-5 py-3 font-medium sm:px-6">Created At</th>
          </tr>
        </thead>
        <tbody>
          {recentTickets.map((ticket) => (
            <tr key={ticket.id} className="border-b border-slate-100 text-slate-600 transition-colors last:border-b-0 hover:bg-slate-50">
              <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-900 sm:px-6">{ticket.id}</td>
              <td className="whitespace-nowrap px-5 py-4 sm:px-6">{ticket.customer}</td>
              <td className="px-5 py-4 text-slate-700 sm:px-6">{ticket.subject}</td>
              <td className="px-5 py-4 sm:px-6">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.priority === 'Urgent' ? 'bg-red-50 text-red-700' : ticket.priority === 'High' ? 'bg-orange-50 text-orange-700' : ticket.priority === 'Medium' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                  {ticket.priority}
                </span>
              </td>
              <td className="px-5 py-4 sm:px-6">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.status === 'Open' ? 'bg-blue-50 text-blue-700' : ticket.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                  {ticket.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-slate-500 sm:px-6">{ticket.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  )
}

export default RecentTickets
