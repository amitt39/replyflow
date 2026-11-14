export default function CustomerSearch({ value, onChange }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <label htmlFor="customer-search" className="mb-2 block text-sm font-medium text-slate-700">
        Search customers
      </label>
      <input
        id="customer-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by customer name..."
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 sm:max-w-md"
      />
    </div>
  );
}
