import { useState, createContext } from "react";
import { tickets as initialTickets } from "../data/tickets";

export const TicketsContext = createContext(null);

export default function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState(initialTickets);
  return (
    <TicketsContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketsContext.Provider>
  );
}
