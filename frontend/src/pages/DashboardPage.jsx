import { Download, Leaf, Plus, TrendingUp } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';
import AlertList from '../components/AlertList.jsx';
import BinStatusChart from '../components/BinStatusChart.jsx';
import CollectionActivity from '../components/CollectionActivity.jsx';
import MetricCard from '../components/MetricCard.jsx';
import WasteTrendChart from '../components/WasteTrendChart.jsx';
import { dashboardStats } from '../data/dashboardData.js';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function exportDashboardSnapshot() {
  const rows = [
    ['WasteWise Cloud dashboard snapshot', new Date().toLocaleString()],
    ['Dataset', 'Simulated demo data'],
    [],
    ['Metric', 'Value', 'Change'],
    ...dashboardStats.map((item) => [item.label, item.value, item.change]),
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const file = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(file);
  const anchor = document.createElement('a');
  anchor.href = downloadUrl;
  anchor.download = `wastewise-dashboard-${new Date().toISOString().slice(0, 10)}.csv`;
  anchor.click();
  URL.revokeObjectURL(downloadUrl);
}

export default function DashboardPage() {
  const { searchTerm = '' } = useOutletContext() ?? {};

  return (
    <div className="dashboard-page">
      <section className="welcome-row">
        <div>
          <div className="page-eyebrow"><span className="eyebrow-mark"><Leaf size={13} /></span> CITY OPERATIONS OVERVIEW</div>
          <h1>{getGreeting()}, Alex <span className="wave-hand">✳</span></h1>
          <p>Here’s what’s happening across Metro City today.</p>
        </div>
        <div className="welcome-actions">
          <button type="button" className="button button-secondary" onClick={exportDashboardSnapshot}>
            <Download size={16} /> Export snapshot
          </button>
          <Link to="/collections" className="button button-primary"><Plus size={17} /> Plan collection</Link>
        </div>
      </section>

      <section className="overview-banner" aria-label="Dashboard data notice">
        <div className="overview-banner-icon"><TrendingUp size={17} /></div>
        <span><strong>Today’s collection efficiency is 92.4%</strong><span className="banner-separator">·</span> up 3.1% from last week</span>
        <span className="banner-right">Sample operations data <i /></span>
      </section>

      <section className="metric-grid" aria-label="Key waste collection statistics">
        {dashboardStats.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </section>

      <section className="visualization-grid" aria-label="Waste and bin charts">
        <WasteTrendChart />
        <BinStatusChart />
      </section>

      <section className="details-grid" aria-label="Alerts and collections">
        <AlertList searchTerm={searchTerm} />
        <CollectionActivity />
      </section>

      <footer className="dashboard-footer">
        <span>WasteWise Cloud <b>·</b> Dashboard overview</span>
        <span>All figures shown are simulated for demonstration</span>
      </footer>
    </div>
  );
}
