import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', to: '/', icon: '▦' },
  { label: 'Inbox', to: '/inbox', icon: '▤' },
  { label: 'Customers', to: '/customers', icon: '♙' },
  { label: 'Settings', to: '/settings', icon: '⚙' },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">R</div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">ReplyFlow</span>
        </div>
        <button type="button" onClick={onClose} className="ml-auto rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" aria-label="Close navigation menu">×</button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-6" aria-label="Primary navigation">
        {navigation.map(({ label, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <span className="w-5 text-center text-base" aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">AS</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-900">Amit Sonagra</p>
            <p className="truncate text-xs text-slate-500">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
