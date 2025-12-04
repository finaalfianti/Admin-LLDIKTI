// src/components/CustomBar.jsx
import styles from './CustomBar.module.css';

function CustomBar({ label, value, color }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.barBackground}>
        <div 
          className={styles.barFill} 
          style={{ width: `${value}%`, backgroundColor: color }}
        >
        </div>
      </div>
    </div>
  );
}
export default CustomBar;