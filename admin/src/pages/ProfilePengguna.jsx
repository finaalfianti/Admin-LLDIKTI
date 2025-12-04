// src/pages/ProfilePengguna.jsx
import { useState } from 'react';
import styles from './ProfilePengguna.module.css';
import { 
  FiArrowLeft, 
  FiPlus, 
  FiSearch, 
  FiEdit
} from 'react-icons/fi';
import RoleAksesSubMenu from '../components/RoleAksesSubMenu.jsx';

// Data dummy untuk tabel role (nanti bisa dari API)
const roles = [
  { no: 1, aplikasi: 'WASPADA', role: '-', status: '-', aksi: 'Set Akses' },
  { no: 2, aplikasi: 'Sipinter', role: '-', status: '-', aksi: 'Set Akses' },
  { no: 3, aplikasi: 'ADMIN', role: '-', status: '-', aksi: 'Set Akses' },
  { no: 4, aplikasi: 'EWS LLDIKTI', role: '-', status: '-', aksi: 'Set Akses' },
  { no: 5, aplikasi: 'CRM', role: '-', status: '-', aksi: 'Set Akses' },
];

// Data dummy untuk detail info (nanti bisa dari API)
const userDetails = {
  left: [
    { label: 'Jenis Kelamin', value: 'Perempuan' },
    { label: 'Tanggal Lahir', value: '10/05/2000' },
    { label: 'Tempat Lahir', value: 'Makassar' },
    { label: 'Alamat Domisili', value: 'Jl. Bung KM.9, Kecamatan Tamalanrea Selatan, Kota Makassar' },
    { label: 'Alamat KTP', value: 'Jl. Bung KM.9, Kecamatan Tamalanrea Selatan, Kota Makassar' },
    { label: 'No. Handphone', value: '082190957038' },
    { label: 'Email', value: 'nita_unni@yahoo.co.id' },
  ],
  right: [
    { label: 'NIK', value: '123456789012345789' },
    { label: 'Profesi', value: 'Dosen' },
    { label: 'Instansi', value: 'LLDIKTI Wilayah IX' },
    { label: 'NUPTK', value: '-' },
    { label: 'NIM', value: '-' },
    { label: 'NIP', value: '-' },
    { label: 'Jenis Pengguna', value: 'Administrator' },
  ]
};

function ProfilePengguna() {
  const [view, setView] = useState('menu');

  return (
    <div className={styles.pageContainer}>
      {/* --- HEADER HALAMAN --- */}
      <div className={styles.pageHeader}>
        <button className={styles.backButton}>
          <FiArrowLeft />
        </button>
        <h2>Profile Pengguna</h2>
      </div>

      {/* --- BANNER & INFO PROFIL --- */}
      <div className={styles.profileCard}>
        <div className={styles.profileBanner}></div>
        <div className={styles.profileHeader}>
          <div className={styles.profilePicture}>
            {/*  */}
          </div>
          <div className={styles.profileName}>
            <h2>Rusnita</h2>
          </div>
          <button className={styles.editProfileButton}>
            Edit Profile
          </button>
        </div>

        {/* --- DETAIL INFO GRID --- */}
        <div className={styles.detailsGrid}>
          {/* Kolom Kiri */}
          <div className={styles.detailsColumn}>
            {userDetails.left.map((item, index) => (
              <div className={styles.detailItem} key={index}>
                <label>{item.label}</label>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          {/* Kolom Kanan */}
          <div className={styles.detailsColumn}>
            {userDetails.right.map((item, index) => (
              <div className={styles.detailItem} key={index}>
                <label>{item.label}</label>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TABEL ROLE AKSES --- */}
      {view === 'menu' && (
      <div className={styles.roleAksesCard}>
        <div className={styles.roleAksesHeader}>
          <h3>Role Akses | Menu</h3>
          <div className={styles.roleControls}>
            <button className={styles.addButton}>
              <FiPlus /> Tambah
            </button>
            <div className={styles.searchBar}>
              <FiSearch />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        {/* Tabel Role */}
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Aplikasi</th>
                <th>Role</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.no}>
                  <td>{role.no}</td>
                  <td>{role.aplikasi}</td>
                  <td>{role.role}</td>
                  <td>{role.status}</td>
                  <td>
                    <button 
                        className={styles.setAksesButton}
                        onClick={() => setView('submenu')} // Ganti view
                      >
                        {role.aksi}
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
      {/* 6. Tampilkan ini jika view === 'submenu' */}
      {view === 'submenu' && (
        <RoleAksesSubMenu onBack={() => setView('menu')} />
      )}
      
    </div>
  );
}

export default ProfilePengguna;