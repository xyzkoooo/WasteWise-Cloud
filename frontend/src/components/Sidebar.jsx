import { NavLink } from 'react-router-dom';
import {
  Activity,
  Bell,
  ChartNoAxesCombined,
  ChevronLeft,
  CircleHelp,
  ClipboardList,
  Leaf,
  MapPinned,
  Settings2,
  Sparkles,
  Trash2,
} from 'lucide-react';

const primaryLinks = [
  { to: '/', label: 'Overview', icon: ChartNoAxesCombined, end: true },
  { to: '/bins', label: 'Smart bins', icon: Trash2, badge: '128' },
  { to: '/predictions', label: 'AI predictions', icon: Sparkles, badge: '8', badgeTone: 'amber' },
  { to: '/routes', label: 'Route planner', icon: MapPinned },
];

const operationLinks = [
  { to: '/collections', label: 'Collections', icon: ClipboardList },
  { to: '/analytics', label: 'Analytics', icon: Activity },
  { to: '/alerts', label: 'Alert center', icon: Bell, badge: '5', badgeTone: 'coral' },
];

function NavigationGroup({ title, links, onNavigate }) {
  return (
    <div className="nav-group">
      <p className="nav-group-title">{title}</p>
      {links.map(({ to, label, icon: Icon, badge, badgeTone, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
        >
          <Icon size={18} strokeWidth={1.8} />
          <span>{label}</span>
          {badge && <span className={`nav-badge ${badgeTone ?? ''}`}>{badge}</span>}
        </NavLink>
      ))}
    </div>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <button
        type="button"
        className={`sidebar-scrim${isOpen ? ' is-visible' : ''}`}
        aria-label="Close navigation"
        onClick={onClose}
      />
      <aside className={`sidebar${isOpen ? ' is-open' : ''}`}>
        <div className="brand-row">
          <div className="brand-mark"><Leaf size={22} strokeWidth={2.2} /></div>
          <div className="brand-name">wastewise<span>cloud</span></div>
          <button type="button" className="sidebar-close icon-button" aria-label="Close navigation" onClick={onClose}>
            <ChevronLeft size={19} />
          </button>
        </div>

        <div className="workspace-switcher">
          <div className="workspace-avatar">MC</div>
          <div className="workspace-copy">
            <span className="workspace-label">WORKSPACE</span>
            <strong>Metro City</strong>
          </div>
          <span className="workspace-dot" aria-label="Demo mode" title="Demo mode" />
        </div>

        <nav className="sidebar-navigation" aria-label="Main navigation">
          <NavigationGroup title="Workspace" links={primaryLinks} onNavigate={onClose} />
          <NavigationGroup title="Operations" links={operationLinks} onNavigate={onClose} />
        </nav>

        <div className="sidebar-bottom">
          <NavLink to="/settings" onClick={onClose} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
            <Settings2 size={18} strokeWidth={1.8} />
            <span>Settings</span>
          </NavLink>
          <div className="sidebar-help-card">
            <div className="help-card-icon"><CircleHelp size={17} /></div>
            <div>
              <strong>Need a hand?</strong>
              <span>Visit the project guide</span>
            </div>
            <span className="help-arrow">↗</span>
          </div>
          <div className="sidebar-version">WASTEWISE CLOUD <span>·</span> DEMO 0.1</div>
        </div>
      </aside>
    </>
  );
}
