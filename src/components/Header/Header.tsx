import { FC } from 'react'
import { Container } from '@mui/material';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth='lg' className={styles.container}>
        <h1>Forms</h1>
      </Container>
    </header>
  )
}

export default Header;