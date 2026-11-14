import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";

const priorityOrder = { Urgent: 4, High: 3, Medium: 2, Low: 1 };
const priorityStyles = { Urgent: "bg-red-50 text-red-700", High: "bg-orange-50 text-orange-700", Medium: "bg-yellow-50 text-yellow-700", Low: "bg-green-50 text-green-700", None: "bg-slate-100 text-slate-600" };

function formatDate(date) {
  if (!date) return "No tickets";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

export default function Customers() {
  const [searchText, setSearchText] = useState("");
  const { tickets } = useContext(TicketsContext);
  const navigate = useNavigate();
  const customers = [...new Set(tickets.map((ticket) => ticket.customer))]
    .map((name) => {
      const customerTickets = tickets.filter((ticket) => ticket.customer === name);
      const mostRecentTicket = [...customerTickets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      const highestPriority = [...customerTickets].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])[0]?.priority ?? "None";
      return { name, ticketCount: customerTickets.length, openTickets: customerTickets.filter((ticket) => ticket.status === "Open").length, pendingTickets: customerTickets.filter((ticket) => ticket.status === "Pending").length, resolvedTickets: customerTickets.filter((ticket) => ticket.status === "Resolved").length, highestPriority, lastTicketDate: mostRecentTicket?.createdAt };
    })
    .filter((customer) => customer.name.toLowerCase().includes(searchText.trim().toLowerCase()));

  return (
    <main className="space-y-6">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm text-slate-500">Browse customers and their support history.</p></div>
        <p className="text-sm text-slate-500">{customers.length} customer{customers.length === 1 ? "" : "s"}</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <label htmlFor="customer-search" className="mb-2 block text-sm font-medium text-slate-700">Search customers</label>
        <input id="customer-search" type="search" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search by customer name..." className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 sm:max-w-md" />
      </div>
      {customers.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Customer directory">
          {customers.map((customer) => (
            <button key={customer.name} type="button" onClick={() => navigate(`/customers/${encodeURIComponent(customer.name)}`)} className="group flex min-h-64 flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:p-6">
              <div className="flex items-start justify-between gap-3"><div><h2 className="text-lg font-semibold text-slate-900">{customer.name}</h2><p className="mt-1 text-sm text-slate-500">{customer.ticketCount} total ticket{customer.ticketCount === 1 ? "" : "s"}</p></div><span className="text-lg text-slate-300 transition group-hover:text-indigo-500" aria-hidden="true">→</span></div>
              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-slate-100 py-4 text-center"><div><p className="text-lg font-semibold text-blue-700">{customer.openTickets}</p><p className="text-xs text-slate-500">Open</p></div><div><p className="text-lg font-semibold text-amber-700">{customer.pendingTickets}</p><p className="text-xs text-slate-500">Pending</p></div><div><p className="text-lg font-semibold text-emerald-700">{customer.resolvedTickets}</p><p className="text-xs text-slate-500">Resolved</p></div></div>
              <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-sm"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[customer.highestPriority]}`}>{customer.highestPriority} priority</span><span className="text-right text-slate-500">Last ticket<br /><span className="font-medium text-slate-700">{formatDate(customer.lastTicketDate)}</span></span></div>
            </button>
          ))}
        </section>
      ) : <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"><h2 className="text-base font-semibold text-slate-900">No customers found</h2><p className="mt-1 text-sm text-slate-500">Try a different search term.</p></div>}
    </main>
  );
}
