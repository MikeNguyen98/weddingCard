
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import AppProvider from './store';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
