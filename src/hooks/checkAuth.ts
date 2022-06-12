import { useEffect, useState } from 'react';

import { IError } from 'models/errorInterface';
import { authSlice } from 'store/reducers/AuthSlice';
import { useAppDispatch } from 'hooks/redux';
import { useCheckAuthQuery } from 'services/AuthService';


export const useCheckAuth = () => {
  const [skip, setSkip] = useState(true);
  const { setCredentials } = authSlice.actions;
  const token = localStorage.getItem('token_auth');
  // console.log('before query: ', skip)
  const { data, error } = useCheckAuthQuery(token, {
    skip
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token !== null) {
      if (skip === true) {
        setSkip(false);    
      }
      if (data?.access_token) {
        dispatch(setCredentials(data.access_token));
      } 

      const newError = error as IError;
      if (newError?.status === 401) {
        localStorage.removeItem('token_auth');
      }
    }
  }, [data]);
};