import { Button, Typography } from '@mui/material';
import { staticLinks } from 'assets/exportData/links';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles.left}>
        <Typography variant='h1' component='h1' className={styles.header}>
          <span>Move faster</span>
          with intuitive React UI tools
        </Typography>

        <p className={styles.description}>
          MUI offers a comprehensive suite of UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components.
        </p>

        <NavLink 
          to={staticLinks.forms} 
          className={styles.linkStart}
        > 
          Попробовать &rarr;
        </NavLink>
      </div>

      <div className={styles.right}></div>
    </section>
  );
};

export default Main;
