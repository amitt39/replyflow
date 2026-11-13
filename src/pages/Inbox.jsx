import { useState } from "react";
import TicketTable from "../components/tickets/TicketTable";
import TicketSearch from "../components/tickets/TicketSearch";
import TicketFilter from "../components/tickets/TicketFilters";

const tickets = [
  {
    id: "RF-1042",
    customer: "Olivia Martin",
    subject: "Unable to update billing",
    priority: "Urgent",
    status: "Open",
    createdAt: "2026-11-14",
  },
  {
    id: "RF-1041",
    customer: "Liam Johnson",
    subject: "Question about account permissions",
    priority: "High",
    status: "Pending",
    createdAt: "2026-11-13",
  },
  {
    id: "RF-1040",
    customer: "Emma Williams",
    subject: "Exported report has missing data",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-11-13",
  },
  {
    id: "RF-1039",
    customer: "Noah Brown",
    subject: "Password reset email not received",
    priority: "High",
    status: "Resolved",
    createdAt: "2026-11-12",
  },
  {
    id: "RF-1038",
    customer: "Sophia Davis",
    subject: "Change notification settings",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-11-12",
  },
  {
    id: "RF-1037",
    customer: "James Wilson",
    subject: "Unable to access dashboard",
    priority: "Urgent",
    status: "Open",
    createdAt: "2026-11-11",
  },
  {
    id: "RF-1036",
    customer: "Ava Taylor",
    subject: "Request for subscription upgrade",
    priority: "Medium",
    status: "Pending",
    createdAt: "2026-11-10",
  },
  {
    id: "RF-1035",
    customer: "William Anderson",
    subject: "Invoice download issue",
    priority: "Low",
    status: "Open",
    createdAt: "2026-11-09",
  },
  {
    id: "RF-1034",
    customer: "Mia Thomas",
    subject: "Account temporarily locked",
    priority: "High",
    status: "Resolved",
    createdAt: "2026-11-08",
  },
  {
    id: "RF-1033",
    customer: "Benjamin Moore",
    subject: "Unable to change email address",
    priority: "Medium",
    status: "Pending",
    createdAt: "2026-11-07",
  },
];

function Inbox() {
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
          <TicketFilter selectedPriority={selectedPriority} handlePriority={setSelectedPriority} selectedStatus={selectedStatus} handleStatus={setSelectedStatus} sortOrder={sortOrder} handleSort={setSortOrder}/>
        </div>
      </div>
      <TicketTable tickets={sortedTickets} />
    </main>
  );
}

export default Inbox;
