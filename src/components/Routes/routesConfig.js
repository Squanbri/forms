import { staticLinks } from 'assets/exportData/links';
import Survey from 'pages/Survey/Survey';

// export const loaderRoute = {
//   path: '/*',
//   element: <LoaderPage />,
// }

export const publicRoutes = [
  {
    path: staticLinks.survey,
    element: <Survey />,
  }
];
