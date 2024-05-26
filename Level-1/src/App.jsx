import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="app">
       
        <Router> {/* Wrap everything inside Router */}
        <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Define routes properly */}
            </Routes>
        </Router>
    </div>
  );
}
export default App