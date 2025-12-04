// src/App.jsx
import { useState } from 'react'; // 1. Import useState
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DaftarPengguna from './pages/DaftarPengguna.jsx';
import RegistrasiPengguna from './pages/RegistrasiPengguna.jsx';
import ProfilePengguna from './pages/ProfilePengguna.jsx';
import './App.css';

function App() {
  // 2. Buat state untuk Sidebar Mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fungsi untuk buka/tutup sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
      <div className="app-container">
        {/* 3. Kirim fungsi toggle ke Header */}
        <Header onToggleSidebar={toggleSidebar} />
        
        <div className="main-layout">
          {/* 4. Kirim status isOpen ke Sidebar (kita bungkus div agar mudah diatur CSS-nya) */}
          <div className={`sidebar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
             <Sidebar />
             {/* Overlay hitam transparan untuk menutup sidebar saat diklik di luar */}
             <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
          </div>
          
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/daftar-pengguna" element={<DaftarPengguna />} />
              <Route path="/registrasi-pengguna" element={<RegistrasiPengguna />} />
              <Route path="/profil/:userId" element={<ProfilePengguna />} />
            </Routes>
          </main>
        </div>

        <footer className="app-footer">
          LLDIKTI Wilayah 9 © 2015 - 2026 All rights reserved.
        </footer>
      </div>
  );
}

export default App;