import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { staticLinks } from 'assets/exportData/links';
import { useLoginMutation } from 'services/AuthService';
import styles from './Auth.module.scss';
import { useAppDispatch } from 'hooks/redux';
import { authSlice } from 'store/reducers/AuthSlice';
import { IError } from 'models/errorInterface';

const Auth: FC = () => {
  const navigate = useNavigate();
  const { setCredentials } = authSlice.actions;
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (credentials) => {
      const response = await login(credentials);
      
      if ('data' in response) {
        dispatch(setCredentials(response.data.access_token));
        navigate(staticLinks.main);
      } else {
        const newError = response.error as IError;
        
        if (typeof newError.data.message === 'string') {
          setError(newError.data.message);
        }
      }
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

        {error && 
          <span className={styles.errorMessage}>{error}</span>
        }

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
