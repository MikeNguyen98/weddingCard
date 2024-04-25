import React, { lazy } from 'react';
import Breadcrumb from 'components/Breadcrumbs/Breadcrumb';
const ChartOne = lazy(() => import('components/Charts/ChartOne'));
const ChartThree = lazy(() => import('components/Charts/ChartThree'));
const ChartTwo = lazy(() => import('components/Charts/ChartTwo'));

const Chart: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </React.Fragment>
  );
};

export default Chart;
