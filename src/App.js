import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/shared/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
