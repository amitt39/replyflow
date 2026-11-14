import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";
import TicketHeader from "../components/tickets/ticketDetails/TicketHeader";
import Conversation from "../components/tickets/ticketDetails/Conversation";

function TicketDetails() {
  const { id } = useParams();
  const { tickets, setTickets } = useContext(TicketsContext);
  const ticket = tickets.find((ticket) => ticket.id === id);
  const [replyText, setReplyText] = useState("");
  const [isReplyMode, setIsReplyMode] = useState(true);

  function handleReplyText(replyTextValue) {
    setReplyText(replyTextValue);
  }

  function handleSend() {
    if (!replyText.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "Support Agent",
      message: replyText.trim(),
      createdAt: new Date().toISOString(),
      type: isReplyMode ? "reply" : "note",
    };
    const updatedTicket = {
      ...ticket,
      messages: [...ticket.messages, newMessage],
    };
    setTickets((previousTickets) => {
      return previousTickets.map((item) => {
        if (item.id === updatedTicket.id) {
          return updatedTicket;
        } else {
          return item;
        }
      });
    });
    setReplyText("");
  }

  function handleStatusChange(newStatus) {
    setTickets((previousTickets) =>
      previousTickets.map((item) =>
        item.id === ticket.id ? { ...item, status: newStatus } : item,
      ),
    );
  }
  function handlePriorityChange(newPriority) {
    setTickets((previousTickets) =>
      previousTickets.map((item) =>
        item.id === ticket.id ? { ...item, priority: newPriority } : item,
      ),
    );
  }

  if (!ticket) {
    return (
      <div className="flex min-h-80 items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-500">Ticket not found.</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-7rem)] flex-col gap-4 lg:h-[calc(100vh-9rem)] lg:min-h-0">
      <TicketHeader
        ticket={ticket}
        handleStatusChange={handleStatusChange}
        handlePriorityChange={handlePriorityChange}
      />
      <Conversation
        ticket={ticket}
        isReplyMode={isReplyMode}
        handleSend={handleSend}
        replyText={replyText}
        setIsReplyMode={setIsReplyMode}
        handleReplyText={handleReplyText}
      />
    </main>
  );
}

export default TicketDetails;
