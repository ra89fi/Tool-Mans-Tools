import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/shared/Header';
import app from './firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/pages/Login';
import Purchase from './components/pages/Purchase';
import Register from './components/pages/Register';
const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user] = useAuthState(auth);
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/purchase"
                    element={
                        <RequireAuth>
                            <Purchase />
                        </RequireAuth>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
