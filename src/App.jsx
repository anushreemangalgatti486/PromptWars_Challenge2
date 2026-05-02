import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SparkCursor from './components/layout/SparkCursor';
import HomePage from './pages/HomePage';
import LearnHubPage from './pages/LearnHubPage';
import CountriesPage from './pages/CountriesPage';
import CalendarPage from './pages/CalendarPage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import GlossaryPage from './pages/GlossaryPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-light text-text-primary">
        <SparkCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnHubPage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
