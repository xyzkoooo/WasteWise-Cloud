import { Bell, ChevronDown, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Topbar({ searchTerm, onSearchChange, onMenuClick }) {
  const dateLabel = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date());

  return (
    <header className="topbar">
      <button type="button" className="mobile-menu icon-button" aria-label="Open navigation" onClick={onMenuClick}>
        <Menu size={21} />
      </button>
      <div className="topbar-date"><span className="date-dot" />{dateLabel}</div>
      <label className="global-search">
        <Search size={17} />
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search recent alerts…"
          aria-label="Search recent alerts"
        />
        <kbd>⌘ K</kbd>
      </label>
      <div className="topbar-actions">
        <Link to="/alerts" className="icon-button notification-button" aria-label="Open alert center">
          <Bell size={19} strokeWidth={1.8} />
          <span className="notification-dot" />
        </Link>
        <span className="topbar-divider" />
        <Link to="/settings" className="profile-button" aria-label="Open admin settings">
          <span className="profile-avatar">AO</span>
          <span className="profile-copy"><strong>Admin</strong><small>Operations</small></span>
          <ChevronDown size={15} />
        </Link>
      </div>
    </header>
  );
}
