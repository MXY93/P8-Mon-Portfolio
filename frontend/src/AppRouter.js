import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

export default function AppRouter({ themeToggler }) {
  return (
    <BrowserRouter basename='/'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout themeToggler={themeToggler}><Home /></Layout>} />
          <Route path="*" element={<Layout themeToggler={themeToggler} isErrorPage={true}><NotFound /></Layout>} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}
