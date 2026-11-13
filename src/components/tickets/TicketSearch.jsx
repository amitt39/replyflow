export default function TicketSearch({filteredText, handleFilteredText}) {
  return (
    <label className="relative min-w-0 lg:col-span-3">
      <span className="sr-only">Search tickets</span>
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
      <input
        type="text"
        value={filteredText}
        placeholder="Search by ticket ID, customer, or subject..."
        onChange={(e) => {
          handleFilteredText(e.target.value);
        }}
        className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
      />
    </label>
  );
}
