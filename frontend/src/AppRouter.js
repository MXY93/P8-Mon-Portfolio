import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

export default function AppRouter({ themeToggler }) {
  return (
    <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Layout themeToggler={themeToggler}><Home /></Layout>} />
          <Route path="*" element={<Layout themeToggler={themeToggler} isErrorPage={true}><NotFound /></Layout>} />
        </Routes>
    </BrowserRouter>
  );
}
