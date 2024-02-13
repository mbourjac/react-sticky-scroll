import { Link } from 'react-router-dom';
import eyeIcon from '../../assets/icons/eye.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={eyeIcon} alt="Home" />
      </Link>
      <nav className={styles.nav}>
        <Link to="sunt" className={styles.link}>
          Sunt
        </Link>
        <Link to="nulla" className={styles.link}>
          Nulla
        </Link>
        <Link to="velit" className={styles.link}>
          Velit
        </Link>
      </nav>
    </header>
  );
};
