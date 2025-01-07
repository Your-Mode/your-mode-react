import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@app/layout';
import { ManageCustomerPage, AddMyCustomerPage, CustomerDetailPage } from "@pages/manage/ui";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ManageCustomerPage />,
      },
      {
        path: 'add-customer',
        element: <AddMyCustomerPage />
      },
      {
        path: 'customer/:id',
        element: <CustomerDetailPage />
      }
    ],
  },
]);
