import TicketTable from "../tickets/TicketTable";

export default function CustomerTicketHistory({ tickets }) {
  return (
    <section className="space-y-3">
      <div><h2 className="text-lg font-semibold text-slate-900">Ticket history</h2><p className="mt-1 text-sm text-slate-500">All tickets associated with this customer.</p></div>
      <TicketTable tickets={tickets} />
    </section>
  );
}
