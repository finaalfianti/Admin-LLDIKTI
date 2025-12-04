// src/components/Header.jsx
import styles from './Header.module.css';
import { FiMenu } from 'react-icons/fi'; 

function Header({ onToggleSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}>MAN-ACCESS</h1>

        <div onClick={onToggleSidebar} style={{ cursor: 'pointer' }}>
           <FiMenu className={styles.menuIcon} size={24} />
        </div>

      </div>
      <div className={styles.rightSection}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>User</span>
          <span className={styles.userRole}>Admin</span>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
}
export default Header;