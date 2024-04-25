import { lazy } from 'react';

const Chart = lazy(() => import('./Chart'));
const Settings = lazy(() => import('./Settings'));
const Dashboard = lazy(() => import('./Dashboard'));

export { Dashboard, Settings, Chart };
