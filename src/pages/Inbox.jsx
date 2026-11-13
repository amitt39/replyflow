import { useState } from "react";
import TicketTable from "../components/tickets/TicketTable";

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
      (ticket.priority === selectedPriority || selectedPriority === "All Priorities") &&
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
          <label className="relative min-w-0 lg:col-span-3">
            <span className="sr-only">Search tickets</span>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              type="text"
              value={filteredText}
              placeholder="Search by ticket ID, customer, or subject..."
              onChange={(e) => {
                setFilterdText(e.target.value);
              }}
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-subgrid">
            <div className="relative">
              <select
                name="priority"
                value={selectedPriority}
                onChange={(e) => {
                  setSelectedPriority(e.target.value);
                }}
                className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="All Priorities">All Priorities</option>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="relative">
              <select
                name="status"
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                }}
                className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="All Statuses">All Statuses</option>
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="relative">
              <select
                name=""
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                }}
                className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
      </div>
      </div>
      <TicketTable tickets={sortedTickets} />
    </main>
  );
}

export default Inbox;
