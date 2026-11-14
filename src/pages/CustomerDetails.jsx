import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";
import TicketTable from "../components/tickets/TicketTable";
import StatCard from "../components/ui/StatCard";

function getInitials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "?";
}

export default function CustomerDetails() {
  const { name } = useParams();
  const { tickets } = useContext(TicketsContext);
  const customerName = name ?? "";
  const customerTickets = tickets.filter((ticket) => ticket.customer === customerName);

  if (customerTickets.length === 0) {
    return <main className="flex min-h-80 items-center justify-center"><div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500">?</div><h1 className="mt-4 text-xl font-semibold text-slate-900">Customer not found</h1><p className="mt-2 text-sm text-slate-500">We couldn’t find any tickets for “{customerName}”.</p><Link to="/customers" className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Back to customers</Link></div></main>;
  }

  const stats = [
    { label: "Total tickets", value: customerTickets.length },
    { label: "Open", value: customerTickets.filter((ticket) => ticket.status === "Open").length },
    { label: "Pending", value: customerTickets.filter((ticket) => ticket.status === "Pending").length },
    { label: "Resolved", value: customerTickets.filter((ticket) => ticket.status === "Resolved").length },
  ];

  return <main className="space-y-6">
    <Link to="/customers" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"><span aria-hidden="true">←</span> Back to customers</Link>
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-center gap-4"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-700" aria-hidden="true">{getInitials(customerName)}</div><div><p className="text-sm font-medium text-indigo-600">Customer profile</p><h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{customerName}</h1><p className="mt-1 text-sm text-slate-500">{customerTickets.length} total ticket{customerTickets.length === 1 ? "" : "s"}</p></div></div></section>
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Customer ticket statistics">{stats.map((stat) => <StatCard key={stat.label} label={stat.label} value={stat.value} />)}</section>
    <section className="space-y-3"><div><h2 className="text-lg font-semibold text-slate-900">Ticket history</h2><p className="mt-1 text-sm text-slate-500">All tickets associated with this customer.</p></div><TicketTable tickets={customerTickets} /></section>
  </main>;
}
