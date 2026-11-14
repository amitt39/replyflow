import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";
import CustomerProfile from "../components/customers/CustomerProfile";
import CustomerStats from "../components/customers/CustomerStats";
import CustomerTicketHistory from "../components/customers/CustomerTicketHistory";

export default function CustomerDetails() {
  const { name } = useParams();
  const { tickets } = useContext(TicketsContext);
  const customerName = name ?? "";
  const customerTickets = tickets.filter(
    (ticket) => ticket.customer === customerName,
  );

  if (customerTickets.length === 0) {
    return (
      <main className="flex min-h-80 items-center justify-center">
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500">
            ?
          </div>
          <h1 className="mt-4 text-xl font-semibold text-slate-900">
            Customer not found
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            We couldn’t find any tickets for “{customerName}”.
          </p>
          <Link
            to="/customers"
            className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back to customers
          </Link>
        </div>
      </main>
    );
  }

  const stats = [
    { label: "Total tickets", value: customerTickets.length },
    {
      label: "Open",
      value: customerTickets.filter((ticket) => ticket.status === "Open")
        .length,
    },
    {
      label: "Pending",
      value: customerTickets.filter((ticket) => ticket.status === "Pending")
        .length,
    },
    {
      label: "Resolved",
      value: customerTickets.filter((ticket) => ticket.status === "Resolved")
        .length,
    },
  ];

  return (
    <main className="space-y-6">
      <Link
        to="/customers"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span aria-hidden="true">←</span> Back to customers
      </Link>
      <CustomerProfile
        name={customerName}
        ticketCount={customerTickets.length}
      />
      <CustomerStats stats={stats} />
      <CustomerTicketHistory tickets={customerTickets} />
    </main>
  );
}
