import { FC, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';

import styles from './MyFroms.module.scss';
import { useAddFormMutation, useGetMyFormsQuery } from 'services/FormService';
import { dynamicLinks } from 'assets/exportData/links';

const MyForms: FC = () => {
  const navigate = useNavigate();
  const { data: myForms } = useGetMyFormsQuery();
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
      <div>
        <Typography className={styles.myFormsBodyTitle}>
          Мои формы
        </Typography>

        <div className={styles.myFormsBody}>
          {myForms?.map(form => 
            <div className={styles.myFormCard} key={form.id}>
              <NavLink to={dynamicLinks.form(form.id)}>
                <Paper variant='outlined' className={styles.formTypeCard}>
                  <FormatListNumberedOutlinedIcon 
                    className={styles.formTypeIcon} 
                  />
                </Paper>
              </NavLink>
              <span className={styles.formTypeName}>{form?.content?.title}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyForms;
