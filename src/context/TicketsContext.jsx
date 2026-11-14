import { useState, createContext, useEffect } from "react";
import { tickets as initialTickets } from "../data/tickets";

export const TicketsContext = createContext(null);

export default function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState(() => {
    const savedTickets = localStorage.getItem("tickets");

    return savedTickets ? JSON.parse(savedTickets) : initialTickets;
  });
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);
  return (
    <TicketsContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketsContext.Provider>
  );
}
