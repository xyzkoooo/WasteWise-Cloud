import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-shell">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-shell">
        <Topbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="page-content">
          <Outlet context={{ searchTerm }} />
        </main>
      </div>
    </div>
  );
}
