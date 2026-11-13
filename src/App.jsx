import { Route, Routes } from 'react-router-dom'
import Customers from './pages/Customers.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Inbox from './pages/Inbox.jsx'
import Settings from './pages/Settings.jsx'
import TicketDetails from './pages/TicketDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/tickets/" element={<TicketDetails />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App;
