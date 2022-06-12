import { Box, Modal, Typography } from '@mui/material';
import { FC } from 'react';

import { RegisterModalProps } from './types';
import { useNavigate } from 'react-router-dom';
import { staticLinks } from 'assets/exportData/links';
import styles from './Register.module.scss';

const RegisterModal: FC<RegisterModalProps> = ({
  open,
  setOpen
}) => {
  const navigate = useNavigate();
  
  const closeModal = () => {
    setOpen(false);
    navigate(staticLinks.auth);
  }

  return (
    <Modal
      open={open}
      onClose={closeModal}
    >
      <Box className={styles.modal}>
        <Typography variant="h6" component="h2">
          Необходимо подтвердить вашу почту
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Письмо с подтверждение отправлено на указанную почту. Если письмо не приходит больше 5 минут, проверьте папку "Cпам".
        </Typography>
      </Box>
    </Modal>
  )
}

export default RegisterModal;