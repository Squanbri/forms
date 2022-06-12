import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

import styles from './Header.module.scss';
import { staticLinks } from 'assets/exportData/links';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { authSlice } from 'store/reducers/AuthSlice';

const Header: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((store) => store.authReducer);
  const { logout } = authSlice.actions;
  const dispatch = useAppDispatch();
  
  const signOut = () => {
    dispatch(logout());
    navigate(staticLinks.auth);
  }
  
  return (
    <header className={styles.header}>
      <Container maxWidth='lg' className={styles.container}>
        <NavLink to={staticLinks.main} className={styles.logoLink}>
          <h1>SmartForms</h1>
        </NavLink>

        <nav>
          <ul className={styles.list}>
            <li className={styles.navItem}>
              <NavLink to='/' className={styles.navLink}>
                Формы
              </NavLink>
            </li>
            {isAuth ? (
              <>
                <li className={styles.navItem}>
                  <NavLink to={staticLinks.myForms} className={styles.navLink}>
                    Мои формы
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.signOut} onClick={signOut}>
                    Выйти
                  </button>
                </li>
              </>
            ) : (
              <li className={styles.navItem}>
                <NavLink to={staticLinks.auth} className={styles.navLink}>
                  Войти
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
