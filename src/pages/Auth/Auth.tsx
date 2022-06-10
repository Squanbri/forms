import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { staticLinks } from 'assets/exportData/links';
import styles from './Auth.module.scss';

const Auth: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className={styles.auth}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Typography variant='h4' gutterBottom component='div'>
          Авторизация
        </Typography>

        <TextField
          id='email'
          label='Почта'
          type='text'
          className={styles.textField}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <TextField
          id='password'
          label='Пароль'
          type='password'
          autoComplete='current-password'
          className={styles.textField}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button variant='contained' size='large' type='submit'>
          Войти
        </Button>

        <NavLink to={staticLinks.register} className={styles.register}>
          Создать аккаунт
        </NavLink>
      </form>
    </section>
  );
};

export default Auth;
