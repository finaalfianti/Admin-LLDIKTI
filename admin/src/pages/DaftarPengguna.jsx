// src/pages/DaftarPengguna.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DaftarPengguna.module.css';
import { 
  FiArrowLeft, 
  FiPlus, 
  FiSearch, 
  FiFilter, 
  FiChevronDown,
  FiEye,
  FiEdit,
  FiTrash
} from 'react-icons/fi';

const dummyData = [
  { id: 1, kode: 'Hardianto', namaLengkap: 'Anry Harlianthin Depu', namaPengguna: 'anryharliathindepu@gmail...', instansi: 'Detail' },
  { id: 2, kode: 'Hardianto', namaLengkap: 'Hardianto', namaPengguna: 'hardiantomath8@gmail.com', instansi: 'Detail' },
  { id: 3, kode: 'Rusnita', namaLengkap: 'Rusnita', namaPengguna: 'nita_unni@yahoo.co.id', instansi: 'Detail' },
  { id: 4, kode: 'Abdul Sarlan Menungsa', namaLengkap: 'Abdul Sarlan Menungsa', namaPengguna: 'abdulsarlanmenungsa@gm...', instansi: 'Detail' },
  { id: 5, kode: 'Rosminah Mansyarif', namaLengkap: 'Rosminah Mansyarif', namaPengguna: 'rosminah.pratama@gmail...', instansi: 'Detail' },
  { id: 6, kode: 'Sari Anis Lestari B', namaLengkap: 'Sari Anis Lestari B', namaPengguna: 'sarianri.83@gmail.com', instansi: 'Detail' },
];

function DaftarPengguna() {
  const [openDropdownId, setOpenDropdownId] = useState(null); // null = tidak ada yg terbuka
  
  const navigate = useNavigate();

  // Fungsi untuk klik "Detail" (Navigasi)
  const handleDetailClick = (userId) => {
    navigate(`/profil/${userId}`);
  };

  // Fungsi untuk klik ikon panah (Buka/Tutup Menu)
  const handleDropdownToggle = (userId) => {
    if (openDropdownId === userId) {
      setOpenDropdownId(null); // Tutup jika sudah terbuka
    } else {
      setOpenDropdownId(userId); // Buka yang baru
    }
  };
  
  return (
    <div className={styles.pageContainer}>
      
      {/* --- HEADER HALAMAN --- */}
      <div className={styles.header}>
        <button className={styles.backButton}>
          <FiArrowLeft />
        </button>
        <h2>Daftar Pengguna</h2>
      </div>

      {/* --- KONTROL (TOMBOL & SEARCH) --- */}
      <div className={styles.controls}>
        <button className={styles.addButton}>
          <FiPlus /> Tambah
        </button>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Pilih Aplikasi" />
          <button className={styles.filterButton}>
            <FiFilter />
          </button>
        </div>
      </div>

      {/* --- TABEL DATA --- */}
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Kode Pengguna</th>
              <th>Nama Lengkap</th>
              <th>Nama Pengguna</th>
              <th>Instansi</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user) => (
              <tr key={user.id}>
                <td>{user.kode}</td>
                <td>{user.namaLengkap}</td>
                <td>{user.namaPengguna}</td>
                
                {/* 5. KEMBALIKAN KE TOMBOL TUNGGAL */}
                <td className={styles.actionCell}> {/* Wrapper untuk posisi relatif */}
                  
                  {/* Grup Tombol Split */}
                  <div className={styles.buttonGroup}>
                    {/* Tombol 1: Detail (Teks & Ikon) */}
                    <button 
                      className={styles.detailTextButton}
                      onClick={() => handleDetailClick(user.id)}
                    >
                      <FiEye /> Detail
                    </button>
                    {/* Tombol 2: Dropdown (Ikon) */}
                    <button 
                      className={styles.dropdownIconButton}
                      onClick={() => handleDropdownToggle(user.id)}
                    >
                      <FiChevronDown />
                    </button>
                  </div>
                  
                  {/* Menu Dropdown yang Muncul */}
                  {openDropdownId === user.id && (
                    <div className={styles.dropdownMenu}>
                      <button className={styles.menuItem}>
                        <FiEdit /> Edit
                      </button>
                      <button className={`${styles.menuItem} ${styles.danger}`}>
                        <FiTrash /> Hapus
                      </button>
                    </div>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DaftarPengguna;