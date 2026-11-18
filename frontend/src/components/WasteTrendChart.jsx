import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { monthlyWasteData, weeklyWasteData } from '../data/dashboardData.js';

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      {payload.map((item) => (
        <span key={item.dataKey}>
          <i style={{ backgroundColor: item.color }} />
          {item.name}: <b>{item.value.toFixed(1)} t</b>
        </span>
      ))}
    </div>
  );
}

export default function WasteTrendChart() {
  const [period, setPeriod] = useState('7d');
  const data = period === '7d' ? weeklyWasteData : monthlyWasteData;

  return (
    <section className="panel trend-panel">
      <div className="panel-heading chart-heading">
        <div>
          <div className="heading-title-row">
            <h2>Waste collection</h2>
            <span className="demo-chip">SIMULATED</span>
          </div>
          <p>Collected waste compared with daily target</p>
        </div>
        <div className="segmented-control" role="group" aria-label="Chart date range">
          <button type="button" className={period === '7d' ? 'selected' : ''} onClick={() => setPeriod('7d')}>7 days</button>
          <button type="button" className={period === '30d' ? 'selected' : ''} onClick={() => setPeriod('30d')}>30 days</button>
        </div>
      </div>
      <div className="chart-legend">
        <span><i className="legend-dot collected-dot" />Collected</span>
        <span><i className="legend-dot target-dot" />Target</span>
        <strong>4.8 <small>tons today</small></strong>
      </div>
      <div className="trend-chart" role="img" aria-label={`Waste collection chart for the last ${period === '7d' ? '7' : '30'} days`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 12, right: 7, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="collectedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c8263" stopOpacity={0.17} />
                <stop offset="95%" stopColor="#2c8263" stopOpacity={0.015} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#eef1ee" strokeDasharray="4 5" />
            <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#96a099', fontSize: 11 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#96a099', fontSize: 11 }} tickFormatter={(value) => `${value}t`} />
            <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#cbd6cf', strokeDasharray: '4 4' }} />
            <Area type="monotone" dataKey="target" name="Target" stroke="#c5cec8" strokeWidth={2} strokeDasharray="5 5" fill="transparent" activeDot={false} />
            <Area type="monotone" dataKey="collected" name="Collected" stroke="#2c8263" strokeWidth={2.6} fill="url(#collectedFill)" activeDot={{ r: 4, strokeWidth: 2, fill: '#fff' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-footnote"><span className="chart-live-dot" />Updated 6 minutes ago <span>·</span> Demo dataset</div>
    </section>
  );
}
