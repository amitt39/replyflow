export default function TicketFilters({
  selectedPriority,
  handlePriority,
  selectedStatus,
  handleStatus,
  sortOrder,
  handleSort,
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-subgrid">
      <div className="relative">
        {/* filter by priority */}
        <select
          name="priority"
          value={selectedPriority}
          onChange={(e) => {
            handlePriority(e.target.value);
          }}
          className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="All Priorities">All Priorities</option>
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {/* filter by status */}
      <div className="relative">
        <select
          name="status"
          value={selectedStatus}
          onChange={(e) => {
            handleStatus(e.target.value);
          }}
          className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="All Statuses">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {/* sort by date */}
      <div className="relative">
        <select
          name="sortOrder"
          value={sortOrder}
          onChange={(e) => {
            handleSort(e.target.value);
          }}
          className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
