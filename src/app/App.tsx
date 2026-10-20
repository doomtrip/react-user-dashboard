import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { DashboardPage } from '../pages/dashboard/ui/DashboardPage';
import { UserDetailsPage } from '../pages/user-details/ui/UserDetailsPage';
import { AboutPage } from '../pages/about/ui/AboutPage';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav style={{ padding: '20px', backgroundColor: '#2c3e50', display: 'flex', gap: '20px' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Главная</Link>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>О проекте</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/user/:id" element={<UserDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};