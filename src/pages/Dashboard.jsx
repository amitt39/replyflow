import DashboardStats from "../components/dashboard/DashboardStats.jsx";
import RecentTickets from "../components/dashboard/RecentTickets.jsx";
import TicketPriorityChart from "../components/dashboard/TicketPriorityChart.jsx";
import TicketVolumeChart from "../components/dashboard/TicketVolumeChart.jsx";

function Dashboard() {
  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        Dashboard
      </h1>
      <DashboardStats />
      <TicketVolumeChart />
      <TicketPriorityChart />
      <RecentTickets />
    </main>
  );
}

export default Dashboard;
