import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Dashboard',
  '/inbox': 'Inbox',
  '/tickets/': 'Ticket details',
  '/customers': 'Customers',
  '/settings': 'Settings',
}

function Header({ onMenuClick }) {
  const { pathname } = useLocation()
  const title = pathname.startsWith('/tickets/') ? 'Ticket Details' : pageTitles[pathname] ?? 'ReplyFlow'

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:hidden"
          aria-label="Open navigation menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <label className="relative hidden sm:block">
          <span className="sr-only">Search</span>
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="h-10 w-44 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white sm:w-56"
          />
        </label>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700" aria-label="User avatar">
          AS
        </div>
      </div>
    </header>
  )
}

export default Header
