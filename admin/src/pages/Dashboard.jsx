// src/pages/Dashboard.jsx
import styles from './Dashboard.module.css';
import StatCard from '../components/StatCard';
import DonutChart from '../components/DonutChart';
import GroupedBarChart from '../components/GroupedBarChart';
import CustomBar from '../components/CustomBar';

import wave1 from '../assets/wave1.png';
import wave2 from '../assets/wave2.png';
import wave3 from '../assets/wave3.png';
import wave4 from '../assets/wave4.png';

const stats = [
  // (Pastikan data Anda memiliki 'img' prop)
  { title: 'Aplikasi', count: 0, img: wave1  },
  { title: 'Pengguna', count: 0, img: wave2  },
  { title: 'Profile', count: 0, img: wave3  },
  { title: 'Role Akses', count: 0, img: wave4  },
];

function Dashboard() {
  return (
    <>
      <h2 className={styles.welcomeTitle}>Selamat Datang</h2>

      {/* --- BARIS UTAMA (Stat Cards + Donut Chart) --- */}
      <div className={styles.mainRow}>
        
        {/* 1. KOTAK STAT CARDS (Grid 2x2) */}
        <div className={styles.statGrid}>
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              title={stat.title} 
              count={stat.count} 
              waveImage={stat.img} 
            />
          ))}
        </div>

        {/* 2. KOTAK DONUT CHART */}
        <div className={styles.chartBlock}> {/* pakai ulang style .chartBlock */}
          <h3>Pengguna</h3>
          <DonutChart />
        </div>
      </div>

      {/* --- BARIS BAWAH (Sisa Chart) --- */}
      {/* grid baru untuk sisa chart di bawah */}
      <div className={styles.bottomGrid}>
        <div className={`${styles.chartBlock} ${styles.customBarBlock}`}>
          <h3>Perguruan Tinggi</h3>
          <CustomBar label="Pegawai LLDIKTI" />
          <CustomBar label="Tenaga Pendidik" />
          <CustomBar label="Tenaga Kependidikan" />
          <CustomBar label="Masyarakat Umum" />
        </div>
        
        <div className={`${styles.chartBlock} ${styles.groupedBarBlock}`}>
          <h3>Pengguna Aktif/Non aktif</h3>
          <GroupedBarChart />
        </div>
      </div>
    </>
  );
}
export default Dashboard;