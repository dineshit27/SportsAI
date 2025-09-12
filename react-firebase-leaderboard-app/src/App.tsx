import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaderboardPage from './pages/LeaderboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;