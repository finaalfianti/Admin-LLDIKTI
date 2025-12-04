// src/components/DonutChart.jsx
import styles from './DonutChart.module.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Universitas', 'Politeknik', 'Institut', 'Sekolah Tinggi'],
  datasets: [
    {
      label: ' Pengguna',
      data: [52.1, 22.8, 13.9, 11.2],
      backgroundColor: [
        '#343434ff', 
        '#92BFFF', 
        '#94E9B8', 
        '#AEC7ED', 
      ],
      borderColor: '#FFFFFF',
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right', 
      labels: {
        usePointStyle: true,
        boxWidth: 8,
      }
    }
  },
  cutout: '70%', 
};

function DonutChart() {
  return (
    <div className={styles.chartWrapper}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
export default DonutChart;