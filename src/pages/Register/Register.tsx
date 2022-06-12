import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { staticLinks } from 'assets/exportData/links';
import { useAppDispatch } from 'hooks/redux';
import { useRegisterMutation } from 'services/AuthService';
import { IError } from 'models/errorInterface';
import RegisterModal from './RegisterModal';
import styles from './Register.module.scss';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (credentials) => {
      const response = await register(credentials);
      
      if ('data' in response) {
        setOpenRegisterModal(true);
        //dispatch(setCredentials(response.data.access_token));
      } else {
        const newError = response.error as IError;
        
        if (typeof newError.data.errors === 'object') {
          formik.setErrors(newError.data.errors)
        }
      }
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
        {formik.errors.email && formik.touched.email ? (
          <span className={styles.errorMessage}>{formik.errors.email}</span>
        ) : null}

        <TextField
          id='password'
          label='Пароль'
          type='password'
          autoComplete='current-password'
          className={styles.textField}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <span className={styles.errorMessage}>{formik.errors.password}</span>
        ) : null}

        <TextField
          id='confirmPassword'
          label='Подтверждение пароля'
          type='password'
          autoComplete='current-password'
          className={styles.textField}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
          <span className={styles.errorMessage}>{formik.errors.confirmPassword}</span>
        ) : null}

        <Button variant='contained' size='large' type='submit'>
          Создать
        </Button>

        <NavLink to={staticLinks.auth} className={styles.auth}>
          Уже есть аккаунт
        </NavLink>
      </form>
      
      <RegisterModal 
        open={openRegisterModal}
        setOpen={setOpenRegisterModal}
      />
    </section>
  );
};

export default Register;
