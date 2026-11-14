export default function TicketHeader({
  ticket,
  handleStatusChange,
  handlePriorityChange,
}) {
  return (
    <section className="flex-none rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 lg:flex-1">
          <p className="text-sm font-medium text-indigo-600">{ticket.id}</p>
          <h1 className="mt-0.5 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            {ticket.subject}
          </h1>
        </div>
        <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 lg:order-last">
          Created {ticket.createdAt}
        </span>
        <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:mt-0">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Customer
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-800">
              {ticket.customer}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Priority
            </dt>
            <dd className="mt-1">
              <div className="relative">
                <select
                  value={ticket.priority}
                  onChange={(e) => {
                    handlePriorityChange(e.target.value);
                  }}
                  aria-label="Ticket priority"
                  className="h-9 min-w-28 cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-8 text-sm font-semibold text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 [&>option]:bg-white [&>option]:text-slate-700"
                >
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </select>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Status
            </dt>
            <dd className="mt-1">
              <div className="relative">
                <select
                  value={ticket.status}
                  onChange={(e) => {
                    handleStatusChange(e.target.value);
                  }}
                  aria-label="Ticket status"
                  className="h-9 min-w-28 cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-8 text-sm font-semibold text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 [&>option]:bg-white [&>option]:text-slate-700"
                >
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
                </select>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
