import { useNavigate } from "react-router-dom";

export default function TicketTable({ tickets }) {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full table-fixed text-left text-sm">
          <colgroup>
            <col className="w-[12%]" />
            <col className="w-[17%]" />
            <col className="w-[30%]" />
            <col className="w-[12%]" />
            <col className="w-[13%]" />
            <col className="w-[16%]" />
          </colgroup>
          <caption className="sr-only">Support tickets</caption>
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Ticket ID
              </th>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Customer
              </th>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Subject
              </th>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Priority
              </th>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Status
              </th>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  onClick={() => navigate(`/tickets/${ticket.id}`)}
                  className="border-b border-slate-100 text-slate-600 transition-colors last:border-b-0 hover:bg-slate-50 cursor-pointer"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-900 sm:px-6">
                    {ticket.id}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 sm:px-6">
                    {ticket.customer}
                  </td>
                  <td className="px-5 py-4 text-slate-700 sm:px-6">
                    {ticket.subject}
                  </td>
                  <td className="px-5 py-4 sm:px-6">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.priority === "Urgent" ? "bg-red-50 text-red-700" : ticket.priority === "High" ? "bg-orange-50 text-orange-700" : ticket.priority === "Medium" ? "bg-yellow-50 text-yellow-700" : "bg-green-50 text-green-700"}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4 sm:px-6">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.status === "Open" ? "bg-blue-50 text-blue-700" : ticket.status === "Pending" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-slate-500 sm:px-6">
                    {ticket.createdAt}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-sm text-slate-500"
                >
                  No tickets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
