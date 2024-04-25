import { Route, Routes } from 'react-router-dom';

import { Chart, Dashboard, Settings } from '@/pages';
import PageTitle from 'components/PageTitle';
import PublicRoute from './PublicRoute';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PublicRoute>
            <PageTitle title="Dashboard" />
            <Dashboard />
          </PublicRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PublicRoute>
            <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Settings />
          </PublicRoute>
        }
      />
      <Route
        path="/chart"
        element={
          <PublicRoute>
            <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Chart />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
