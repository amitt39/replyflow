function getInitials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "?";
}

export default function CustomerProfile({ name, ticketCount }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-700" aria-hidden="true">{getInitials(name)}</div>
        <div>
          <p className="text-sm font-medium text-indigo-600">Customer profile</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{name}</h1>
          <p className="mt-1 text-sm text-slate-500">{ticketCount} total ticket{ticketCount === 1 ? "" : "s"}</p>
        </div>
      </div>
    </section>
  );
}
