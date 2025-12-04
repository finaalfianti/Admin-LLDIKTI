import styles from './GroupedBarChart.module.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, // Untuk Sumbu X (Kategori)
  LinearScale,   // Untuk Sumbu Y (Angka)
  BarElement,      // Untuk Balok Grafiknya
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// -----------------------------------------------------------------------
// !! INI BAGIAN PALING PENTING !!
// Mendaftarkan elemen-elemen yang akan digunakan oleh Chart.js
// Tanpa ini, halaman Anda akan error atau menampilkan layar putih.
// -----------------------------------------------------------------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'bottom', 
    },
    title: {
      display: false, 
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

// Data untuk grafik
export const data = {
  labels: ['Masyarakat umum', 'Tenaga Kependidikan', 'Tenaga Pendidik', 'Pegawai LLDIKTI'],
  datasets: [
    {
      label: 'Aktif',
      data: [20, 20, 10, 10], // Perkiraan data
      backgroundColor: '#34D399', 
    },
    {
      label: 'Non Aktif',
      data: [22, 40, 12, 22], // Perkiraan data
      backgroundColor: '#F87171',
    },
  ],
};

function GroupedBarChart() {
  return (
    <div className={styles.chartWrapper}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default GroupedBarChart;