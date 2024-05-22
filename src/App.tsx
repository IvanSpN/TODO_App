import { Routes, Route } from 'react-router-dom';
import Registration from './pages/RegistrationPage';
import Login from './pages/LoginPage';
import Home from './pages/Home';

import styles from './styles/App.module.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
