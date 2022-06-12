import { staticLinks } from 'assets/exportData/links';
import { useAppDispatch } from 'hooks/redux';
import { FC, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useConfirmMutation } from 'services/AuthService';
import { authSlice } from 'store/reducers/AuthSlice';

const ConfirmPassword: FC = () => {
  const navigate = useNavigate();
  const { setCredentials } = authSlice.actions;
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const [confirm] = useConfirmMutation();
  const query = new URLSearchParams(search);
  const email = query.get('email');
  const token = query.get('token');

  useEffect(() => {
    async function data() {
      const response = await confirm({ email, token });

      if ('data' in response) {
        dispatch(setCredentials(response.data.access_token));
        navigate(staticLinks.myForms);
      } else {
        navigate(staticLinks.auth);
      }
    }

    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  ;

  return (
    <section>
      <h1>123</h1>
    </section>
  )
}

export default ConfirmPassword;