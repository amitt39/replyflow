function StatCard({ label, value }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <h3 className="flex items-center gap-2 text-sm font-medium text-slate-500 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500 before:content-['']">
        {label}
      </h3>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
    </article>
  )
}

export default StatCard
