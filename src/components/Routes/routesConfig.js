import { dynamicLinks, staticLinks } from 'assets/exportData/links';
import Auth from 'pages/Auth/Auth';
import ConfirmEmail from 'pages/ConfirmEmail/ConfirmEmail';
import Main from 'pages/Main/Main';
import MyForms from 'pages/MyForms/MyForms';
import NotFound from 'pages/NotFound/NotFound';
import Register from 'pages/Register/Register';
import Survey from 'pages/Survey/Survey';

// export const loaderRoute = {
//   path: '/*',
//   element: <LoaderPage />,
// }

export const publicRoutes = [
  {
    path: staticLinks.main,
    element: <Main />,
  },
  {
    path: staticLinks.form,
    element: <Survey />,
  },
  {
    path: '*',
    element: <NotFound/>
  }
];

export const unauthRoutes = [
  {
    path: staticLinks.auth,
    element: <Auth />,
  },
  {
    path: staticLinks.register,
    element: <Register />,
  },
  {
    path: staticLinks.confirmEmail,
    element: <ConfirmEmail />,
  },
];

export const authRoutes = [
  {
    path: staticLinks.myForms,
    element: <MyForms />,
  },
];
