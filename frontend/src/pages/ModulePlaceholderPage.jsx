import { ArrowLeft, ArrowUpRight, Boxes, CircleCheck, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModulePlaceholderPage({ title, description, phase, icon: Icon = Boxes, capabilities = [] }) {
  return (
    <section className="module-page">
      <div className="page-eyebrow"><span className="eyebrow-mark"><Icon size={13} /></span> WASTEWISE CLOUD MODULE</div>
      <div className="module-card">
        <div className="module-icon"><Icon size={26} /></div>
        <span className="module-phase"><LockKeyhole size={13} /> PLANNED · {phase}</span>
        <h1>{title}</h1>
        <p className="module-description">{description}</p>
        {capabilities.length > 0 && (
          <div className="module-capability-list">
            {capabilities.map((capability) => (
              <div key={capability}><CircleCheck size={16} /><span>{capability}</span></div>
            ))}
          </div>
        )}
        <div className="module-note"><strong>This section isn’t active yet.</strong> It’s scheduled for {phase}. This dashboard currently runs in local demo mode with simulated data.</div>
        <Link to="/" className="button button-primary module-back"><ArrowLeft size={16} /> Back to overview</Link>
      </div>
      <Link to="/" className="module-home-link">Return to dashboard <ArrowUpRight size={14} /></Link>
    </section>
  );
}
