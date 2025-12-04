// src/pages/RegistrasiPengguna.jsx
import styles from './RegistrasiPengguna.module.css';
import { 
  FiArrowLeft, 
  FiEdit, 
  FiCalendar, 
  FiSave 
} from 'react-icons/fi';

function RegistrasiPengguna() {
  return (
    <div className={styles.pageContainer}>
      {/* --- HEADER HALAMAN --- */}
      <div className={styles.pageHeader}>
        <button className={styles.backButton}>
          <FiArrowLeft />
        </button>
        <h2>Registrasi Pengguna</h2>
      </div>

      {/* --- KONTEN UTAMA (KOTAK PUTIH BESAR) --- */}
      <div className={styles.formWrapper}>

        {/* --- KARTU INFO USER (KANAN ATAS) --- */}
        <div className={styles.userInfoCard}>
          <div className={styles.userInfo}>
            <h3>Rusnita</h3>
            <p>nita_unni@yahoo.co.id</p>
          </div>
          <button className={styles.editButton}><FiEdit /></button>
        </div>

        {/* --- FORMULIR (GRID 2 KOLOM) --- */}
        <form className={styles.formGrid}>
          
          {/* KOLOM KIRI */}
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="nama">Nama *</label>
              <input type="text" id="nama" placeholder="Masukkan nama pengguna" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="tempatLahir">Tempat Lahir *</label>
              <input type="text" id="tempatLahir" placeholder="Masukkan tempat lahir" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="domisili">Alamat Domisili *</label>
              <input type="text" id="domisili" placeholder="Masukkan alamat domisili" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="ktp">Alamat KTP *</label>
              <input type="text" id="ktp" placeholder="Masukkan alamat KTP" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="hp">No. Handphone *</label>
              <input type="text" id="hp" placeholder="Masukkan No. Handphone" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nik">NIK *</label>
              <input type="text" id="nik" placeholder="Masukkan NIK" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="profesi">Profesi *</label>
              <input type="text" id="profesi" placeholder="Masukkan nama profesi" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nim">NIM *</label>
              <input type="text" id="nim" placeholder="Masukkan NIM" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jenisPengguna">Jenis Pengguna *</label>
              <input type="text" id="jenisPengguna" placeholder="Masukkan jenis pengguna" />
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="jenisKelamin">Jenis Kelamin</label>
              <select id="jenisKelamin">
                <option value="">Pilih jenis kelamin</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="tglLahir">Tanggal Lahir *</label>
              <div className={styles.inputWithIcon}>
                <input type="text" id="tglLahir" placeholder="dd/mm/yyyy" />
                <FiCalendar className={styles.icon} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Masukkan email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="instansi">Instansi *</label>
              <input type="text" id="instansi" placeholder="Masukkan nama instansi" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nuptk">NUPTK *</label>
              <input type="text" id="nuptk" placeholder="Masukkan nomor NUPTK" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nip">NIP *</label>
              <input type="text" id="nip" placeholder="Masukkan NIP" />
            </div>
          </div>
        </form>

        {/* --- TOMBOL SIMPAN --- */}
        <div className={styles.formFooter}>
          <button className={styles.saveButton}>
            <FiSave /> Simpan
          </button>
        </div>

      </div>
    </div>
  );
}

export default RegistrasiPengguna;