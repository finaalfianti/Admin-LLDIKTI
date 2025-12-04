// src/components/Sidebar.jsx
import { useState } from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { FiChevronRight} from 'react-icons/fi'; 

function Sidebar() {
  const [isManajemenOpen, setIsManajemenOpen] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          {/* 1. Link Dashboard (Tidak berubah) */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : styles.navItem)}
            >
              Dashboard
            </NavLink>
          </li>
          
          {/* 2. KEMBALIKAN KE LI (HAPUS <div> pembungkus) */}
          <li 
            className={styles.submenuToggle} // Ini adalah <li>
            onClick={() => setIsManajemenOpen(!isManajemenOpen)}
          >
            <span>Manajemen Pengguna</span>
            {/* Ganti ikon panah kanan ke panah bawah */}
            <FiChevronRight className={isManajemenOpen ? styles.arrowOpen : ""} />
          </li>

          {/* 3. Submenu (Tidak berubah) */}
          {isManajemenOpen && (
            <ul className={styles.submenu}>
              <li>
                <NavLink
                  to="/registrasi-pengguna"
                  className={({ isActive }) => (isActive ? styles.active : styles.navItem)}
                >
                  Registrasi Pengguna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/daftar-pengguna"
                  className={({ isActive }) => (isActive ? styles.active : styles.navItem)}
                >
                  Daftar Pengguna
                </NavLink>
              </li>
            </ul>
          )}

          {/* 4. Link Aplikasi (Tidak berubah) */}
          <li className={styles.navItem}>
            <span>Manajemen Aplikasi</span>
            <FiChevronRight />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;