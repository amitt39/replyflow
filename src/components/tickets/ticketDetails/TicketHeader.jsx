export default function TicketHeader({ ticket, handleStatusChange }) {
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
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.priority === "Urgent" ? "bg-red-50 text-red-700" : ticket.priority === "High" ? "bg-orange-50 text-orange-700" : ticket.priority === "Medium" ? "bg-yellow-50 text-yellow-700" : "bg-green-50 text-green-700"}`}
              >
                {ticket.priority}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Status
            </dt>
            <dd className="mt-1">
              <select
                value={ticket.status}
                onChange={(e) => {
                  handleStatusChange(e.target.value);
                }}
              >
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
              </select>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
