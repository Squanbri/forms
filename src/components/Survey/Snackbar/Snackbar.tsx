import { Alert, Snackbar as SnackbarMUI } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC, useState } from 'react';
import { surveySlice } from 'store/reducers/SurveySlice';

const Snackbar: FC = () => {
  const { snackbarText, snackbarActive } = useAppSelector(state => state.surveyReducer);
  const { setSnackbarProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setSnackbarProperty({
      text: '', 
      active: false
    }));
  };

  return (
    <SnackbarMUI
      open={snackbarActive}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>
        {snackbarText}
      </Alert>
    </SnackbarMUI>
  );
};

export default Snackbar;
