import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

import styles from './Header.module.scss';
import { staticLinks } from 'assets/exportData/links';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth='lg' className={styles.container}>
        <h1>Forms</h1>

        <nav>
          <ul className={styles.list}>
            <li className={styles.navItem}>
              <NavLink to='/' className={styles.navLink}>Формы</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to='/' className={styles.navLink}>Мои формы</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to={staticLinks.auth} className={styles.navLink}>Войти</NavLink>
            </li>
              {/* <button>Выйти</button> */}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header;