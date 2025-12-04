// src/components/StatCard.jsx
import styles from './StatCard.module.css';

function StatCard({ title, count, waveImage }) {
  
  const cardStyle = {
    backgroundImage: `url(${waveImage})` 
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.count}>{count}</p>
    </div>
  );
}
export default StatCard;