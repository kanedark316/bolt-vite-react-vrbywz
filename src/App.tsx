import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ConfirmationPage from './pages/ConfirmationPage';
import RegisterPage from './pages/RegisterPage';
import TVShowsPage from './pages/TVShowsPage';
import MoviesPage from './pages/MoviesPage';
import LivePage from './pages/LivePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/ppv" element={<LivePage />} />
      </Routes>
    </Router>
  );
}

export default App;