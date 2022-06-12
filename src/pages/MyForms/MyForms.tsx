import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import styles from './MyFroms.module.scss';
import { useAddFormMutation } from 'services/FormService';
import { dynamicLinks } from 'assets/exportData/links';

const MyForms: FC = () => {
  const navigate = useNavigate();
  const [createForm, { data }] = useAddFormMutation();

  const onAddSurvey = () => {
    createForm({
      typeForm: 'survey',
      title: 'Название формы',
      questions: [],
    });
  };

  useEffect(() => {
    if (data) {
      navigate(dynamicLinks.form(data.id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className={styles.myForms}>
      <header className={styles.header}>
        <div className={styles.formType}>
          <Paper
            variant='outlined'
            className={styles.formTypeCard}
            onClick={onAddSurvey}
          >
            <AddIcon className={styles.formTypeIcon} color='primary' />
          </Paper>
          <span className={styles.formTypeName}>Опрос</span>
        </div>

        <div className={styles.formType}>
          <Paper variant='outlined' className={styles.formTypeCard}>
            <AddIcon className={styles.formTypeIcon} color='primary' />
          </Paper>
          <span className={styles.formTypeName}>Голосование</span>
        </div>

        <div className={styles.formType}>
          <Paper variant='outlined' className={styles.formTypeCard}>
            <AddIcon className={styles.formTypeIcon} color='primary' />
          </Paper>
          <span className={styles.formTypeName}>Тест</span>
        </div>
      </header>
      <div></div>
    </section>
  );
};

export default MyForms;
