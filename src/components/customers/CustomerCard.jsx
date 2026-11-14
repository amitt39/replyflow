const priorityStyles = {
  Urgent: "bg-red-50 text-red-700",
  High: "bg-orange-50 text-orange-700",
  Medium: "bg-yellow-50 text-yellow-700",
  Low: "bg-green-50 text-green-700",
  None: "bg-slate-100 text-slate-600",
};

function formatDate(date) {
  if (!date) return "No tickets";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function CustomerCard({ customer, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-64 flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{customer.name}</h2>
          <p className="mt-1 text-sm text-slate-500">
            {customer.ticketCount} total ticket{customer.ticketCount === 1 ? "" : "s"}
          </p>
        </div>
        <span className="text-lg text-slate-300 transition group-hover:text-indigo-500" aria-hidden="true">→</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 border-y border-slate-100 py-4 text-center">
        <div><p className="text-lg font-semibold text-blue-700">{customer.openTickets}</p><p className="text-xs text-slate-500">Open</p></div>
        <div><p className="text-lg font-semibold text-amber-700">{customer.pendingTickets}</p><p className="text-xs text-slate-500">Pending</p></div>
        <div><p className="text-lg font-semibold text-emerald-700">{customer.resolvedTickets}</p><p className="text-xs text-slate-500">Resolved</p></div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-sm">
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[customer.highestPriority]}`}>
          {customer.highestPriority} priority
        </span>
        <span className="text-right text-slate-500">Last ticket<br /><span className="font-medium text-slate-700">{formatDate(customer.lastTicketDate)}</span></span>
      </div>
    </button>
  );
}
