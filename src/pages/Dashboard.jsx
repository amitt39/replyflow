import DashboardStats from '../components/dashboard/DashboardStats.jsx'
import TicketVolumeChart from '../components/dashboard/TicketVolumeChart.jsx'

function Dashboard() {
  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
      <DashboardStats />
      <TicketVolumeChart />
    </main>
  )
}

export default Dashboard
