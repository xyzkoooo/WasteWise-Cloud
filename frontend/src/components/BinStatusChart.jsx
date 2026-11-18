import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { binStatusData } from '../data/dashboardData.js';

function StatusTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { name, value, payload: item } = payload[0];
  return (
    <div className="chart-tooltip status-tooltip">
      <span><i style={{ backgroundColor: item.color }} />{name}</span>
      <b>{value} bins</b>
    </div>
  );
}

export default function BinStatusChart() {
  const total = binStatusData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="panel status-panel">
      <div className="panel-heading">
        <div>
          <div className="heading-title-row">
            <h2>Bin status</h2>
            <span className="demo-chip">LIVE DEMO</span>
          </div>
          <p>Filling level distribution</p>
        </div>
        <button type="button" className="more-button" aria-label="Bin status chart information" title="Simulated bin readings">···</button>
      </div>
      <div className="status-chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={binStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={66}
              outerRadius={88}
              paddingAngle={4}
              cornerRadius={5}
              stroke="none"
            />
            <Tooltip content={<StatusTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-total"><strong>{total}</strong><span>total bins</span></div>
      </div>
      <div className="status-legend">
        {binStatusData.map((item) => (
          <div className="status-legend-row" key={item.name}>
            <span className="status-name"><i style={{ backgroundColor: item.color }} />{item.name}</span>
            <strong>{item.value}</strong>
            <span className="status-percent">{Math.round((item.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
