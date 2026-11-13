import TicketTable from "../tickets/TicketTable"

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
        <TicketTable tickets={recentTickets}/>
      </div>
    </section>
  )
}

export default RecentTickets
