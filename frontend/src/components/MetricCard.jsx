import { Activity, ArrowDownRight, ArrowUpRight, Sparkles, Trash2, TriangleAlert, Weight } from 'lucide-react';

const metricIcons = {
  bins: Trash2,
  critical: TriangleAlert,
  prediction: Sparkles,
  weight: Weight,
};

export default function MetricCard({ metric }) {
  const Icon = metricIcons[metric.icon] ?? Activity;
  const isPositive = metric.change.startsWith('+');
  const isNeutral = metric.change.startsWith('next') || metric.change.includes('today');
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <article className="metric-card">
      <div className={`metric-icon metric-icon-${metric.tone}`}><Icon size={19} strokeWidth={1.9} /></div>
      <div className="metric-label-row">
        <p>{metric.label}</p>
        <span className="metric-menu-dots" aria-hidden="true">···</span>
      </div>
      <div className="metric-value-row">
        <strong className="metric-value">{metric.value}</strong>
        <span className={`metric-change ${isNeutral ? 'change-neutral' : isPositive ? 'change-positive' : 'change-negative'}`}>
          {!isNeutral && <TrendIcon size={13} />}{metric.change}
        </span>
      </div>
      <span className="metric-hint">{metric.hint}</span>
    </article>
  );
}
