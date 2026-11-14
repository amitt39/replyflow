import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout.jsx";
import Customers from "./pages/Customers.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inbox from "./pages/Inbox.jsx";
import Settings from "./pages/Settings.jsx";
import TicketDetails from "./pages/TicketDetails.jsx";
import CustomerDetails from "./pages/CustomerDetails.jsx";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/tickets" element={<TicketDetails />} />
        <Route path="/tickets/:id" element={<TicketDetails />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:name" element={<CustomerDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
