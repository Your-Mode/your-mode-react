import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { ManageCustomerPage } from "@pages/manage/ManageCustomerPage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ManageCustomerPage />,
      },
    ],
  },
]);
