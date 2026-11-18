export const binStatusData = [
  { name: 'Normal', value: 72, color: '#33866b' },
  { name: 'Warning', value: 37, color: '#e5a545' },
  { name: 'Critical', value: 19, color: '#e16d61' },
];

export const weeklyWasteData = [
  { label: 'Mon', collected: 3.8, target: 4.2 },
  { label: 'Tue', collected: 4.6, target: 4.3 },
  { label: 'Wed', collected: 4.1, target: 4.5 },
  { label: 'Thu', collected: 5.2, target: 4.6 },
  { label: 'Fri', collected: 4.7, target: 4.8 },
  { label: 'Sat', collected: 5.5, target: 5.0 },
  { label: 'Sun', collected: 4.8, target: 4.7 },
];

export const monthlyWasteData = [
  { label: 'May 1', collected: 3.9, target: 4.2 },
  { label: 'May 5', collected: 4.5, target: 4.4 },
  { label: 'May 9', collected: 4.2, target: 4.5 },
  { label: 'May 13', collected: 5.1, target: 4.7 },
  { label: 'May 17', collected: 4.7, target: 4.8 },
  { label: 'May 21', collected: 5.4, target: 5.0 },
  { label: 'May 25', collected: 4.9, target: 5.1 },
  { label: 'May 29', collected: 5.8, target: 5.3 },
];

export const alerts = [
  {
    id: 'ALT-2048',
    binId: 'BIN-042',
    area: 'Riverside Park',
    level: 94,
    kind: 'Critical fill level',
    priority: 'High',
    age: '4 min ago',
    icon: 'critical',
  },
  {
    id: 'ALT-2047',
    binId: 'BIN-108',
    area: 'Market Street',
    level: 76,
    kind: 'Approaching capacity',
    priority: 'Medium',
    age: '18 min ago',
    icon: 'warning',
  },
  {
    id: 'ALT-2046',
    binId: 'BIN-031',
    area: 'North Station',
    level: 88,
    kind: 'Predicted overflow · 3h',
    priority: 'High',
    age: '32 min ago',
    icon: 'prediction',
  },
];

export const collections = [
  {
    id: 'COL-8012',
    area: 'Riverside & Old Town',
    vehicle: 'Truck 04',
    crew: 'Team A · 2 members',
    time: '09:42 AM',
    weight: '642 kg',
    status: 'Completed',
    color: 'green',
  },
  {
    id: 'COL-8011',
    area: 'Market District',
    vehicle: 'Truck 02',
    crew: 'Team C · 3 members',
    time: '09:18 AM',
    weight: '—',
    status: 'In progress',
    color: 'blue',
  },
  {
    id: 'COL-8010',
    area: 'North Station',
    vehicle: 'Truck 07',
    crew: 'Team B · 2 members',
    time: '08:56 AM',
    weight: '518 kg',
    status: 'Completed',
    color: 'green',
  },
];

export const dashboardStats = [
  { label: 'Total smart bins', value: '128', change: '+8.2%', hint: 'vs. last month', icon: 'bins', tone: 'green' },
  { label: 'Critical bins', value: '19', change: '−3 today', hint: 'needs attention', icon: 'critical', tone: 'coral' },
  { label: 'Predicted overflow', value: '08', change: 'next 6 hours', hint: 'AI forecast', icon: 'prediction', tone: 'amber' },
  { label: 'Waste collected', value: '4.8 t', change: '+12.4%', hint: 'vs. daily average', icon: 'weight', tone: 'blue' },
];
