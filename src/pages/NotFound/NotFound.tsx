import { FC } from 'react';
import { Typography } from '@mui/material';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.message}>
        <Typography
          variant='h4'
          gutterBottom
          component='div'
          className={styles.header}
        >
          404
        </Typography>

        <span className={styles.description}>Такая страница не найдена</span>
      </div>
    </section>
  )
}

export default NotFound;