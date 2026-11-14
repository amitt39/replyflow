import { useState } from "react";
import TicketTable from "../components/tickets/TicketTable";
import TicketSearch from "../components/tickets/TicketSearch";
import TicketFilter from "../components/tickets/TicketFilters";
import { useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";

function Inbox() {
  const { tickets } = useContext(TicketsContext);

  const [filteredText, setFilterdText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [selectedPriority, setSelectedPriority] = useState("All Priorities");
  const [sortOrder, setSortOrder] = useState("newest");

  const searchText = filteredText.toLowerCase();

  const filteredTickets = tickets.filter(
    (ticket) =>
      (ticket.priority === selectedPriority ||
        selectedPriority === "All Priorities") &&
      (ticket.status === selectedStatus || selectedStatus === "All Statuses") &&
      (ticket.id.toLowerCase().includes(searchText) ||
        ticket.customer.toLowerCase().includes(searchText) ||
        ticket.subject.toLowerCase().includes(searchText)),
  );

  const sortedTickets = [...filteredTickets].sort((ticket1, ticket2) => {
    const dateTicket1 = new Date(ticket1.createdAt).getTime();
    const dateTicket2 = new Date(ticket2.createdAt).getTime();

    return sortOrder === "newest"
      ? dateTicket2 - dateTicket1
      : dateTicket1 - dateTicket2;
  });

  return (
    <main className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[12%_17%_30%_12%_13%_16%] lg:items-center">
          {/* Searchbar */}
          <TicketSearch
            filteredText={filteredText}
            handleFilteredText={setFilterdText}
          />
          <TicketFilter
            selectedPriority={selectedPriority}
            handlePriority={setSelectedPriority}
            selectedStatus={selectedStatus}
            handleStatus={setSelectedStatus}
            sortOrder={sortOrder}
            handleSort={setSortOrder}
          />
        </div>
      </div>
      <TicketTable tickets={sortedTickets} />
    </main>
  );
}

export default Inbox;
