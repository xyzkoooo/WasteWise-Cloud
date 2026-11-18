import { AlertTriangle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { alerts } from '../data/dashboardData.js';

const alertIcons = {
  critical: AlertTriangle,
  warning: AlertTriangle,
  prediction: Sparkles,
};

export default function AlertList({ searchTerm = '' }) {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleAlerts = alerts.filter((alert) =>
    `${alert.id} ${alert.binId} ${alert.area} ${alert.kind}`.toLowerCase().includes(normalizedSearch),
  );

  return (
    <section className="panel alerts-panel">
      <div className="panel-heading">
        <div>
          <div className="heading-title-row">
            <h2>Recent alerts</h2>
            <span className="alert-count">{alerts.length}</span>
          </div>
          <p>Bins that may need attention</p>
        </div>
        <Link to="/alerts" className="text-link">View all <ArrowUpRight size={14} /></Link>
      </div>
      <div className="alert-list">
        {visibleAlerts.length ? visibleAlerts.map((alert) => {
          const Icon = alertIcons[alert.icon];
          return (
            <article className="alert-row" key={alert.id}>
              <div className={`alert-icon alert-icon-${alert.icon}`}><Icon size={17} strokeWidth={2} /></div>
              <div className="alert-main">
                <div className="alert-title-line"><strong>{alert.kind}</strong><span className={`priority priority-${alert.priority.toLowerCase()}`}>{alert.priority}</span></div>
                <p>{alert.binId} <span>·</span> {alert.area}</p>
              </div>
              <div className="alert-meta"><strong>{alert.level}%</strong><span>{alert.age}</span></div>
            </article>
          );
        }) : (
          <div className="inline-empty-state">
            <div className="empty-search-icon"><ArrowUpRight size={17} /></div>
            <strong>No matching alerts</strong>
            <span>Try another bin ID or area name.</span>
          </div>
        )}
      </div>
      <div className="alerts-footer"><span className="footer-status-dot" />All sample alerts are up to date</div>
    </section>
  );
}
