import TicketTable from "../tickets/TicketTable";
import { useContext } from "react";
import { TicketsContext } from "../../context/TicketsContext";

function RecentTickets() {
  const { tickets } = useContext(TicketsContext);
  const recentTickets = [...tickets]
    .sort((t1, t2) => new Date(t2.createdAt) - new Date(t1.createdAt))
    .slice(0, 5);
  return (
    <section
      aria-labelledby="recent-tickets-title"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <h2
          id="recent-tickets-title"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Recent Tickets
        </h2>
      </div>

      <div className="overflow-x-auto">
        <TicketTable tickets={recentTickets} />
      </div>
    </section>
  );
}

export default RecentTickets;
