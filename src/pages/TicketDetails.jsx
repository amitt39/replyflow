import { useParams } from "react-router-dom";
import { tickets } from "../data/tickets";

function TicketDetails() {
  const { id } = useParams();
  const ticket = tickets.find((ticket) => ticket.id === id);

  if (!ticket) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-500">Ticket not found.</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-7rem)] flex-col gap-4 lg:h-[calc(100vh-9rem)] lg:min-h-0">
      <section className="flex-none rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 lg:flex-1">
            <p className="text-sm font-medium text-indigo-600">{ticket.id}</p>
            <h1 className="mt-0.5 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{ticket.subject}</h1>
          </div>
          <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 lg:order-last">
            Created {ticket.createdAt}
          </span>
          <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:mt-0">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Customer</dt>
            <dd className="mt-1 text-sm font-medium text-slate-800">{ticket.customer}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Priority</dt>
            <dd className="mt-1">
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.priority === "Urgent" ? "bg-red-50 text-red-700" : ticket.priority === "High" ? "bg-orange-50 text-orange-700" : ticket.priority === "Medium" ? "bg-yellow-50 text-yellow-700" : "bg-green-50 text-green-700"}`}>
                {ticket.priority}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Status</dt>
            <dd className="mt-1">
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${ticket.status === "Open" ? "bg-blue-50 text-blue-700" : ticket.status === "Pending" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>
                {ticket.status}
              </span>
            </dd>
          </div>
          </dl>
        </div>
      </section>

      <section aria-labelledby="conversation-title" className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-none items-center justify-between border-b border-slate-100 px-4 py-1.5 sm:px-5">
          <div>
            <h2 id="conversation-title" className="text-sm font-semibold tracking-tight text-slate-900">Conversation</h2>
            <p className="text-[11px] text-slate-500">{ticket.messages.length} messages</p>
          </div>
          <span className="hidden text-xs font-medium text-slate-400 sm:block">Ticket {ticket.id}</span>
        </div>

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto bg-slate-50/60 px-4 py-3 sm:px-8 sm:py-4">
          {ticket.messages.map((message) => {
            const isNote = message.type === "note";
            const isCustomer = message.sender === ticket.customer;

            if (isNote) {
              return (
                <article key={message.id} className="mx-auto max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Internal Note</p>
                    <time dateTime={message.createdAt} className="text-xs text-amber-700">
                      {new Date(message.createdAt).toLocaleString()}
                    </time>
                  </div>
                  <p className="mt-1 text-sm leading-5 text-amber-900">{message.message}</p>
                  <p className="mt-1 text-xs font-medium text-amber-700">{message.sender}</p>
                </article>
              );
            }

            return (
              <article key={message.id} className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[92%] sm:max-w-[78%] ${isCustomer ? "items-start" : "items-end"}`}>
                  <div className={`mb-1 flex items-center gap-2 ${isCustomer ? "justify-start" : "justify-end"}`}>
                    <p className="text-xs font-semibold text-slate-700">{message.sender}</p>
                    <time dateTime={message.createdAt} className="text-xs text-slate-400">
                      {new Date(message.createdAt).toLocaleString()}
                    </time>
                  </div>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm leading-6 ${isCustomer ? "rounded-tl-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200" : "rounded-tr-md bg-indigo-600 text-white"}`}>
                    {message.message}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex-none border-t border-slate-200 bg-white p-3 sm:p-4">
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1">
              <button type="button" className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">Reply</button>
              <button type="button" className="rounded-md px-3 py-1 text-xs font-medium text-slate-500">Internal Note</button>
            </div>
            <button type="button" disabled className="rounded-lg bg-indigo-300 px-4 py-1.5 text-sm font-semibold text-white">
              Send
            </button>
          </div>
          <textarea
            rows="2"
            placeholder="Write a reply..."
            aria-label="Reply message"
            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm leading-5 text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </section>
    </main>
  );
}

export default TicketDetails;
