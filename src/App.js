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
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Payment from './components/pages/Payment';
import Blogs from './components/pages/Blogs';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/shared/Footer';
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
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <Header user={user} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route
                    path="/purchase/:id"
                    element={
                        <RequireAuth>
                            <Purchase user={user} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard user={user} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/payment/:id"
                    element={
                        <RequireAuth>
                            <Payment user={user} />
                        </RequireAuth>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
