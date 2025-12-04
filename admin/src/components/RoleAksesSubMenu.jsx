// src/components/RoleAksesSubMenu.jsx
import styles from './RoleAksesSubMenu.module.css';
import { 
  FiPlus, 
  FiSearch,
  FiArrowLeft
} from 'react-icons/fi';

// Data dummy untuk toggles
const subMenuData = [
  { id: 1, menu: 'Main Menu', checked: true },
  { id: 2, menu: 'Administrator', checked: false },
  { id: 3, menu: 'Asesor', checked: true },
  { id: 4, menu: 'Perguruan Tinggi', checked: false },
  { id: 5, menu: 'Developer', checked: true },
];

// Komponen ini menerima prop 'onBack' untuk kembali
function RoleAksesSubMenu({ onBack }) {
  return (
    <div className={styles.roleAksesCard}>
      <div className={styles.roleAksesHeader}>
        {/* Header dengan tombol kembali */}
        <div className={styles.headerLeft}>
          <button onClick={onBack} className={styles.backButton}>
            <FiArrowLeft />
          </button>
          <h3>Role Akses | Sub Menu</h3>
        </div>
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

      {/* Tabel Sub Menu with Toggles */}
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Pilih</th>
              <th>Main Menu</th>
            </tr>
          </thead>
          <tbody>
            {subMenuData.map((item) => (
              <tr key={item.id}>
                <td>
                  {/* Ini adalah Toggle Switch CSS */}
                  <label className={styles.toggle}>
                    <input type="checkbox" defaultChecked={item.checked} />
                    <span className={styles.slider}></span>
                  </label>
                </td>
                <td>{item.menu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoleAksesSubMenu;