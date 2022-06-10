import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { staticLinks } from 'assets/exportData/links';
import styles from './Register.module.scss';

const Register: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className={styles.register}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Typography variant='h4' gutterBottom component='div'>
          Регистрация
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

        <TextField
          id='confirmPassword'
          label='Подтверждение пароля'
          type='password'
          autoComplete='current-password'
          className={styles.textField}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />

        <Button variant='contained' size='large' type='submit'>
          Создать
        </Button>

        <NavLink to={staticLinks.auth} className={styles.auth}>
          Уже есть аккаунт
        </NavLink>
      </form>
    </section>
  );
};

export default Register;
