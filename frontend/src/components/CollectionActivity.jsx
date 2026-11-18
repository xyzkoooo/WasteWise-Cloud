import { ArrowUpRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collections } from '../data/dashboardData.js';

export default function CollectionActivity() {
  return (
    <section className="panel activity-panel">
      <div className="panel-heading">
        <div>
          <div className="heading-title-row">
            <h2>Collection activity</h2>
            <span className="demo-chip">TODAY</span>
          </div>
          <p>Latest pickup operations across the city</p>
        </div>
        <Link to="/collections" className="text-link">View schedule <ArrowUpRight size={14} /></Link>
      </div>
      <div className="activity-table-wrap">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Collection</th>
              <th>Area</th>
              <th>Vehicle & crew</th>
              <th>Time</th>
              <th>Waste</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr key={collection.id}>
                <td><Link to="/collections" className="collection-id">{collection.id}</Link></td>
                <td><span className="collection-area">{collection.area}</span></td>
                <td>
                  <div className="vehicle-cell">
                    <span className="vehicle-icon"><Truck size={15} /></span>
                    <span><strong>{collection.vehicle}</strong><small>{collection.crew}</small></span>
                  </div>
                </td>
                <td className="time-cell">{collection.time}</td>
                <td className="weight-cell">{collection.weight}</td>
                <td><span className={`collection-status status-${collection.color}`}><i />{collection.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="activity-mobile-list">
        {collections.map((collection) => (
          <Link to="/collections" className="mobile-collection-row" key={collection.id}>
            <span className="vehicle-icon"><Truck size={15} /></span>
            <span className="mobile-collection-copy"><strong>{collection.area}</strong><small>{collection.id} · {collection.vehicle} · {collection.time}</small></span>
            <span className={`collection-status status-${collection.color}`}><i />{collection.status}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
