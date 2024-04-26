import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './store';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
