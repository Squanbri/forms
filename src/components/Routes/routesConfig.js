import { staticLinks } from 'assets/exportData/links';
import Auth from 'pages/Auth/Auth';
import Register from 'pages/Register/Register';
import Survey from 'pages/Survey/Survey';

// export const loaderRoute = {
//   path: '/*',
//   element: <LoaderPage />,
// }

export const publicRoutes = [
  {
    path: staticLinks.survey,
    element: <Survey />,
  },
  {
    path: staticLinks.auth,
    element: <Auth />,
  },
  {
    path: staticLinks.register,
    element: <Register />,
  },
];
