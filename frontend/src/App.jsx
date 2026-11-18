import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Activity, Bell, ChartNoAxesCombined, ClipboardList, MapPinned, Settings2, Sparkles, Trash2 } from 'lucide-react';
import AppLayout from './layouts/AppLayout.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ModulePlaceholderPage from './pages/ModulePlaceholderPage.jsx';

const plannedModules = [
  { path: 'bins', title: 'Smart bin monitoring', description: 'Browse the city’s simulated smart-bin network, inspect fill levels, and generate new sensor readings.', phase: 'Phase 3', icon: Trash2, capabilities: ['Search and filter bins by status', 'View bin locations and recent readings', 'Simulate new fill-level observations'] },
  { path: 'predictions', title: 'AI overflow predictions', description: 'Explore model-generated six-hour fill forecasts and see which bins may need collection first.', phase: 'Phase 5', icon: Sparkles, capabilities: ['Random Forest regression forecasts', 'Model quality metrics and evaluation', 'Overflow risk ranking by time horizon'] },
  { path: 'routes', title: 'Collection route planner', description: 'Prioritize bins for pickup and view a collection sequence using simulated road-distance estimates.', phase: 'Phase 6', icon: MapPinned, capabilities: ['Map bins using OpenStreetMap', 'Prioritize critical and predicted-full bins', 'Compare approximate route distance'] },
  { path: 'collections', title: 'Collection management', description: 'Review collection activity and prepare vehicle scheduling, assignment, and pickup tracking.', phase: 'Phase 7', icon: ClipboardList, capabilities: ['Schedule and assign collection vehicles', 'Track in-progress and completed pickups', 'Review collection history and totals'] },
  { path: 'analytics', title: 'Operations analytics', description: 'Understand waste generation, bin filling patterns, overflow risk, and collection efficiency over time.', phase: 'Phase 7', icon: Activity, capabilities: ['Daily, weekly, and monthly trends', 'Area-level waste comparisons', 'Collection and overflow indicators'] },
  { path: 'alerts', title: 'Alert center', description: 'Review simulated capacity warnings and prediction-based alerts for bins that need attention.', phase: 'Phase 7', icon: Bell, capabilities: ['Critical and warning fill alerts', 'Predicted overflow notifications', 'Alert priority and status tracking'] },
  { path: 'settings', title: 'Workspace settings', description: 'Configure local demo preferences and, in a later phase, secure administrator and cloud settings.', phase: 'Phase 8', icon: Settings2, capabilities: ['Local mock-mode configuration', 'Role-based administrator access', 'AWS configuration remains backend-only'] },
  { path: 'guide', title: 'Project guide', description: 'Explore the project architecture, local development workflow, and planned implementation phases.', phase: 'Phase 10', icon: ChartNoAxesCombined, capabilities: ['System architecture and data flow', 'Testing and deployment guides', 'Final-year report outline'] },
];

function MissingPage() {
  return <ModulePlaceholderPage title="Page not found" description="That page isn’t part of the current demo." phase="upcoming phases" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          {plannedModules.map(({ path, ...module }) => (
            <Route key={path} path={path} element={<ModulePlaceholderPage {...module} />} />
          ))}
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
