import { useEffect, useRef } from "react";

export default function ConversationMessages({ ticket }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ticket.messages]);
  return (
    <>
      {/* covo box header */}
      <div className="flex flex-none items-center justify-between border-b border-slate-100 px-4 py-1.5 sm:px-5">
        <div>
          <h2
            id="conversation-title"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            Conversation
          </h2>
          <p className="text-[11px] text-slate-500">
            {ticket.messages.length} messages
          </p>
        </div>
        <span className="hidden text-xs font-medium text-slate-400 sm:block">
          Ticket {ticket.id}
        </span>
      </div>

      {/* convo */}
      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto bg-slate-50/60 px-4 py-3 sm:px-8 sm:py-4">
        {ticket.messages.map((message) => {
          const isNote = message.type === "note";
          const isCustomer = message.sender === ticket.customer;

          if (isNote) {
            return (
              <article
                key={message.id}
                className="mx-auto max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-3 py-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                    Internal Note
                  </p>
                  <time
                    dateTime={message.createdAt}
                    className="text-xs text-amber-700"
                  >
                    {new Date(message.createdAt).toLocaleString()}
                  </time>
                </div>
                <p className="mt-1 text-sm leading-5 text-amber-900 whitespace-pre-wrap">
                  {message.message}
                </p>
                <p className="mt-1 text-xs font-medium text-amber-700">
                  {message.sender}
                </p>
              </article>
            );
          }

          return (
            <article
              key={message.id}
              className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[92%] sm:max-w-[78%] ${isCustomer ? "items-start" : "items-end"}`}
              >
                <div
                  className={`mb-1 flex items-center gap-2 ${isCustomer ? "justify-start" : "justify-end"}`}
                >
                  <p className="text-xs font-semibold text-slate-700">
                    {message.sender}
                  </p>
                  <time
                    dateTime={message.createdAt}
                    className="text-xs text-slate-400"
                  >
                    {new Date(message.createdAt).toLocaleString()}
                  </time>
                </div>
                <div
                  className={`whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-6 ${isCustomer ? "rounded-tl-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200" : "rounded-tr-md bg-indigo-600 text-white"}`}
                >
                  {message.message}
                </div>
              </div>
            </article>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
}
