import { Route, Routes } from 'react-router-dom';

import PageTitle from 'components/PageTitle';
import PublicRoute from './PublicRoute';
import { Home } from '@/pages';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PublicRoute>
            <PageTitle title="Our Wedding" />
            <Home />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
