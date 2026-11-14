import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";
import CustomerCard from "../components/customers/CustomerCard";
import CustomerSearch from "../components/customers/CustomerSearch";

const priorityOrder = { Urgent: 4, High: 3, Medium: 2, Low: 1 };
export default function Customers() {
  const [searchText, setSearchText] = useState("");
  const { tickets } = useContext(TicketsContext);
  const navigate = useNavigate();
  const customers = [...new Set(tickets.map((ticket) => ticket.customer))]
    .map((name) => {
      const customerTickets = tickets.filter(
        (ticket) => ticket.customer === name,
      );
      const mostRecentTicket = [...customerTickets].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      )[0];
      const highestPriority =
        [...customerTickets].sort(
          (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
        )[0]?.priority ?? "None";
      return {
        name,
        ticketCount: customerTickets.length,
        openTickets: customerTickets.filter(
          (ticket) => ticket.status === "Open",
        ).length,
        pendingTickets: customerTickets.filter(
          (ticket) => ticket.status === "Pending",
        ).length,
        resolvedTickets: customerTickets.filter(
          (ticket) => ticket.status === "Resolved",
        ).length,
        highestPriority,
        lastTicketDate: mostRecentTicket?.createdAt,
      };
    })
    .filter((customer) =>
      customer.name.toLowerCase().includes(searchText.trim().toLowerCase()),
    );

  return (
    <main className="space-y-6">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Browse customers and their support history.
          </p>
        </div>
        <p className="text-sm text-slate-500">
          {customers.length} customer{customers.length === 1 ? "" : "s"}
        </p>
      </header>
      <CustomerSearch value={searchText} onChange={setSearchText} />
      {customers.length > 0 ? (
        <section
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Customer directory"
        >
          {customers.map((customer) => (
            <CustomerCard
              key={customer.name}
              onClick={() =>
                navigate(`/customers/${encodeURIComponent(customer.name)}`)
              }
              customer={customer}
            />
          ))}
        </section>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
          <h2 className="text-base font-semibold text-slate-900">
            No customers found
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Try a different search term.
          </p>
        </div>
      )}
    </main>
  );
}
